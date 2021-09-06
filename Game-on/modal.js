function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
// on selectionne l'élément qui a la class bground et on le met dans modalbg
const modalbg = document.querySelector(".bground");
// on selectionne tous les éléments qui ont la class modal-btn
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// Fonction fermeture formulaire
function closeForm() {
    modalbg.style.display = "none";
}
// fonction validate
function validate() {
    var formOK = true;
    let isFirstNameOk = checkFristName();
    let isLastOk = checkLastName();
    let isCheckboxCgChecked = checkCheckBox1();
    var quantity = document.getElementById("quantity");
    let isQuantityOk = checkQuantity(quantity);
    var email = document.getElementById("email");
    let isEmailOk = checkEmail(email.value);
    let isAtLeastOneLocationChecked = checkLocation();

    if (isFirstNameOk == false) {
        formOK = false;
    }

    if (isLastOk == false) {
        formOk = false;
    }

    if (isEmailOk == false) {
        formOK = false;
    }

    if (isQuantityOk == false) {
        formOK = false;
    }

    if (isAtLeastOneLocationChecked == false) {
        formOK = false;
    }

    if (isCheckboxCgChecked == false) {
        formOK = false;
    }

    if (formOK == true) {
        alert("Merci ! Votre réservation a été reçue.");
    } else {
        alert("Formulaire invalide !");
    }

}
/** controle si le prénom est valide 
 * renvoi true si les contrôles sont ok et false si les contrôles ne sont pas bon
 * @returns 
 */
function checkFristName() {
    var firstname = document.getElementById("first");
    let isFirstNameOk = false;
    if (firstname.value.length >= 2) {
        isFirstNameOk = true;
    }
    return isFirstNameOk;

}
/** contrôle si nom de famille est valide
 * 
 * @returns 
 */
function checkLastName() {

    var lastname = document.getElementById("last");
    let isLastOk = false;
    if (lastname.value.length >= 2) {
        isLastOk = true;
    }
    return isLastOk;

}

/** contrôle si la case est coché 
 * 
 * @returns 
 */
function checkCheckBox1() {
    var checkbox = document.getElementById("checkbox1");
    return checkbox.checked;
}

/** Contrôle si quantity est un nombre
 * 
 * @param {*} quantity 
 * @returns 
 */
function checkQuantity(quantity) {
    let isQuantityOk = !isNaN(quantity.value);
    return isQuantityOk;
}

/** Contrôle si un mail est au bon format 
 * 
 * @param {*} email 
 * @returns 
 */
function checkEmail(email) {
    let isEmailOk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    return isEmailOk;
}


/** contrôle  si un bouton est coché 
 * 
 * @returns 
 */
function checkLocation() {
    // on recupère tous les boutons 
    var radios = document.getElementsByName("location");
    // on recupère le nombre de bouton 
    let nbButton = radios.length;

    // pour i = 0 jusqu'à i < nbButton , pour chaque bouton 
    for (var i = 0; i < nbButton; i++) {
        // on verifie que le bouton d'indice i est coché , si oui on renvoi true 
        if (radios[i].checked) {
            return true;
        }
    }

    return false;
}