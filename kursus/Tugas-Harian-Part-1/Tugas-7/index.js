//Soal No.1
let dataPeserta = ["john", "laki-laki", "programmer", "30"]
const [numberOne, numberTwo, numberThree, numberFour] = dataPeserta
let output = "Halo,nama saya "+numberOne+"."+"saya "+numberTwo+" berumur "+numberFour+" bekerja sebagai seorang "+numberThree
console.log(output)

//Soal No.2
let array1 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
    for(let i = 0; i < array1.length; i++) 
    {
        console.log(array1[i]);
    }

//Soal No.3
let array2 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
const filteredArray = array2.filter(item => item % 2 === 0);

console.log(filteredArray) // Output: [2, 4, 6, 8, 10]

//Soal No.4
let kalimat= ["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]
kalimat.shift();
kalimat.splice(2,1)
console.log(kalimat)
let slug = kalimat.join(" ")
console.log(slug)

//Soal No.5
var sayuran =[]
sayuran.push("Kangkung","Bayam","Buncis","Kubis","Timun","Seledri","Tauge")
sayuran.sort()
console.log(sayuran)
var text = "";
var x;
for (var x = 0; x < sayuran.length; x++) {
    text = x+1 +" "+sayuran[x] ;
    console.log(text + "\n")
}