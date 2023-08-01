// di file callback.js
function readBooks(time, book, callback ) {
    console.log("saya membaca " + book.name )
    setTimeout(function(){
        let sisaWaktu = 0
        if(time >= book.timeSpent) {
            sisaWaktu = time - book.timeSpent
            console.log("saya sudah membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
            callback(sisaWaktu) //menjalankan function callback
        } else {
            console.log('waktu saya habis')
            callback(time)
        }   
    }, book.timeSpent)
}
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini ( menggunkan callback )
readBooks(10000, books[0], (sisawaktu)=>{
    readBooks(sisawaktu,books[1],(sisawaktu2)=>{
        readBooks(sisawaktu2,books[2],(sisawaktu3)=>{
            readBooks(sisawaktu3,books[3],(sisawaktu4)=>{})
        })
    })
})
