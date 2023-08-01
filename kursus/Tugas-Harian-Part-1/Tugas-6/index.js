//Soal No.1
var nilaiJohn= 80;
if (nilaiJohn>=80 ) {
    console.log("Nilai John indeksnya A")
} 
else if(nilaiJohn>=70 && 80){
    console.log("Nilai John indeksnya B")
}
else if(nilaiJohn>=60 && 70){
    console.log("Nilai John indeksnya C")
}
else if(nilaiJohn>=50 && 60){
    console.log(" Nilai John indeksnya D")
}
else {
    console.log("Nilai John indeksnya E")
}
var nilaiDoe= 50;
if (nilaiDoe>=80 ) {
    console.log("Nilai Doe Indeksnya A")
} 
else if(nilaiDoe>=70 && 80){
    console.log("Nilai Doe indeksnya B")
}
else if(nilaiDoe>=60 && 70){
    console.log("Nilai Doe indeksnya C")
}
else if(nilaiDoe>=50 && 60){
    console.log("Nilai Doe indeksnya D")
}
else {
    console.log("Nilai Doe indeksnya E")
}

//Soal No.2
var tanggal = 21;
var bulan = 9;
var tahun = 1999;
switch(bulan) {
  case 1:   bulan ='januari'; break; 
  case 2:   bulan ='februari'; break; 
  case 3:   bulan ='maret'; break; 
  case 4:   bulan ='april'; break;
  case 5:   bulan ='mei'; break;
  case 6:   bulan ='juni'; break;
  case 7:   bulan ='juli'; break;
  case 8:   bulan ='agustus'; break;
  case 9:   bulan ='september'; break;
  case 10:   bulan ='oktober'; break; 
  case 11:   bulan ='november'; break;
  case 12:   bulan ='desember'; break;
  default:  { console.log('Tidak terjadi apa-apa'); }
}
console.log('Kamu Lahir Pada Tanggal: ' + tanggal + " " + bulan + " " + tahun);

//Soal No.3
var text = "";
var x;
for (x = 0; x <= 10; x++) {
    text = x + "- I love PHP" ;
    console.log(text + "\n")
}
var xer = "";
var y;
for (x = 20; x >=2; x--) {
    xer = x + "- I love PHP" ;
    console.log(xer + "\n")
}

//Soal No.4
for (i=1;i<=20;i++){
    if (i%2==0){
        console.log(i+" - Berkualitas"+"\n")
    }
    else if(i%2==1 && i%3==0){
        console.log(i+" - I Love Coding"+"\n")
    }
    else {
        console.log(i+" - Santai"+"\n")
    }             
}

//Soal No.5
console.log("Asterix: \n");
let hasil = '';
    for ($k=1; $k<=7 ; $k++) 
    {
        for ($u=1; $u<=$k ; $u++)
        {
            hasil += "#";
        } 
        hasil +="\n";
    }
    console.log(hasil);
