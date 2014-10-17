Unit = Backbone.Model.extend({
    defaults: {
        M: 0,
        CC: 1,
        CT: 0,
        F: 1,
        E: 1,
        Pv: 1,
        I: 0,
        A: 0,
        Cd: 0,
        Svg:0
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
        //console.log("je me fais défonce, il me reste " +value+" pv.");
        if(value<=0)
            ajouterTexteCombat("je suis mort",'black');
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
        number:0,
        Degatrecu:0
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
    }
});

