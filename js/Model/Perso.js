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

