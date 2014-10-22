var CC;
var FE;

equipe1 = [];
equipe2 = [];

var TabCombat = $.getJSON('TabCombat.json',function(data){
    CC = data.CC;
    FE = data.FE;

    lancerRPG();

});

function lancerRPG(){

    creeUnit();

    equipe1joue();

    /*
    for(i=0;i<6;i++)
    {
        equipe1joue();
        equipe2joue();
    }
    */
}

function CreeUnit(){

}

function equipe1joue(){

    /* test rapido de si sa marche*/
    for(var bataillon of equipe1){ // supporter par firefox THEORIQUEMENT
        console.log(bataillon);//choper son "type" pour diferencier troop de unit pour savoir qui appeler en dessous
    }
}






function debutcombatTroop(unit1, unit2){

    myinit= unit1.get('unit').get("I");
    enemyinit=unit2.get('unit').get("I");

    if(myinit > enemyinit){
        var nbdegat = attaqueTroop(unit1, unit2);
        infligerDegat(unit2,nbdegat);
    }
    else if(myinit == enemyinit)
    {
        if(rand() > 0.5){
            var nbdegat = attaqueTroop(unit1, unit2);
            infligerDegat(unit2,nbdegat);
        }
        else{
            var nbdegat = attaqueTroop(unit2, unit1);
            infligerDegat(unit1,nbdegat);
        }
    }
    else{
        var nbdegat = attaqueTroop(unit2, unit1);
        infligerDegat(unit1,nbdegat);
    }
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
