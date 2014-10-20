/**
 * Created by olivier.goyon on 06/10/2014.
 */

/* le but est de se faire combattre deux unité a l'arache.*/
var CC;
var FE;

var TabCombat = $.getJSON('TabCombat.json',function(data){

    var ogre = new Unit({M:5,CC:5,F:5,E:5,Pv:5,I:5,A:5,Cd:10,Svg:2});
    var nain = new Unit({Pv:2,Svg:1,CC:3,F:3,E:3,A:2,Cd:7});

    CC = data.CC;
    FE = data.FE;
    debutcombat(ogre,nain);

    console.log("fin combat");
});





function debutcombat(me,enemy){

    if(me.get("I") > enemy.get("I")){
        var Tuer = attaque(me, enemy);
        if(Tuer != 0)
            attaque(enemy, me);
    }
    else if(me.get("I") == enemy.get("I"))
    {
        if(rand() > 0.5){
            var Tuer = attaque(me, enemy);
            if(Tuer != 0)
                attaque(enemy, me);
        }
        else{
            var Tuer = attaque(enemy, me);
            if(Tuer != 0)
                attaque(me, enemy);
        }
    }
    else{
        var Tuer = attaque(enemy, me);
        if(Tuer != 0)
            attaque(me, enemy);
    }
}

function attaque(unit1,unit2){

    var attaquetoucher=0;
    var attaqueblesser=0;
    var attaqueSauvegarder=0;
    difCombat = CC[unit1.get("CC")][unit2.get("CC")];
    for(var nbattaque=0;nbattaque<unit1.get("A");nbattaque++){
        if(rand6() >= difCombat)
            attaquetoucher++;
    }
    ajouterTexteCombat(unit1.cid + " touche " + attaquetoucher + " fois " +unit2.cid,'green');
    if(attaquetoucher == 0){
        ajouterTexteCombat("j'ai rater toute mes attaques comme un ****",'black');
        return unit2.get("Pv");
    }
    difForce = FE[unit1.get("F")][unit2.get("E")];
    for(var i=0;i < attaquetoucher;i++){
        if(rand6() >= difForce)
            attaqueblesser++;
    }
    ajouterTexteCombat(unit1.cid + " blesse " + attaqueblesser + " fois " +unit2.cid,'red');

    var PvRestant = unit2.get("Pv");
    if(4-unit1.get("F") >0)
        var difSvg = unit2.get("Svg")-(7-unit1.get("f"));
    else
        difSvg = unit2.get("Svg");

    if(difSvg <= 0)
        PvRestant -= attaqueblesser;
    else
        for (var i = 0; i < attaqueblesser; i++)
            if (rand6() >= difSvg)
                PvRestant--;
            else
                attaqueSauvegarder++;

    ajouterTexteCombat("l'armure de " +unit2.cid+ " lui évite "+attaqueSauvegarder+"degats",'blue');
    unit2.set("Pv",PvRestant);

    if(PvRestant > 0)
        return PvRestant;
    return 0;
}

function ajouterTexteCombat(texte,couleur){
    $('<p/>',{
        'class':'baston',
        'html':texte,
        'style':'color:'+couleur+';'
    }).appendTo('#resumecombat');
}

