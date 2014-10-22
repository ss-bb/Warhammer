var CC;
var FE;

var TabCombat = $.getJSON('TabCombat.json',function(data){
    CC = data.CC;
    FE = data.FE;

    lancerRPG();
});

equipe1 = [];
equipe2 = [];

function lancerRPG(){

    CreeUnit();
    verifierUnit();

    for(i=0;i<6;i++)
    {
        equipe1joue();
        equipe2joue();
    }
}

function equipe1joue(){
    for (var bataillon of equipe1){
        console.log((bataillon.get('Class')));
    }

}

function CreeUnit(){

    var troll = new Unit({CC: 5,F: 5, E: 5, Pv: 5, I: 5, A: 5, Cd: 10, Svg: 1});
    equipe1.push(troll);
    var TroupeTroll = new Troop({unit:troll,number:3,numberFrontMax:3})
    equipe1.push(TroupeTroll);

    var nain = new Unit({CC: 4,F: 3, E: 4, Pv: 2, I: 3, A: 1, Cd: 8, Svg: 1});
    equipe2.push(troll);
    var TroupeNaine = new Troop({unit:nain,number:10,numberFrontMax:4})
    equipe2.push(TroupeTroll);
}

function verifierUnit(){

    /* test rapido de si sa marche*/
    for(var bataillon of equipe1){ // supporter par firefox THEORIQUEMENT
        console.log((bataillon.get('Class')));//choper son "type" pour diferencier troop de unit pour savoir qui appeler en dessous
    }

    for(var bataillonbis of equipe2){ // supporter par firefox THEORIQUEMENT
        console.log((bataillonbis.get('Class')));//choper son "type" pour diferencier troop de unit pour savoir qui appeler en dessous
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
