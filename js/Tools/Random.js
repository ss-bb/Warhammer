/**
 * Created by olivier.goyon on 06/10/2014.
 */
function rand(){
    return Math.random();
    //to change the logic for a better Random generator than javascript one. just change Here and not in sub fonction.
}

function randomEntre(min,max){
    return parseInt(rand() * max + min);
}

function rand6(){
    return randomEntre(1,6);
}

function rand12(){
    return randomEntre(1,12);
}

