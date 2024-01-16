let Negara = "Marshall Islands";
const benua = "Oceania";
let populasi = 61.988;
const kepulauan = false;
let bahasa = "Marshallese English";


const txt = document.getElementById('txt');

function show() {
    console.log(`
    Nama Negara : ${Negara}
    benua : ${benua}
    populasi : ${populasi}
    Kepulauan : ${kepulauan}
    bahasa : ${bahasa}

    negara ${Negara} adalah negara yang berada di benua ${benua}, dengan populasi sebanyak ${populasi} jiwa, bahasa nasional adalah bahasa ${bahasa}
    `)
}

    txt.innerHTML = `
    Nama Negara : ${Negara}
    benua : ${benua}
    populasi : ${populasi}
    Kepulauan : ${kepulauan}
    bahasa : ${bahasa}

    negara ${Negara} adalah negara yang berada di benua ${benua}, dengan populasi
    sebanyak ${populasi} jiwa, bahasa nasional adalah bahasa ${bahasa}
    `