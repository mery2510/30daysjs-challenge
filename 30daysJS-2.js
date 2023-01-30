//30 DAYS OF JAVASCRİPT VERİTÜRLERİ LEVEL 2 CHALLENGE ÇALIŞMALARI.. 
/*
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, \
so don't just give money but reach out your hand instead.");
*/
/*
let number = '10';
console.log(typeof(number));
console.log(Number(number));
console.log(number == 10);  //ilk başta string olan '10' değerini Number methodu ile int haline çevirip 10 sayısına şit olup olmadığını gözlemledir. 
console.log(Math.ceil(parseFloat(9.8))); // 9.8 float sayısını 10a yuvarladık . 
let string = 'python';
let string2= 'jargon';
console.log(string.includes('on'), string2.includes('on')); // on ifadesi stringlerin içersinde var mıdır? 

console.log("Umarım bu ders jargonla dolu değildir".includes('jargon')); // verilen stringde jargon var mı kontrol eder. 

//console.log(Math.floor(Math.random()*100)); // 0 le 100 aasında rastgele sayı üretti. 
//console.log(Math.floor(Math.random()*50) +50);  // 50 ile 100 arasında rastgele sayı üretir. 
//console.log(Math.floor(Math.random()*255));
let name2= 'javascript';
console.log(name2[Math.floor(Math.random()*9)]);  // verilen stringeki dizelere erişmek için rastgele sayılar üreterek onu stringin indexi olarak atayıp elemanın ekrana yazdırılması sağlandı. 

for (let i = 1; i <= 5; i++) {
    let row = ""
    for (let j = 1; j <= 5; j++) {
      if(j === 1){    // 1. satırda ekrana 1 2 3 4 5 basar. yani i leri basar. 
        row += `${i} `
      }
      else if(j === 2) {    // 2.satıra ekrana 1 i 5 defa basar. 
        row += `1 `
      }
      else if(j === 3){    //3. satırda ekrana i döngüsünü basar
        row += `${i} `
      }
      else if(j === 4){         // 4.satırda ekrana i nin karelerini basar. 
        row += `${Math.pow(i, 2)} `
      }
      else if(j === 5){
        row += `${Math.pow(i, 3)} `     // 5.satırda ekrana i nin küpünü basar. 
      }
    }
    console.log(row)
  }
  */
let loveL=" You cannot end a sentence with because because because is a conjunction";
let pattern= /because/gi;
console.log(loveL.match(pattern).length);   // aşk kelimesinin cümlede kaç defa geçtiğini bulan kod . 


