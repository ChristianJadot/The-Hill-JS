/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        valeur1 = document.getElementById("op-one").value;
        valeur2 = document.getElementById("op-two").value;
        resultat = eval(valeur1) + eval(valeur2);
        alert (valeur1+ "+" +valeur2+ "=" +resultat);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        valeur1 = document.getElementById("op-one").value;
        valeur2 = document.getElementById("op-two").value;
        resultat = eval(valeur1) - eval(valeur2);
        alert (resultat);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        valeur1 = document.getElementById("op-one").value;
        valeur2 = document.getElementById("op-two").value;
        resultat = eval(valeur1) * eval(valeur2);
        alert (resultat);
    });

    document.getElementById("division").addEventListener("click", () => {
        valeur1 = document.getElementById("op-one").value;
        valeur2 = document.getElementById("op-two").value;
        resultat = eval(valeur1) / eval(valeur2);
        alert (resultat);
    });
})();
