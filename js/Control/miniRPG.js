var CC;
var FE;
var equipe1 = [];
var equipe2 = [];

var TabCombat = $.getJSON('TabCombat.json',function(data){
    CC = data.CC;
    FE = data.FE;

    lancerRPG();
});



function lancerRPG(){

    CreeUnit();

    for(var i=0;i<6;i++)
        lancerTour(i);
}

function CreeUnit(){

    var troll = new Unit({CC: 5,F: 5, E: 5, Pv: 5, I: 5, A: 5, Cd: 10, Svg: 1});
    equipe1.push(troll);
    var TroupeTroll = new Troop({unit:troll,number:3,numberFrontMax:3});
    equipe1.push(TroupeTroll);

    var nain = new Unit({CC: 4,F: 3, E: 4, Pv: 2, I: 3, A: 1, Cd: 8, Svg: 1});
    equipe2.push(troll);
    var TroupeNaine = new Troop({unit:nain,number:10,numberFrontMax:4});
    equipe2.push(TroupeNaine);
}

function lancerTour(numTour){

    /* test rapido de si sa marche*/
    for(var i=0;i<equipe1.length;i++){ // supporter par firefox THEORIQUEMENT
        debutcombat(equipe1[i],equipe2[i]);
    }

}


function debutcombat(unit1Class, unit2Class){


    if(unit1Class.get('Class') === 'Unit')
        var unit1 = unit1Class;
    else
        unit1 = unit1Class.get('Unit');

    if(unit2Class.get('Class') === 'Unit')
        var unit2 = unit2Class;
    else
        unit2 = unit2Class.get('Unit');


    if(unit1.get('I') > unit2.get('I')){
        unit1.attaquer(unit2);
        if(unit2.isAlive)
            unit2.attaquer(unit1);
    }
    else if(unit1.get('I') === unit2.get('I'))
    {
        if(rand() > 0.5){
            unit1.attaquer(unit2);
            if(unit2.isAlive)
                unit2.attaquer(unit1);
        }
        else{
            unit2.attaquer(unit1);
            if(unit1.isAlive)
                unit1.attaquer(unit2);
        }
    }
    else{
        unit2.attaquer(unit1);
        if(unit1.isAlive)
            unit1.attaquer(unit2);
    }
}
