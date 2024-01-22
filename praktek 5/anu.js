//let nilaiAkhir = prompt("Masukkan Nilai Akhir");
//if (nilaiAkhir >= 80 && nilaiAkhir <= 100) {
    //document.write(`Nilai akhir anda A (${nilaiAkhir})`);
//}else if (nilaiAkhir >= 70 && nilaiAkhir <= 80) {
    //document.write(`Nilai akhir anda B (${nilaiAkhir})`);
//}else if (nilaiAkhir >= 60 && nilaiAkhir <= 70) {
    //document.write(`Nilai akhir anda C (${nilaiAkhir})`);
//}else{
    //document.write("Anda Belum Mengikuti Ujian");
//}
//let userRole = prompt("Login Sebagai: ");
//if (userRole == "Admin") {
    //document.write("Selamat Datang Admin");
//}else if (userRole == "Operator") {
    //document.write("Selamat Datang Operator");
//}else {
    //document.write("Anda Dilarang Mengakses Halaman Ini");
//}

let Tim_A = 97.7;
let Tim_B = 96.3;
if (Tim_A > Tim_B){
    document.write(`Tim A menang dengan rata-rata skor 80`);
}else if (Tim_B > Tim_A){
    document.write(`Tim B menang dengn rata-rata skor 80`);
}else {
    document.write(`Pertandingan Seri`);
}
