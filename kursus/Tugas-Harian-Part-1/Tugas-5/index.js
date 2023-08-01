var sayHello = "Hello World!" 
console.log(sayHello)
            let word = 'JavaScript'; 
            let second = 'is'; 
            let third = 'awesome'; 
            let fourth = 'and'; 
            let fifth = 'I'; 
            let sixth = 'love'; 
            let seventh = 'it!';
            const theString = `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`
            console.log(theString) // John Doe, Mr
        //Soal No.2 Latihan Penggabungan & Pengolahan Kalimat
            let kataPertama = "saya"; 
            let kataKedua = "senang"; 
            let kataKetiga = "belajar"; 
            let kataKeempat = "javascript";
            let pertama = kataKedua.charAt(0);
            let upper1 = pertama.toUpperCase();
            let potongan1 = kataKedua.substring(1,6);
            let kedua = kataKetiga.charAt(6);
            let upper2 = kedua.toUpperCase();
            let potongan2 = kataKetiga.substring(0,6);
            let upper3 = kataKeempat.toUpperCase();
            const merge = `${kataPertama} ${upper1}${potongan1} ${potongan2}${upper2} ${upper3}`
            console.log(merge)
        //Soal No.3 Mengubah Tipe Data
            let panjangPersegiPanjang = 8;
            let lebarPersegiPanjang = 5;
            let kelilingPersegiPanjang = (panjangPersegiPanjang + lebarPersegiPanjang)*2;
            console.log('Keliling Persegi Panjang: ' +kelilingPersegiPanjang)
            let alasSegitiga= "6";
            let tinggiSegitiga = "7";
            let luasSegitiga = (alasSegitiga * tinggiSegitiga)/2;
            console.log('Luas Segitiga: ' +luasSegitiga)
        //Soal No.4 Mengurai Kalimat
            let sentences= 'wah javascript itu keren sekali'; 

            let firstWords= sentences.substring(0, 3); 
            let secondWords= sentences.substring(4, 14); // do your own! 
            let thirdWords= sentences.substring(15, 18); // do your own! 
            let fourthWords= sentences.substring(19, 24); // do your own! 
            let fifthWords= sentences.substring(25, 31); // do your own! 
            
            console.log('Kata Pertama: ' + firstWords); 
            console.log('Kata Kedua: ' + secondWords); 
            console.log('Kata Ketiga: ' + thirdWords); 
            console.log('Kata Keempat: ' + fourthWords); 
            console.log('Kata Kelima: ' + fifthWords);
        //Soal No.5 Akses dalam String
            var sentence = "I am going to be React JS Developer"; 

            var exampleFirstWord = sentence[0] ; 
            var exampleSecondWord = sentence[2] + sentence[3]  ; 
            var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; // lakukan sendiri, wajib mengikuti seperti contoh diatas 
            var fourthWord = sentence[11] + sentence[12]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
            var fifthWord = sentence[14] + sentence[15]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
            var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
            var seventhWord = sentence[23] + sentence[24]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
            var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
            
            console.log('First Word: ' + exampleFirstWord); 
            console.log('Second Word: ' + exampleSecondWord); 
            console.log('Third Word: ' + thirdWord); 
            console.log('Fourth Word: ' + fourthWord); 
            console.log('Fifth Word: ' + fifthWord); 
            console.log('Sixth Word: ' + sixthWord); 
            console.log('Seventh Word: ' + seventhWord); 
            console.log('Eighth Word: ' + eighthWord)
        //Soal No.5 Mengambil Sebuah Kalimat
            let txt = "I can eat bananas all day";
            let hasil = txt.slice(10,17); //lakukan pengambilan kalimat di variable ini

            console.log(hasil)