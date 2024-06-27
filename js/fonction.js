//console.log("hello");
// 10  FONCTION PREDEFINIE (native)

// indexOf()
    // cherche la position d un element dans une chaine de caractere (si l element n est pas trouve il retourne -1)
    let phrase = 'Bonjour Eddy comment vas-tu ?';
        
    let position = phrase.indexOf("Eddy"); // cherche la position de Eddy dans la variable phrase
    document.write("<p>" + position + "</p>");

// substr()
    // decoupe une chaine de caractere a partir d une position et prend un nombre de caracteres
    // decoupe la phrase à partir de la position 8 et prend 5 caracteres :
    let decoupPhrase = phrase.substr(8, 4);
    document.write(`<p>Voilà ma phrase ${decoupPhrase}</p>`);

// includes()
    // verifie si une chaine de caractere contient un element (retourne true ou false)
    let mail = prompt("Tapez votre e-mail : ");

    if(mail.includes("@")){
        alert("E-mail valide !");
    }else{
        alert("E-mail invalide !");
    }

// toLowerCase() 
    // met en minuscule une chaine de caractere

// toUpperCase() 
    // met en majuscule une chaine de caractere

// length
    // retourne la longueur d une chaine de caractere(ou le nombre d element d un tableau)
    document.write(`<p>Ma phrase : "${phrase}" ${phrase.length} </p>`);

// FONCTION UTILISATEUR
    function maFonction(){
        console.log("Hello toi !");
    }

    maFonction();

    function meteo(saison, temperature){
        let message = `Nous somme en ${saison} et il fait ${temperature} degrés`;
        document.write("<p>" + message + "</p>");
    }

    let saisonUtilisateur = prompt("Donne moi une saison : ");
    let degre = prompt("Donne moi une temperature : ");

    meteo(saisonUtilisateur, degre);