var Unit = Backbone.Model.extend({

    defaults:{
        M: 0,
        CC: 1,
        CT: 0,
        F: 1,
        E: 1,
        Pv: 1,
        I: 0,
        A: 0,
        Cd: 0,
        Svg:0,
        SvgInvu:0,
        Class:'Unit'
    },

    equipement:[],

    addEquipement:function(item){
        this.equipement.push(item);
    },

    initialize: function(){
        console.log("a new unit join the battlefield");
        this.on("change:Pv", this.changePV /*function to call*/, this);
    },

    changePV: function(model, value, options){
        console.log("je me fais défonce, il me reste " +value+" pv.");
        if(value<=0){
            this.Pv=0;
            ajouterTexteCombat("je suis mort",'black');
        }

    },

    attaquerHeros: function(enemy){
        var attaquetoucher=0;
        var attaqueblesser=0;
        var attaqueSauvegarder=0;
        difCombat = CC[this.get("CC")][enemy.get("CC")];
        for(var nbattaque=0;nbattaque<this.get("A");nbattaque++){
            if(rand6() >= difCombat)
                attaquetoucher++;
        }

        ajouterTexteCombat(this.cid + " touche " + attaquetoucher + " fois " +enemy.cid,'green');
        if(attaquetoucher == 0){
            ajouterTexteCombat(this.cid +" loupe toute ces attaques",'black');
            return;
        }
        difForce = FE[this.get("F")][enemy.get("E")];
        for(var i=0;i < attaquetoucher;i++){
            if(rand6() >= difForce)
                attaqueblesser++;
        }
        ajouterTexteCombat(this.cid + " blesse " + attaqueblesser + " fois " +enemy.cid,'red');

        var PvRestant = enemy.get("Pv");
        if(4-this.get("F") >0)
            var difSvg = enemy.get("Svg")-(7-this.get("f"));
        else
            difSvg = enemy.get("Svg");

        if(difSvg <= 0)
            PvRestant -= attaqueblesser;
        else
            for (var i = 0; i < attaqueblesser; i++)
                if (rand6() >= difSvg)
                    PvRestant--;
                else
                    attaqueSauvegarder++;

        ajouterTexteCombat("l'armure de " +enemy.cid+ " lui évite "+attaqueSauvegarder+"degats",'blue');
        enemy.set("Pv",PvRestant);

    }
});


var UnitBestaire = Backbone.Model.extend({/*pour la création des armées plus que pour "jouer"*/
    defaults: {
        PointCost: 0,
        SH:null,
        Race:null
    },

    initialize: function(){
        console.log("UnitBestaire called");
    }
});

var Element = Backbone.Model.extend({

    defaults:{
        slow:0,
        protect:0,
        high:false,
        SH:null
    },

    initialize: function(){
        console.log("Element crée");
    }
});

var Equipement = Backbone.Model.extend({

    defaults:{
        SH:null/*see some way to modify the ReelStat of unit*/
    },

    initialize: function(){
        console.log("Equipement crée");
    }
});


var Troop = Backbone.Model.extend({

    defaults:{
        unit:null,
        number:0,
        numberFrontMax:1
    },

    equipement:[],

    addEquipement:function(item){
        this.equipement.push(item);
    },

    initialize: function(){
        console.log("Troupe crée");
        this.on("change:Degatrecu", this.changedegat /*function to call*/, this);
    },

    changedegat: function(model, value, options){
        //console.log("je me fais défonce, il me reste " +value+" pv.");
        console.log("degat recu = "+value);
    },

    attaquerTroop : function(enemyTroop){
        var attaquetoucher=0;
        var attaqueblesser=0;
        var attaqueSauvegarder=0;
        var attaqueNonSauvegarder=0;

        unit1=this.get('unit');
        unit2=enemyTroop.get('unit');


        difCombat = CC[unit1.get("CC")][unit2.get("CC")];

        var nbattaquemax = unit1.get("A")*this.get('number');

        for(var nbattaque=0;nbattaque<nbattaquemax;nbattaque++){
            if(rand6() >= difCombat)
                attaquetoucher++;
        }
        ajouterTexteCombat(unit1.cid + " touche " + attaquetoucher + " fois " +unit2.cid,'green');
        if(attaquetoucher == 0){
            ajouterTexteCombat("la troupe n'a fait aucun dégat.",'black');
            return
        }
        difForce = FE[unit1.get("F")][unit2.get("E")];
        for(var i=0;i < attaquetoucher;i++){
            if(rand6() >= difForce)
                attaqueblesser++;
        }
        ajouterTexteCombat(unit1.cid + " blesse " + attaqueblesser + " fois " +unit2.cid,'red');

        if(4-unit1.get("F") >0)
            var difSvg = unit2.get("Svg")-(7-unit1.get("f"));
        else
            difSvg = unit2.get("Svg");

        if(difSvg <= 0)
            attaqueNonSauvegarder += attaqueblesser;
        else
            for (var i = 0; i < attaqueblesser; i++)
                if (rand6() >= difSvg)
                    attaqueNonSauvegarder++;
                else
                    attaqueSauvegarder++;

        ajouterTexteCombat("l'armure de " +enemyTroop.cid+ " lui évite "+attaqueSauvegarder+"degats au total",'blue');
        return attaqueNonSauvegarder;
    }
});

function ajouterTexteCombat(texte,couleur){
    $('<p/>',{
        'class':'baston',
        'html':texte,
        'style':'color:'+couleur+';'
    }).appendTo('#resumecombat');
}