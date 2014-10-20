

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
