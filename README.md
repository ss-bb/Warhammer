Warhammer
=========

A Full Javascript Game in order to play to Warhammer (http://fr.wikipedia.org/wiki/Warhammer_Fantasy_Battle)

in order to train myself in JS and because i like Warhammer a lot , i will try to create the informatique warhammer game (EASY BRO LOL , they say). 


The main developpement point : 

Using Backbones : The goal is to have a strong model that will allow to add avery race as easy as possible.

basic model will include :
FullUnitIfno(M,CC,...,point cost,TYPE (giant/metal) ,SPECIAL HABILITY(firethrower) , Race(dwarf))
unit(M,CC,...)
Element(something) for things like moutain/forest but also special unit like dwarf anvil and so.
equipement(link to a unit)
Tequipement(link to a troop)
troop(unit, nb, tequipement -> (for now i will supose that troop special hability like "charge buffle" for ogre will be an "equipement"))

at begining, some unit will be hard in the model. Then have a BDD (sqlite enough) to recover race unit.

When this will be code. 

implement the "battle turn". Find a good "random" tools for it cause i will call it everytime.

ok. Main point , i will need a "tool" to test everytime. better make a little rpg for fight timing.

implement a little rpg javascript game for "inlive testing" and because i will want some fun two.
try the battle turn in a little rpg javascript game. (casperJs is for suckers ! Wait ... )

at this point, it's even quite good

add some "real unit" , lets take dwarf and ogre  (dwarf without canon . HAHAHA)
continue trying.

Add some way to make the "Champion fight" -> other troop unit stop fight while heroe try to kick each other. (dwarf heroe against ogre heroes. HAHAHAHAHA)

at this point , i will be kinda happy.


then implement the Commandement turn. (not as easy as it could be).
make some try with the rpg game.

OK. Easy but cool things stop here.NOW

implement the draughtboard (try to steal one from a js chess project .... mhhhhhh that's an idea. or look at openclassroom tuto ... cheat man)
add some feature to make a "movement turn" with the draughtboard

try the movement turn.
try to combine the "battle turn" with the rpg game and movement turn with the draughtboard.

At this point, we start to have a kinda cool minigame (which is uglyer than other project as expected).so next point : 

add the magic and fire turn. ( basic magic, like dommage, don't expect those fu**** revive on livingdeath race for now)
add some unit.
still testing the combinaison off the rpg and the draughtboard.

OK. The little game have it first version.Now i need to add Warhammer specifique fight condition.
("charge from behind" , hide in "wood", monster which come in the middle of battle, irresistible charge. etc etc ).

add specific rules.
add more magic yolo things (mhhh).

OK , this is trully better


At this point, we have a "game". 2d game maybe but a game.  So nows it's TIME, We can completely destroy the draughtboard ( wait. i use Backbone, i juste need to destroy my view ? It would be great, but i thinq i'm dreaming).I Need to find a 3D cool librairie. and start to implement the draughtboard again. Main probleme : i want my unit to be able to move as they want, and not to be restricted by cells.

Implement the 3D view. (LOL, hardest things in this foolish project resume in 4 word)

OK. I SEE , WONDERFULL OMG. well , now, i need to have a 3d view for all thing during the battle two.

implement the 3d view for Battle (bye bye rpg)

We have a fucking good game. WTF. Well , now, i want to create my army.

add a begining screen to create his unit army. look for maximum point, maximum number of heroes and so.

OK , i have my game, i can play, it's funny but... i play alone. It's a problem.

implement a multiplayer way of gaming. I will consider that cheat is "impossible", and remember the possibility to have a "spectator mode". each one shall have his "owned" view. For now, they can't change this view.
