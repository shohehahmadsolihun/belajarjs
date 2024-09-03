//1.fungction

function ganjilAtauGenap(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

console.log(ganjilAtauGenap(10));
console.log(ganjilAtauGenap(7));

//2.function menerima nilai ujian

function cekKelulusan(nilai) {
    const batasLulus = 70;
    if (nilai >= batasLulus) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}
console.log(cekKelulusan(80));
console.log(cekKelulusan(50));

//3.function cek usia

function kategoriUsia(usia) {
    if (usia >= 0 && usia <= 12) {
        return "Anak-anak";
    } else if (usia >= 13 && usia <= 17) {
        return "Remaja";
    } else if (usia >= 18 && usia <= 55) {
        return "Dewasa";
    } else if (usia > 55) {
        return "Lansia";
    } else {
        return "Usia tidak valid";
    }
}
console.log(kategoriUsia(8));
console.log(kategoriUsia(15));
console.log(kategoriUsia(30));
console.log(kategoriUsia(60));
console.log(kategoriUsia(-13));

//4.function jumlah array

function jumlahkanArray(angkaArray) {
    return angkaArray;
}

const angka = [1, 2, 3, 4, 5]
console.log(jumlahkanArray(angka));

//5.function nilai tertinggi array

function carinilaiTertinggi(angkaArray) {
    let nilaitertinggi = angkaArray[0];

    for (let i = 1; i < angkaArray.length; i++) {
        if (angkaArray[i] > nilaitertinggi) {
            nilaitertinggi = angkaArray[i];
        }
    }
    return nilaitertinggi;
}
const angkaArray = [3, 7, 9, 2, 5]
console.log(carinilaiTertinggi(angkaArray));

//6.function mengembalikan nilai array

function NilaiBalik(params) {
    return params.reverse();
}
const balik = [1, 2, 3, 4, 5]
console.log(NilaiBalik(balik));

//7.function memisah ganjil dan genap

function pisahGanjilGenap(ganjilGenap) {
    const arrayGanjil = [];
    const arrayGenap = [];

    ganjilGenap.forEach((paramsAngka) => {
        if (paramsAngka % 2 === 0) {
            arrayGenap.push(paramsAngka);
        } else {
            arrayGanjil.push(paramsAngka);
        }
    });

    return { arrayGanjil, arrayGenap };
}

const paramsAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasil = pisahGanjilGenap(paramsAngka);

console.log(hasil.arrayGanjil);
console.log(hasil.arrayGenap);


//8.function penurunan angka

const toko = {
    daftarProduk: [],
    tambahProduk: function (produk) {
        this.daftarProduk.push(produk);
    },

    hitungTotalProduk: function () {
        return this.daftarProduk.length;
    },
    hitungTotalHarga: function () {
        let totalHarga = 0;

        this.daftarProduk.forEach(function (produk) {
            totalHarga += produk.harga; // Tambahkan harga produk ke total
        });

        return totalHarga;
    },
};

toko.tambahProduk({ nama: "felg", harga: 500000 });
toko.tambahProduk({ nama: "hangrip", harga: 100000 });
toko.tambahProduk({ nama: "sasis", harga: 750000 });

console.log("Daftar Produk:", toko.daftarProduk);

console.log("Total Produk:", toko.hitungTotalProduk());
console.log("Total Harga:", toko.hitungTotalHarga());

