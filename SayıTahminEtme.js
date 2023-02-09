// ************* SAYI TAHMİN ETME OYUNU ***********//

// let numGuess = Math.floor(Math.random() *100) + 1 ;

// let numOfGuesses =0;  // kullanıcnın sayıyı doğru tahmin etmek için yaptığı tahmin sayısını tutar. 
// let guess;
// //Her doğru tahmin sonrası, numOfGuesses değişkeninin değeri 1 arttırılır ve oyun bitene kadar bu değer güncellenecektir. 

// while (guess !== numGuess){
//     guess = prompt ("1 ile 100 arasında bir sayı tahmin edin lütfen..."); // eğer ki while içerisindeki kkoşul sağlanırsa bu döngü tekrarlanıyor.
//     // koşula bakacak olursak, guess yani tahmin ile random sayı birbirine eşit değilse while içerisindeki işlemler yapılmaya başlanır. 
//     numOfGuesses ++;

//      if ( guess == null){
//         alert ("oyunu iptal ettiniz..");
//         break;
//      }
//      else if (isNaN(guess)){
//         alert ("geçerli bir sayı girinz: ");
//         break;
//      }else if (guess < numGuess){
//         alert ("girdiğiniz sayı, random sayıdan küçüktür, tekrar deneyin...");
//         break;
//      }else if (guess > numGuess){
//         alert ("girdiğiniz sayı, random sayıdsn büyüktür, tekrar deneyiniz...");
//         break;
//      }
// }
// if (guess === numGuess){
//     alert ("Tebrikler" + numGuess + "sayısını" + numOfGuesses + "seferde tahmin ettiniz...");
    
// }


// bu kodu şu şekilde yazdım. bu kod sadece 1 kere çalışıyor. tahminin doğru olmasına kaddar bu kod çalışmayacaktır. 
// 1 kere tahmin edilir ve sonrasında bu kod çalışmayı keser. 



// ------------doğru tahmini yapana kadar kodun çalışmasının istenmesi için aşağıdaki kod denenir -------------//

let newNumGuess = Math.floor(Math.random() *100) +1; // ranom sayı üretildi. 
let newNumOfGuess =0; // kullanıcının sayıyı tahmin etmek içn tahmin etme sayısı için değiken atandı. 
let newGuess ;

while(newGuess !== newNumGuess){
   newGuess = parseInt(prompt("1 ile 100 arasında bir sayı giriniz:..."));   // girilen sayıyı parseınt ile integer haline çeviririz. 
   newNumOfGuess ++; // prompt ile her ekrana yazdırılan cümle ile sayıcı 1 artırılır...

  
   if (newGuess < newNumGuess){
      alert ("random sayıdan daha küçük bir sayı girdiniz, tekrar denyiniz...."); 
   }else if (newGuess > newNumGuess){
      alert ("random sayıdan daha büyük sayı girdiniz, tekrar deneyiniz...");
   }
   else if (newGuess == null){
      alert ("oyunu iptal ettiniz..");  // eğerki kullanıcı null girerse oyunu iptal ettiniz yazısı ekrana basılır. 
      break;
   }

}
 if (newGuess === newNumGuess){
       alert ("Tebrikler " + newNumGuess + "  sayısını" + newNumOfGuess + "  seferde tahmin ettiniz..."); //
}































