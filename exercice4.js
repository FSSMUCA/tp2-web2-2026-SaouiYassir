let paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let count = 0;


for (let i = 0; i < paires.length; i++) {
    let a = paires[i][0];
    let b = paires[i][1];
    
    let egalDouble = (a == b);
    let egalTriple = (a === b);
    
    console.log(`${a} == ${b}  ->  ${egalDouble}  |  ${a} === ${b}  ->  ${egalTriple}`);
    
    if (egalDouble !== egalTriple) {
        count++;
    }
}

console.log("---");

console.log(`${count} paire(s) où == et === donnent des résultats différents`);