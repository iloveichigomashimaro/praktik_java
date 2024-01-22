let beratJoan = 64;
let tinggiJoan = 160;
let beratMadan = 45;
let tinggiMadan = 165;
let madanIMT = beratMadan / tinggiMadan ** 2;
let joanIMT = beratJoan / tinggiJoan ** 2;
const madanHigherIMT = madanIMT > joanIMT;
const txt = document.getElementById('txt');

console.log(`MadanIMT = ${madanIMT}`)
console.log(`joanIMT = ${joanIMT}`)
console.log(`MadanIMT = ${madanHigherIMT}`)


if (tinggiMadan > tinggiJoan) {
    console.log(`Nilai IMT Madan ${madanIMT} lebih Tinggi Dari Joan ${joanIMT}`);
}else{
    console.log(`Nilai IMT Joan ${joanIMT} lebih tinggi dari Madan ${madanIMT}`);
}
















txt.innerHTML = `
    `