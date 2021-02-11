/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var confirmationUtilisateur = "non";
    while (confirmationUtilisateur == "non") {
        age = prompt("Quel âge avez-vous ?");
        genre =prompt("De quel genre êtes-vous ?");
        ville = prompt("Quelle ville habitez-vous ?");
        confirmationUtilisateur = prompt("Vous avez " + age + ", vous êtes du genre: " + genre + " et vous habitez : " + ville + "." + " Est-ce juste ?(oui/non)");
    }
})();
