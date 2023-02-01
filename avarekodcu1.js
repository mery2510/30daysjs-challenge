// iki sayının toplamını bulmak ama ilkokuldaki gibi toplama işlemini yaptırmak amaçlanmış. 

const n1= "556";
const n2 ="190";
const n1r = n1.split('').map(x => parseInt(x)).reverse(); // verilen sayı tek tek ayrıştırılıyor. split ile. sonra parseınt ile integer haline döndürülüyor.aynı şey diğer sayı içinde yapılıyor. 
const n2r = n2.split('').map(x => parseInt(x)).reverse();// her iki değişken n1 ve n2 sayılarının reverse edilmiş hali oluyor. 
const poolSize = Math.max(n1r.length, n2r.length); //poolsize her iki değişkenin uzunluklarını karşılaştırır ve büyük olanı tutar. 
const big = n1r.length > n2r.length ? n1r : n2r  //big değişkeni her iki dizinin uzunluklarına göre en uzun olanını tutar. 
const small = n1r.length <= n2r.length ? n1r: n2r  // small değişkeni de her iki dizinin uzunluklarına göre en kısa olanını tutar. 
// console.log(big);  // big ve small ekrana yazdırılır. 
// console.log(small);
let elder =0;   
const result  =[];   // toplama işleminin sonnucunu saklamak için kullanılacak boş dizi. 
console.time('toplama işleminin hesaplanma süresi: ');
for (let i=0; i<poolSize; i++)   // for döngüsü ile her bir rakamın toplanması sağlanır. 
{
    const value = big[i] + (small[i]? small[i] : 0) + elder ;  
    //value değişkenin değeri şudur: big dizisinin i. elemanı + elder değişkeni + (eğer small[i] var ise onun değerini, değilse 0) şeklindedir.
    if (value >= 10)  // eğer value 9 dan büyükse 
    {
        elder=1; // elder 1 yapılır. yani elde değeri 1 olmuş olur. 
    }
    else{
        elder =0;
    }
    result.push(value %10) // sonuçda value değernin 10 a modunuun result değerine eklenmesiyle belirlenir. 

}
if (elder){ 
result.push(1);     // eğer sonunda elder varsa onu da result değerinine push ile 1 eklenir ve resulta aktarılır. 
}
console.log(result.reverse().join(''));  // son olarak result değeri reverse edilir ve join ile birleştirilir.
console.timeEnd('toplama işleminin hesaplanma süresi: ');

/********************************************
Bu kod, n1 ve n2 olarak tanımlanmış iki sayıyı toplamak için yazılmıştır. 
İlk olarak, her bir string tek bir basamaklı bir diziye ayrılır, her basamak bir sayıya dönüştürülür ve 
dizilerin sıraları ters çevrilir. bunlar için split  reverse ve parseInt methodları kullnılmıştır. 
Daha sonra, en çok basamak içeren sayı (big) ve en az basamak içeren sayı (small) bulunur.
for döngüsü, en az basamaklı basamaktan başlayarak, her basamak için iki dizinin karşılık gelen basamaklarını, 
bir önceki döngüdeki taşma (elder) de dahil, toplar. Basamakların toplamı 9'dan büyükse, elder 1 olarak ayarlanır, 
aksi takdirde elder 0 olarak ayarlanır. Toplamın son basamağı result dizisine eklenir.

Son olarak, döngü bittikten sonra elder hâlâ 1 ise, en anlamlı basamakta bir taşma olduğunu gösterir, 
bu nedenle kod result dizisine bir 1 de ekler. result dizisi ters çevrilir ve bir string'e dönüştürülür, sonuçta konsola yazdırılır.
---------------------------------------------
Bu kodun genel amacı, iki sayıyı string olarak tanımlanmış bir şekilde toplamaktır. İki string, basamakları tek tek bir diziye ayrılır, dönüştürülür ve ters çevrilir.
Her basamak için, iki sayının karşılık gelen basamakları toplanır ve eğer basamak toplamı 9'dan büyükse bir taşma (carry) oluşur. 
Taşmalar, sonraki basamağın toplamına eklenir ve sonuçta elde edilen sayı tekrar bir string'e dönüştürülür ve konsola yazdırılır.

*********************************************

*/ 

/*********************************************
 BigInt, JavaScript dahilinde bulunan bir veri türüdür ve büyük tam sayıları (64-bit'in ötesindeki tam sayılar) destekler. 
 BigInt, normal tam sayılar (Number) ile aynı şekilde kullanılabilir ancak sonuçlar daha doğru olacaktır, 
 çünkü BigInt daha büyük tam sayıları destekler. BigInt'ler, tam sayılar gibi davranırlar ve 
 aynı şekilde aritmetik işlemler yapılabilir. 
 Ancak, BigInt'lerin sonuçları tam sayılar gibi değil, BigInt olarak verilir.
 */
// aşağıdaki kod yukarıdaki işlemin daha kıslaştırılmış hali olacaktır. 

console.time('BIGINT SÜRESİ');
const new1 = BigInt("94345");
const new2 = BigInt("0");
const newresult = new1 + new2;
const newresult1 = new1 - new2;   // sonuc negatifde çıkabilir posizitfde 
console.log(newresult1.toString());  
console.log(newresult.toString()); 
// console.log(typeof newresult)      
console.timeEnd('BIGINT SÜRESİ');

//*********************toplama işleminin çıkartma işlemi olmuş hali************* */

const num1= "457997";
const num2 = "12334435455433434";
const num1rev = num1.split('').map(x => parseInt(x)).reverse();
const num2rev = num2.split('').map(x => parseInt(x)).reverse();
const numSize = Math.max(num1rev.length, num2rev.length);

const bigNum = num1rev.length >= num2rev.length ? num1rev : num2rev  // num1rev alınır. 
const smallNum = num1rev.length < num2rev.length ? num1rev : num2rev  // num2rev alınır. 
let carry =0;
let newNum =[];
/**---------------- */
console.time('çıkartma işlemi sonucunun hesaplama süresi: ');
/**---------------- */
for (let i=0; i< numSize; i++){      
    let value = bigNum[i] - carry;    // her bir i değerinden carry çıkartılır. 
    if (smallNum[i]) {    // eğer smallNum varsa value değerinden smallNum[i] değerleri çıkartılır. 
      value -= smallNum[i];
    }
    if (value < 0) {   // sonuçlar 0 dan küçükse value değerinde 10 eklenir. ve carry 1 eklenir. 
      value += 10;
      carry = 1;
    } else {         // sonuç 0 dan küçük değilse carry 0 yapılır. 
      carry = 0;
    }
    newNum.push(value);  
}
console.log(newNum.reverse().join(''));
/**----------------------time methodunun kullanımı */
console.timeEnd('çıkartma işlemi sonucunun hesaplama süresi: ');
/**---------------------- */

