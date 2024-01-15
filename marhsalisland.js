let Negara = "marshall_islands";
const benua = "Oceania";
let populasi = 61988;
const kepulauan = false;
let bahasa = "marshallese_english";


const txt = document.getElementById('txt');

function show() {
    console.log(`
    Nama Negara : ${Negara}
    benua : ${benua}
    populasi : ${populasi}
    Kepulauan : ${kepulauan}
    bahasa : ${bahasa}
    `)
}

    txt.innerHTML = `
    Nama Negara : ${Negara}
    benua : ${benua}
    populasi : ${populasi}
    Kepulauan : ${kepulauan}
    bahasa : ${bahasa}
    `