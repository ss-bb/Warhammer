/**
 * Created by olivier.goyon on 06/10/2014.
 */
function rand(){
    return Math.random();
}

function randB(min,max){
    return Math.random() * (max - min) + min;
}

function rand16(){
    return randB(1,6);
}