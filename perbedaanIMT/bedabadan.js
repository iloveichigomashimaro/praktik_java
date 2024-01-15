let beratJoan = 64;
let tinggiJoan = 165;
let beratMadan = 45;
let tinggiMadan = 160;
let madanIMT = beratMadan / tinggiMadan ** 2;
let joanIMT = beratJoan / tinggiJoan ** 2;
const madanHigherIMT = madanIMT > joanIMT;

console.log(`MadanIMT = ${madanIMT}`)
console.log(`joanIMT = ${joanIMT}`)
console.log(`MadanIMT = ${madanHigherIMT}`)

const txt = document.getElementById('txt');

txt.innerHTML = `
    `