// Syntaxe de base

// commentaire sur une ligne

/*
    Ici, je fais un commentaire sur
    plusieurs lignes
*/

// -- 1 : Déclarer une variable en JS
let Prenom;

// -- 2 : Affecter une valeur à une variable
Prenom = "Mohamed";
console.log(Prenom);

Prenom = "Marwan";

// -- 3 : une instruction se termine TOUJOURS par un point-virgule, aussi il est possible d'écrire plusieurs instructions sur une seule ligne
// inst_1;
// inst_2; inst_3;

// -- 4 : Afficher une boîte de dialogue (2 façons)
//alert("Super, tu es arrivé sur mon site !");
// window.alert("Super, tu es arrivé sur mon site !");

// -- 5 : Afficher dans la console (ici, la valeur de ma variable Prenom)
console.log(Prenom);

// -- 6 : Afficher dans la page web
document.write("<h1>Hello</h1>");

// -- 7 : Demander à l'utilisateur une valeur (2 façons)
// prompt("Question: on est quel jour ?", "jour de la semaine");
// window.prompt("Question: on est quel jour ?", "jour de la semaine");

// -- et pour manipuler cette valeur, je n'oublie pas de la stocker
let jour;
jour = prompt("Question: on est quel jour ?", "jour de la semaine");
//let jour = prompt("Question: on est quel jour ?", "jour de la semaine");
console.log(jour);

// -- 8 : Attention /!\ le JS est sensible à la casse ('case sensitive')
// mavariable =/= maVariable =/= ma_variable
//                camel case     snake case

// -- 9 : Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractères alphanumériques, et ne peut pas être un mot réservé (var, for... des éléments natifs du langage JS)

/*----------------------------------------
/ ~~~~~~   LES TYPES DE VARIABLES ~~~~~~ /
-----------------------------------------*/
// -- 1. Chaîne de caratères (string)
let vacances = "2017";
let destination = "Australie";

// -- 2. Un nombre entier (integer ou int)
let annee = 2017;

// -- 3. Un nombre décimal (float)
let nombre_a_virgule = -5.32;

// -- 4. Un booléen (boolean = VRAI/FAUX = TRUE/FALSE)
let unBooleen = false; // -- true

// -- 5. Les Constantes