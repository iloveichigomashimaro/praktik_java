//const tagihan = 100000;
//const tip = 0.25;
//const nilaiTip = tagihan * tip;
//console.log(
//    `Tagihan sejumlah ${tagihan}, tip $(nilaiTip), total bayar ${
  //      tagihan + nilaiTip
    //}`

//);
//console.log(typeof nilaiTip);

const tagihan = 2000;
const diskon = 0.5;
const jumlahBeli = 3;
let nilaiTip = tagihan * diskon;

if (jumlahBeli > 3) {
    diskon = 0.035
    const jumlahBeli = 4;
    let nilaiTip = tagihan * diskon;
    console.log(
        `Tagihan Sejumlah ${tagihan}, tip ${nilaiTip}, total bayar ${tagihan + nilaiTip
        }`
    );
} else {
    console.log(
        `Tagihan Sejumlah ${tagihan}, tip ${nilaiTip}, total bayar ${tagihan + nilaiTip
        }`
    )
}