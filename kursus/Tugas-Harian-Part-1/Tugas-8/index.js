//Soal No.1
let luasPersegiPanjang = (panjang, lebar) => { return panjang * lebar };
let kelilingPersegiPanjang = (panjang, lebar) => { return (panjang + lebar)*2 };
let volumeBalok = (panjang, lebar, tinggi) => { return panjang * lebar * tinggi}

let panjang= 12
let lebar= 4
let tinggi = 8
 
let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(HasilluasPersegiPanjang ) 
console.log(HasilkelilingPersegiPanjang )
console.log(HasilvolumeBalok)

//Soal No.2
//
function introduce(a, b, c, d) {
    let gimana = ("Pak "+a+" adalah seorang "+c+" yang bekerja sebagai "+d+" dan berusia "+b+" tahun");
    return gimana;
}
//
 
//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

//Soal No.3
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {Nama:arrayDaftarPeserta[0],
                        Jenis_Kelamin:arrayDaftarPeserta[1],
                        hobi:arrayDaftarPeserta[2],
                        Tahun_Lahir:arrayDaftarPeserta[3]}
console.log(objDaftarPeserta)

//Soal No.4
let buah = [{Nama:"Nanas", Warna:"Kuning", AdaBijinya:"false", Harga:"9000"},{Nama:"Jeruk", Warna:"Oranye", AdaBijinya:"true", Harga:"8000"},{Nama:"Semangka", Warna:"Hijau & Merah", AdaBijinya:"true", Harga:"10000"},{Nama:"Pisang", Warna:"Kuning", AdaBijinya:"false", Harga:"5000"}]
var arrayBuahFilter = buah.filter(function(item){
    return item.AdaBijinya != "true";
 })
 console.log(arrayBuahFilter)


 //Soal No.5
 let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
 }

 // kode diatas ini jangan di rubah atau di hapus sama sekal
 const {name:phoneName, brand:phoneBrand, year}=phone;
 let {colors} = phone;
 let colorBlack = colors[2];
 let colorBronze = colors[0];
 /* Tulis kode i di sini */
 // kode di bawah ini jangan dicorubah atau dihapus
 console.log(phoneBrand, phoneName, year, colorBlack, colorBronze) 

 //Soal No.6
 let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali
let {nama,jumlahHalaman}=buku ;
let be = nama;
let gila = jumlahHalaman;
let {penulis,tahunTerbit} = dataBukuTambahan;
let ajep = penulis;
let loe = tahunTerbit;


let newBook = {nama:be,jumlahHalaman:gila,warnaSampul:warna,penulis:ajep,tahunTerbit:loe}
console.log(newBook)
/* Tulis kode jawabannya di sini */ 

//Soal No.7
for(let i = 0; i < tambahDataFilm.length; i++){console.log(dataFilm)}
// kode diatas ini jangan di rubah atau di hapus sama sekali
let dataFilm = [];
tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

