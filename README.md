Ionic - show
============
<!--  Some css :-) -->
<style>
p{
    text-align: justify;
}
</style>


## Ce qui a été fait :
L'application possède les vues suivantes :
- home : Page d'accueil de l'application. Cette vue aurait du contenir la liste des séries favorites
- search : Vue permettant le rechercher des séries
- show : Vue affichant les inforamtions générales sur une série. Cette vue contient une liste vers le détails des saisons.
- season : Vue affichant les informations générales sur une saison. Il s'agit d'une liste des épisodes avec un bref synopsis.

## Difficultés et problèmes :
L'installation a été un peu laborieuse. Surtout sur la machine windows de notre groupe. Le réseau wifi n'a pas aidé.

L'API fanart.tv ne possède pas de mode jsonp, ce qui rend son utilisation pour le développement un peu compliqué.

## Solutions aux problèmes :
Pour solutionner les problèmes de Cross domain, nous avons installé sur nos machine l'extension "Allow-Control-Allow-Origin:\*"

## Ce que nous avons appris :
L'utilisation de cordova et ionic était une première. Ayant cependant un peu d'expérience avec le javascript, la prise en main des outils n'a pas été trop compliquée. L'architecture des modules telle qu'elle nous a été proposée est d'ailleurs très simple et a facilité la compréhension.

## Ce que nous avons aimé :
Le développement "web" est très visuel ce qui change du développement "console" dont nous avons l'habitude. En plus, le prof est cool :-)

## Ce que nous n'avons pas aimé :
3h toutes les deux semaines ne permet pas de travailler de façon correcte car les séances sont trop éloignés. De plus, puisque nous avions fait le développement PHP avant ce cours, nous n'avons eu que 3 séances de TPs. C'est une durée trop cours pour prendre en main une technologie.

## Ce que nous aurions voulu faire en plus :
- la gestion de favoris
- l'ajout d'évènement dans le calendrier pour les épisodes des séries favorites
