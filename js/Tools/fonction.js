/**
 * Created by olivier.goyon on 22/10/2014.
 */

function ajouterTexteCombat(texte,couleur){
    $('<p/>',{
        'class':'baston',
        'html':texte,
        'style':'color:'+couleur+';'
    }).appendTo('#resumecombat');
}