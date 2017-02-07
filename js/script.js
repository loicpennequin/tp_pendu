var mesMots = ["salade","tomate","oignon", "kebab", "sushi", "nutella"];
var random = mesMots[Math.floor(Math.random() * mesMots.length)];
var randArr = random.split("");
var  blankChar = "";

// SELECTION D UN MOT AU HASARD ET TRANSFORMATION EN CARACTERES CACHES
var answer = function() {
    randArr.forEach(function(value, index) {
        blankChar = blankChar + "_ "
    });
    document.getElementById("answer").innerHTML = blankChar;
    console.log(randArr);
};

// GESTION DE LA SAISIE DU JOUEUR
var answSubmit = function() {
    var input = document.getElementById("input").value;
    var inputLgt = input.length;
    if ( inputLgt > 1 || input < 1 ) {
        alert("erreur : saisie incorrecte");
    };
    randArr.forEach(function(index, value) {
        console.log(randArr[value]);
        if ( input == randArr[value]) {
            alert("gagné");
        }
        else {
            alert("nope");
        }
    });
};
