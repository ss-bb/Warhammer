/**
 * Created by olivier.goyon on 06/10/2014.
 */
var CC;
var FE;

var TabCombat = $.getJSON('TabCombat.json',function(data){
    CC = data.CC;
    FE = data.FE;
    console.log(CC);
    console.log(FE);
    debutcombat(ogre,unsac);debutcombat(ogre,unsac);
});



var ogre = new Unit({M:5,CC:5,CT:5,F:5,E:5,Pv:5,I:5,A:5,Cd:10});
var unsac = new Unit({Pv:15});



function debutcombat(me,enemy){
    if(me.get("I") > enemy.get("I")){
        attaque(me, enemy);
        attaque(enemy, me);
    }
    else if(me.get("I") == enemy.get("I"))
    {
        if(rand() > 0.5){
            attaque(me, enemy);
            attaque(enemy, me)
        }
        else{
            attaque(enemy, me);
            attaque(me, enemy);
        }
    }
    else{
        attaque(enemy, me);
        attaque(me, enemy);
    }
}

function attaque(unit1,unit2){

    var attaquetoucher=0;
    var attaqueblesser=0;
    difCombat = CC[unit1.get("CC")][unit2.get("CC")];
    for(var nbattaque=0;nbattaque<unit1.get("A");nbattaque++){
        if(rand16() >= difCombat)
            attaquetoucher++;
    }
    difForce = FE[unit1.get("F")][unit2.get("E")];
    for(var i=0;i < attaquetoucher;i++){
        if(rand16() >= difForce)
            attaqueblesser++;
    }

    var PvRestant = unit2.get("Pv");
    if(4-unit1.get("F") >0)
        var difSvg = unit2.get("Svg")-(7-unit1.get("f"));
    else
        difSvg = unit2.get("Svg");

    if(difSvg >= 0)
        PvRestant -= attaqueblesser;
    else
        for (var i = 0; i < attaqueblesser; i++)
            if (rand16() >= difSvg)
                PvRestant--;

    unit2.set("Pv",PvRestant);
}

