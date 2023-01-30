//30 DAYS OF JAVASCRİPT CHALLENGE LEVEL 1 KOLARI......


/*let challenge ="30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(2,5));  // substring ile şu işlem yapılmakta. 2.elemandan başalyıp 5. elemana kadar olan indexleri alır ancak 2. ve 5. indexleri almaz. 
console.log(challenge.substr(2,5)); //substr kullanım dışı görünmekte ama yine de kullanılıyor. başlangıç için index numarası veriliyor ardından kaç index dilimleneceği belirleniyor. 
*/
let newChallenge = "30 Days Of JavaScript";
console.log(newChallenge);
//console.log(newChallenge.substring(2,21) );
//console.log(newChallenge.includes("Days")); //true, çünkü string içerisinde Days var. 
//console.log(newChallenge.includes("days")); //false, çünkü string içerisinde days yok. 
/*console.log(newChallenge.split(''));
let newChallenge2= "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(newChallenge2);
console.log(newChallenge2.split(','));  // bu işlem ile stringdeki virgülleri kaldırarak her elemanı diziye aktardık. */
//console.log(newChallenge.replace('JavaScript', 'Python')); // replace komutu ile javascript yerin python yazıldı. 
//console.log(newChallenge.charAt(15)); // 15.index S harfidir. 
//console.log(newChallenge.charCodeAt('J'));  //ASCII tablosundaki kodu bulur. 
//console.log(newChallenge.indexOf('a')); //a nın ilk geçtiği index. 
//console.log(newChallenge.lastIndexOf('a')); // a nın son geçtiği index numarası. 
/*
let string= "You cannot end a sentence with because because because is a conjunction";
console.log(string.indexOf('because'));
console.log(string.lastIndexOf('because')); 
console.log(string.search('because'));*/

//console.log(newChallenge.trim(' '));
console.log(newChallenge.startsWith('30'));    
console.log(newChallenge.endsWith('JavaScript'));

console.log(newChallenge.match(/a/gi)); // string içerisindeki tüm a harflerini buluor. 
console.log(newChallenge.concat(newChallenge)); // stringleri birleştirdik. concat ile 
console.log(newChallenge.repeat(2));  // repeat ile 2 defa tekrar ettirdik. 

/*END*/












