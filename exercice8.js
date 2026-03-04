let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"


nom = nom.trim();
if (nom === "") {
    nom = "Inconnu";
}

age = Number(age);
if (age === NaN || age <= 0) {
    age = "valeur invalide";
}

let emailVerification;
if (email.includes("@") && email.includes(".", email.indexOf("@"))) {
    emailVerification = "Valide";
} else {
    emailVerification = "Invalide";
}

scoreJeu = parseInt(scoreJeu);
if (scoreJeu === NaN) {
    scoreJeu = 0;
}

if (estAdmin === "true") {
    estAdmin = true;
} else if (estAdmin === "false") {
    estAdmin = false;
}


nombreConnexions = Number(nombreConnexions);
if (nombreConnexions === 0) {
    nombreConnexions = "Aucune connexion";
}


console.log("\n===== RAPPORT UTILISATEUR =====");
console.log(`nom                : ${nom}`);
console.log(`age                : ${age}`);
console.log(`email              : ${email}`);
console.log(`scoreJeu           : ${scoreJeu}`);
console.log(`deriniereConnexion : ${derniereConnexion ?? "Jamais connecté"}`);
console.log(`nombreConnexions   : ${nombreConnexions}`);
console.log("=========================");