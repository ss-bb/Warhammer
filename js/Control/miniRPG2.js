/**
 * Created by olivier.goyon on 17/10/2014.
 */

/* le but est de se faire combattre deux troupe a l'arache.*/

/**
 * Created by olivier.goyon on 06/10/2014.
 */
var CC;
var FE;

var TabCombat = $.getJSON('TabCombat.json',function(data){

    CC = data.CC;
    FE = data.FE;

    var ogre = new Unit({M:5,CC:5,F:5,E:5,Pv:5,I:5,A:5,Cd:10,Svg:2});
    var nain = new Unit({Pv:2,Svg:2,CC:3,F:3,E:3,A:2,Cd:7});

    var uniteogre = new Troop({unit:ogre,number:3,Degatrecu:0});
    var unitenain = new Troop({unit:nain,number:10,Degatrecu:0});

    debutcombatTroop(uniteogre,unitenain);

    console.log("fin combat");
});

function debutcombatTroop(myunit, enemyunit){

    myinit= myunit.get('unit').get("I");
    enemyinit=enemyunit.get('unit').get("I");

    if(myinit > enemyinit){
        var nbdegat = attaqueTroop(myunit, enemyunit);
        infligerDegat(enemyunit,nbdegat);
    }
    else if(myinit == enemyinit)
    {
        if(rand() > 0.5){
            var nbdegat = attaqueTroop(myunit, enemyunit);
            infligerDegat(enemyunit,nbdegat);
        }
        else{
            var nbdegat = attaqueTroop(enemyunit, myunit);
            infligerDegat(myunit,nbdegat);
        }
    }
    else{
        var nbdegat = attaqueTroop(enemyunit, myunit);
        infligerDegat(myunit,nbdegat);
    }
}

function infligerDegat(troop,nbdegat)
{
    var degatTotal = parseInt(nbdegat) + parseInt(troop.get('Degatrecu'));
    troop.set('Degatrecu',degatTotal);
}

function attaqueTroop(troopAtt,troopDef){
    var attaquetoucher=0;
    var attaqueblesser=0;
    var attaqueSauvegarder=0;
    var attaqueNonSauvegarder=0;

    unit1=troopAtt.get('unit');
    unit2=troopDef.get('unit');


    difCombat = CC[unit1.get("CC")][unit2.get("CC")];

    var nbattaquemax = unit1.get("A")*troopAtt.get('number');

    for(var nbattaque=0;nbattaque<nbattaquemax;nbattaque++){
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

    ajouterTexteCombat("l'armure de " +troopDef.cid+ " lui évite "+attaqueSauvegarder+"degats au total",'blue');
    return attaqueNonSauvegarder;
}


function debutcombat(me,enemy){

    if(me.get("I") > enemy.get("I")){
        var Tuer = attaque(me, enemy);
        if(Tuer != 0)
            attaque(enemy, me);
    }
    else if(me.get("I") == enemy.get("I"))
    {
        if(rand() > 0.5){
            Tuer = attaque(me, enemy);
            if(Tuer != 0)
                attaque(enemy, me);
        }
        else{
            Tuer = attaque(enemy, me);
            if(Tuer != 0)
                attaque(me, enemy);
        }
    }
    else{
        Tuer = attaque(enemy, me);
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

