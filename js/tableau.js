//Créer un tableau
//let tableau = new Array(element0, element1, element2);
//let tableau = Array(element0, element1, element2);
//let tableau = [element0, element1, element2];

let fruits = ['Apple', 'Banana'];
console.log(fruits.length);
//2

let first = fruits[0];
console.log(first);
// Apple

//Boucler sur un tableau
let couleurs = ["red", "green", "blue"];
for(let i = 0; i < couleurs.length; i++){
    console.log(couleurs[i])
    document.write(`<p style='color:${couleurs[i]}'>J'aime les licornes!</p>`)
}

// AU LIEU DE MODIFIER LE TABLEAU ON EN CREE UN AUTRE IDENTIQUE

//Ajouter à la fin du tableau
let newArray = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

//Supprimer le dernier élément du tableau
let last = fruits.pop();// supprime Orange (à la fin)
// ["Apple", "Banana"];

//Supprimer le premier élément du tableau
let firstDelete = fruits.shift(); // supprime Apple (au début)
// ["Banana"];

//Ajouter au début du tableau
let newLength = fruits.unshift('Strawberry') // ajoute au début
// ["Strawberry", "Banana"];

//Ajouter à la fin du tableau
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

// Trouver l'index d'un élément dans le tableau
let pos = fruits.indexOf('Banana');
// 1

//Supprimer un élément par son index
let removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos = (1)
// ["Strawberry", "Mango"]

let n = 2;

var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];

var removedItems = vegetables.splice(pos, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos
// ["Cabbage", "Carrot"] 