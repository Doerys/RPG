attaqueJoueur = document.getElementById("attaqueJoueur");
pvMonstre = document.getElementById("pvMonstre");
pvJoueur = document.getElementById("pvJoueur");
ouille = document.getElementById("ouille");
boiteDeDialogue = document.getElementById("boiteDeDialogue");
gameOver = document.getElementById("gameOver") ;
  

attaqueJoueur.onclick = function() {
    pvMonstre.innerHTML = parseInt(pvMonstre.innerHTML) - 5;

    boiteDeDialogue.innerHTML = "Quelqu'un subit 5 dégâts !";

    if (pvMonstre.innerHTML <= 0) {
        pvMonstre.innerHTML = 0;
        boiteDeDialogue.innerHTML = "Le monstre est vaincu. Tu as gagné ! Bravo.";
        }
    
    if (pvJoueur.innerHTML <= 0) {
        pvJoueur.innerHTML = 0;
        boiteDeDialogue.innerHTML = "Tu es vaincu. Tu as perdu, dommage.";
        }

    }

