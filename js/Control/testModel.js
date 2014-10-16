/**
 * Created by olivier.goyon on 06/10/2014.
 */
//test de création de UNIT
var troll = new Unit({M:5,CC:5,CT:5,F:5,E:5,Pv:5,I:5,A:5,Cd:10,Svg:1});
var sacdesable = new Unit({Pv:15,Svg:2,CC:3,F:10,E:3,A:1});

//test de création de l'infoUnit
var InfoTroll = new FullUnitIfno({Unit:troll,PointCost:35,Race:"ogre"});

//test de création d'élément.
var forest = new Element({slow:1,protect:1});

//test de création d'équipement et d'ajout a l'unité.
var armor = new Equipement({armor:2});
troll.addEquipement(armor);

//test de la troupe
var uniteogre = new Troop({unit:troll,number:3});
uniteogre.addEquipement(armor);



console.log("troll :"+troll);
console.log("sacdesable : "+sacdesable);
console.log("InfoTroll : "+InfoTroll);
console.log("forest : "+forest);
console.log("armor : "+armor);
console.log("uniteogre : "+uniteogre);


