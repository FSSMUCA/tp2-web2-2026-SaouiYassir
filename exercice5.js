let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {

    const valeur = nombres[i];

    switch (true) {
        case Number.isNaN(valeur):
            console.log(`${valeur} → INVALIDE`);
            break;
        case valeur === Infinity || valeur === -Infinity:
            console.log(`${valeur} → INFINI`);
            break;
        case Object.is(valeur, -0):
            console.log(`-0 → ZERO NEGATIF`);
            break;
        case Number.isInteger(valeur) && valeur >= Number.MIN_SAFE_INTEGER && valeur <= Number.MAX_SAFE_INTEGER:
            console.log(`${valeur} → ENTIER SUR`);
            break;
        case Number.isInteger(valeur) && (valeur < Number.MIN_SAFE_INTEGER || valeur > Number.MAX_SAFE_INTEGER):
            console.log(`${valeur} → ENTIER HORS LIMITES`);
            break;
        default:
            console.log(`${valeur} → DECIMAL`);
    }
}