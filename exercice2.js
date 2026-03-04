let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i=0; i<valeurs.length; i++) {

    if (valeurs[i]) {
        console.log(`valeurs[i] -> truhly`);
    } else {
        console.log(`valeurs[i] -> falsy`);
    }
}