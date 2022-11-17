boutonAttaque = document.getElementById("boutonAttaque");
vieMonstre1 = document.getElementById("vieMonstre1");
vieHero1 = document.getElementById("vieHero1");
contenuBoiteDialogue = document.getElementById("contenuBoiteDialogue");
animationHero = document.getElementById("animationHero");
  
boutonAttaque.onclick = function() {
    vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 5;
    contenuBoiteDialogue.innerHTML = "Le monstre subit 5 dégâts ! Mais il riposte aussitôt, et vous inflinge 5 dégâts.";
    vieHero1.innerHTML = parseInt(vieHero1.innerHTML) - 5;

    if (vieMonstre1.innerHTML <= 0) {
        contenuBoiteDialogue.innerHTML = 0;
        contenuBoiteDialogue.innerHTML = "Le monstre est vaincu. Tu as gagné ! Bravo.";
        }
    
    if (vieHero1.innerHTML <= 0) {
        vieHero1.innerHTML = 0;
        contenuBoiteDialogue.innerHTML = "Tu es vaincu. Tu as perdu, dommage.";
        }
    }

