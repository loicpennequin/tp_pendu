//à ajouter :
//_impossibilité de continuer en cas de défaite
//_rendre ça joli et cool et djeuns avec des neons à la fast and furious
//_ajouter des chats quelque part


//INITIALISATION
var lives = 11;
var mesMots = ["salade","tomate","oignon", "kebab", "sushi", "nutella", "pomme",
 "hamburger", "patate", "glucose"]; //mots possibles
var random = mesMots[Math.floor(Math.random() * mesMots.length)]; //mots au hasard
var randArr = random.split(""); //transformation en array de lettres
var  blankChar = []; //affichage de la reponse sous forme de caracteres masqués


// SELECTION D UN MOT AU HASARD ET TRANSFORMATION EN CARACTERES CACHES
var answer = function() {
    document.getElementById("lives").innerHTML = lives; //Affichage du nombre d'essais
    setTimeout(function(){ //Affichage du champ input et du champ reponse
        document.getElementById('input_field').style.transform = 'none';
        document.getElementById('answer').style.transform = 'none';
        document.getElementById('guy').style.opacity = '1';
    }, 800);
    document.getElementById("start").style.transform="none";
    document.getElementById("buttonStart").style.boxShadow = "0 0 5px 5px #993344";
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
    if ( inputLgt > 1 || inputLgt < 1 ) {
        alert("erreur : saisie incorrecte");
    };
    if (randArr.indexOf(input) != -1) {
        randArr.forEach(function(value,index) {
            if (value == input) {
                blankChar[index] = input;
            }
            document.getElementById("answer").innerHTML = blankChar.join("");
        })
        if (blankChar.indexOf("_ ") == -1) {
            alert("Tu as gagné au pendu, tu fais partie des cool kids maintenant")
        }
    }
    else{
        if (lives == 1) { //si je place ce if à la fin du else ET que je spécifie lives ==0, ça ne marche pas. WHY
            document.getElementById("lost").style.display="block";
        };
        lives= lives-1;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById("erreur" + lives).style.opacity= '1';
    };
};
