//console.log("hello");

// L'opérateur de comparaison == signifie 'egal à'
// il permet de vérifier que les VALEURS de 2 variables sont identiques
let nb1 = 123;
let nb2 = "123";

console.log(nb1 == nb2);// retourne TRUE

// l'opérateur de comparaison === signifie 'strictement égal à'
// il permet de vérifier la VALEUR et le type
console.log(nb1 === nb2);// retourne FALSE


// -- L'opérateur != signifie 'différent de ... en VALEUR'
console.log(nb1 != nb2);// retourne FALSE

// -- L'opérateur !== signifie 'strictement différent de ... en VALEUR et en TYPE'
console.log(nb1 !== nb2);// retourne TRUE

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.
Je doit saisir mon prénom et mon age pour être authentifié sur le site 
(les infos sont en BDD, ici dans mes variables prenom et age).
En cas d'échec une alerte m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille.
-------------------------------- */

let prenom, monAge;
prenom = "Mila";
monAge = 999;

/*
SI mon age = age BDD alors :
    SI mon prénom = prenom dans la bdd :
        ->ok, les 2 sont bon
    SINON
        ->le prénom n'est pas bon
SINON
 ->mon age n'est pas bon!
*/

// 1 -- Demander son prénom à l'utilisateur avec un prompt
let prenomLogin = prompt("Quel est votre prénom ?");

if (prenomLogin === prenom){

    //console.log("c'est bon pour le prénom");
    //Si tout est ok, je continue la vérification avec l'âge
    //Demande a mon utilisateur son âge via un PROMPT
    let ageLogin = parseInt(prompt("Votre âge ?"));

    if(ageLogin === monAge){
        alert("Bienvenue " + prenomLogin);
    }else{
        //Si les AGEs ne correspondent pas, je lance une ALERT.
        alert("Erreur d'âge");
    }

}else{
    // Sinon, les prénoms ne correspondent pas, je lance une ALERT.
    alert("Attention, prénom non reconnu");
}