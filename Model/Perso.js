Unit = Backbone.Model.extend({
    defaults: {
        M: 0,
        CC: 0,
        CT: 0,
        F: 0,
        E: 0,
        Pv: 1,
        I: 0,
        A: 0,
        Cd: 0
    },

    equipement:[],

    addEquipement:function(item){
        this.equipement.push(item);
    },

    initialize: function(){
        console.log("a new unit join the battlefield");
    }
});

FullUnitIfno = Backbone.Model.extend({
    defaults: {
        Unit:null,
        PointCost: 0,
        Type: null,
        SH:null,
        Race:null
    },

    initialize: function(){
        console.log("fullunitinfo called");
    }
});

Element = Backbone.Model.extend({

    default:{
        slow:0,
        protect:0,
        high:false,
        SH:null
    },

    initialize: function(){
        console.log("Element crée");
    }
});

Equipement = Backbone.Model.extend({

    default:{
        SH:null,
        amor:0
    },

    initialize: function(){
        console.log("Equipement crée");
    }
});


Troop = Backbone.Model.extend({

    default:{
        unit:null,
        number:0
    },

    equipement:[],

    addEquipement:function(item){
        this.equipement.push(item);
    },

    initialize: function(){
        console.log("Troupe crée");
    }
});

//test de création de UNIT

var troll = new Unit({M:5,CC:5,CT:5,F:5,E:5,Pv:5,I:5,A:5,Cd:10});
var gobelin = new Unit();

//test de création de l'infoUnit
var InfoTroll = new FullUnitIfno({Unit:troll,PointCost:35,Race:"ogre"});

//test de création d'élément.
var forest = new Element({slow:1,protect:1});

//test de création d'équipement et d'ajout a l'unité.
var armor = new Equipement({armor:2});
troll.addEquipement(armor);

//test de la troupe
var uniteogre = new Troop({unit:troll,number:3});
uniteogre.addEquipement(armor);



console.log("troll :"+troll);
console.log("gobelin : "+gobelin);
