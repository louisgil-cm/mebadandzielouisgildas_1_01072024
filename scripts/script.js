/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    let zoneScoreElement = document.querySelector(".zoneScore")
    let message = `${score}/${nbMotsProposes}`
    zoneScoreElement.innerHTML = message
}




/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    let score = 0;
    let nbMotsProposes = 0;
    let i = 0;
    
    let btnValiderMot = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");


    function afficherProposition(proposition) {
        let zoneProposition = document.querySelector(".zoneProposition");
        zoneProposition.innerHTML = proposition;
    }

    if (typeof listePhrases === "undefined" || listePhrases.length === 0) {
        console.error("Erreur : la liste des phrases n'est pas définie ou est vide.");
        return;
    }

  
    afficherProposition(listePhrases[i]);

    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value); 

        i++; 

        if (i >= listePhrases.length) {
            afficherProposition("Le jeu est fini !");
            btnValiderMot.disabled = true; 
        } else {
            afficherProposition(listePhrases[i]); 
        }
    });

    afficherResultat(score, nbMotsProposes);
}





