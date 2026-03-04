let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

console.log("\nPartie A :");
console.log(`nom ?? "valeur par defaut"  ->  ${nom ?? "valeur par defaut"}`);
console.log(`age ?? "valeur par defaut"  ->  ${age ?? "valeur par defaut"}`);
console.log(`ville ?? "valeur par defaut"  ->  ${ville ?? "valeur par defaut"}`);
console.log(`score ?? "valeur par defaut"  ->  ${score ?? "valeur par defaut"}`);
console.log(`actif ?? "valeur par defaut"  ->  ${actif ?? "valeur par defaut"}`);


console.log("\nPartie B :");
console.log(`nom || "valeur par defaut"  ->  ${nom || "valeur par defaut"}`);
console.log(`age || "valeur par defaut"  ->  ${age || "valeur par defaut"}`);
console.log(`ville || "valeur par defaut"  ->  ${ville || "valeur par defaut"}`);
console.log(`score || "valeur par defaut"  ->  ${score || "valeur par defaut"}`);
console.log(`actif || "valeur par defaut"  ->  ${actif || "valeur par defaut"}`);

function comparerOperateurs(variable, nomVariable) {
    const ouRes = variable ?? "valeur par défaut";
    const etRes = variable || "valeur par défaut";
    
    if (ouRes === etRes) {
        console.log(`${nomVariable} : ?? et || -> même résultat`);
    } else {
        console.log(`${nomVariable} : ?? et || -> résultat différent`);
    }
}

console.log("\nPartie C :");
comparerOperateurs(nom, "nom");
comparerOperateurs(age, "age");
comparerOperateurs(ville, "ville");
comparerOperateurs(score, "score");
comparerOperateurs(actif, "actif");