/**
 * Created by olivier.goyon on 06/10/2014.
 */
//test de création de UNIT

var CC;
var FE;

//testRand(); // a ne pas tester trop souvent svp, c'est long

function testRand(){

    var tab= [];
    tab[0]=0;
    tab[1]=0;
    tab[2]=0;
    tab[3]=0;
    tab[4]=0;
    tab[5]=0;
    tab[6]=0;
    tab[7]=0;


    for(var i=0;i<1000000;i++)
    {
        test=rand6();
        tab[test]++;
    }

    console.log(tab);
}

var TabCombat = $.getJSON('TabCombat.json',function(data){
    CC = data.CC;
    FE = data.FE;

    lancerTest();
});

function lancerTest() {
    console.log("\n test des Unit \n");
    var troll = new Unit({M: 5, CC: 5, CT: 5, F: 5, E: 5, Pv: 5, I: 5, A: 5, Cd: 10, Svg: 1});
    console.log(troll);
    var sacdesable = new Unit({Pv: 3, Svg: 2, CC: 3, F: 10, E: 3, A: 1});
    console.log(sacdesable);
    console.log("test du combat");
    troll.attaquerHeros(sacdesable);


    console.log("\ntest des autre truc\n");
    //test de création de l'infoUnit
    var InfoTroll = new UnitBestaire({PointCost: 35, Race: "ogre"});
    console.log("InfoTroll : " + InfoTroll);
    //test de création d'élément.
    var forest = new Element({slow: 1, protect: 1});
    console.log("forest : " + forest);
    //test de création d'équipement et d'ajout a l'unité.
    var armor = new Equipement();
    troll.addEquipement(armor);
    console.log("armor : " + armor);

    console.log("\n test des troupes\n");
    //test de la troupe
    var uniteogre = new Troop({unit: troll, number: 3});
    var unitesac = new Troop({unit:sacdesable,number:5});
    uniteogre.addEquipement(armor);
    console.log("uniteogre : " + uniteogre);

    console.log("\n test des troupes\n");

    uniteogre.attaquerTroop(unitesac);
}


