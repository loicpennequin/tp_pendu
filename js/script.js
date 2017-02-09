//à ajouter :
//_message de victoire quand toutes les lettres sont trouvées
//_impossibilité de continuer en cas de défaite
//_rendre ça joli et cool et djeuns avec des neons à la fast and furious
//_ajouter des chats quelque part


//INITIALISATION
var lives = 6;
var mesMots = ["salade","tomate","oignon", "kebab", "sushi", "nutella", "pomme",
 "hamburger", "patate", "glucose",]; //mots possibles
var random = mesMots[Math.floor(Math.random() * mesMots.length)]; //mots au hasard
var randArr = random.split(""); //transformation en array de lettres
var  blankChar = []; //affichage de la reponse sous forme de caracteres masqués


// SELECTION D UN MOT AU HASARD ET TRANSFORMATION EN CARACTERES CACHES
var answer = function() {
    document.getElementById("lives").innerHTML = lives;
    randArr.forEach(function(value, index) {
        blankChar[index] = "_ "
    });
    document.getElementById("answer").innerHTML = blankChar.join("");
    console.log(randArr);
    };


// GESTION DE LA SAISIE DU JOUEUR
var answSubmit = function() {
    var input = document.getElementById("input").value;
    var inputLgt = input.length;
    if ( inputLgt > 1 || input < 1 ) {
        alert("erreur : saisie incorrecte");
    };
    if (randArr.indexOf(input) != -1) {
        console.log('lettre correcte');
        randArr.forEach(function(value,index) {
            console.log(value, index);
            if (value == input) {
                blankChar[index] = input;
            }
            document.getElementById("answer").innerHTML = blankChar.join("");
        });

    }
    else{
        lives= lives-1;
        document.getElementById("lives").innerHTML = lives;
        if (lives <= 0) {
            alert("Eeeeeet voilà t'as perdu. Ta daronne elle boit du sprite sa mère.");
        };
    };
};
