let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

let sousTotal = prix * quantite;
console.log(`Le sous-total : ${sousTotal}`);

let reduction = (codePromo !== null && estMembre === true) ? sousTotal * (reductionPourcentage / 100) : 0;
console.log(`La reduction : ${reduction}`);

let total = sousTotal - reduction;
console.log(`Le prix total : ${total}`);

let status;
if (soldeCompte >= total) {
    status = "Paiement accepté";
} else {
    status = "Solde insuffisant";
}
console.log(`Le status : ${status}`);

let solde;
if (status === "Paiement accepté") {
    console.log(`Solde : ${soldeCompte - total}`);
}


console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   :", nomProduit);
console.log("Quantité  :", quantite);
console.log("Prix unit.:", prix, "MAD");
console.log("Sous-total:", sousTotal, "MAD");
console.log("Réduction :", reduction, "MAD");
console.log("Total     :", total, "MAD");
console.log("Statut    :", status ? "Paiement accepté" : "Paiement refusé");
console.log("Solde     :", solde, "MAD");
console.log("=========================");