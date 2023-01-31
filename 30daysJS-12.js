// 12 DAYS Regular Expressions 
// düzenli ifadeler. 


let str = /love/i;
let newMassage = 'Mary loves the Javascript programming language.';
// console.log(str.test(newMassage));   // love ifadesi cümle içerisinde varsa true döndü yoksa false döndü. 

let str2= /[Bb]anana/g;    // banana kelimesini küçük büyük harf duyarlı olacak şekilde aradık. 
let fruit= ' apple, banana, strawberry, orange';
// console.log(fruit.match(str2));   // match ile eşleşen kelimeleri dizi olarak çıkarttı. 

const pattern = /[Aa]pple/ // this square bracket mean either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches = txt.match(pattern)  //apple veya Apple olan kelimeleri ekrana dzi olarak çıkarrtık.

// console.log(matches)  // global bir flag kullanmıyorsak, match kelimenin model, indeks, girdi ve grubu içeren bir dizi döndürür.
// yani eşleşen kelimenin index numarası, input stringi yani kelimenin bulunduğu cümle ekrana yazdırılır. 

//replace() : Bir dizgede eşleşme araması yürütür ve eşleşen alt dizgiyi yeni bir alt dizgiyle değiştirir. 

let newStr = /%/g ;
const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

// console.log(txt2.replace(newStr , '')); // replace ile değişken içerisindeki bazı karakterleri istenilen karakterler veya kelimeler 
// ile değiştirebildik. 

// RegExp'te kaçış karakteri(\)

const pattern2 = /\d/g;   // dizi içerisindeki sayı değerlerini ekrana dizi şeklinde çıkartılması için kullandık 
const newsprint ='This regular expression example was made in January 30,  2023.' 
// console.log(newsprint.match(pattern2));  // match ile eşleşen sayıları ekrana dizi şeklinde çıakrttık. 

const pattern3 = /\d+/g;  // aynı string içerisindeki en az 1 tane sayıyı ekrana oldğu gibi çıkartık. 
const newsprint2 = 'This regular expression example was made in January 30,  2023.';
// console.log(newsprint2.match(pattern3));  // bulunan sayıları ekrana dizi olarak çıkarttık.

// (.) işlevi 

const pattern4 = /[a]./g; 
const newTxt ='Apple and banana are fruits';
// console.log(newTxt.match(pattern4)); // değişken içerisinde a harfi olan ve bunla eşleşen kelimelerin a ve sonraki harfini dizi olark aldı. 

const pattern5 = /[a].+/g;  // değişken içerisinde a ile başlayan kelimeleri tek tek aldı ve onları dizi içerisinde gösterdik. 
const newTxt2= 'Apple and banana are fruits';
// console.log(newTxt2.match(pattern5));

//Sıfır veya daha fazla kez(*) karakteri içeren kelimeler bulunacaktır.
const pattern6 = /[a].*/g;  // değişken içerisindeki a harflerini içerisinde sıfır veya daha fazla kez barındıran kelimeleri ekrana dizi olarak çıkarttı. 
const newTxt3 = 'Apple and banana and strawberry are fruits'
// console.log(newTxt3.match(pattern6));
//Model oluşmayabilir veya birçok kez ortaya çıkabilir.

// sıfır veya bir kez içerisined istenilen karakteri barındıran kelimelr çıkrtılır (?) kullanarak .
const pattern7 = /[Ee]-?mail/g;
const txt3 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'

// console.log(txt3.match(pattern7)); // içerisinde e veya E nin bir kere bulunmasıyla kelimlerin ekrana dizi olarak döndürülmesi sağlanır. 

//Bir metinde aradığımız alt dizginin uzunluğunu süslü parantez kullanarak belirtebiliriz.
//Düşünün, uzunluklarının 4 karakter olduğu alt dizeyle ilgileniyoruz

const newtxt4 = 'This regular expression example was made in December 6,  2019.';
const pattern8 = /\b\w{4}\b/g ;  // word olarak karakter uzunluğu 4 olan kelimeleri ekrana bastır. /b ile değişkenin başında ve sonunnda kelimeleri ara. 
const pattern9 = /\b[a-zA-Z]{4}\b/g; // sadece harf uzunluğu 4 olan kelimleeri buldu. bir üst satırda sayılarıda aldı. 
const pattern10 = /\d{4}/;  // sadece 4 uzunluğundaki sayıyı alı ve bunu dizide gösterdi. 
// console.log(newtxt4.match(pattern9))
// console.log(newtxt4.match(pattern10));


// 12 DAYS EXERCİSE 
// 1.ALIŞTIRMA 
const newİncome = /\d+/g;
const person =  'He earns 4000 euro from salary per month, \
10000 euro annual bonus, 5500 euro online courses per month.';
const bonus = person.match(newİncome);
// console.log(bonus);
// console.log()
let total = 0;
for (let i=0; i< bonus.length; i++)
{
    total += parseInt(bonus[i]);
}
// console.log('personelin aylık maaşı:  ' + total + '$');
// console.log(bonus.length);


//2.ALIŞTIRMA 
let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// let numberChar = /\d+/g;
let newArr =[];
for (let i=0; i<points.length; i++)
{
    // console.log(parseInt(points[i]));// dizi içerisindeki her bir eleman string idi bunları number a dönüştürük. 
    // console.log(parseInt(points.sort(function(a,b){return a-b})[i]));  // sayıları küçükten büyüğe sıralar aynı zamanda string olan sayıları numbera çevirir.
    // dizinin elemanlarını sayıya yani number a çevirdik ve sort ile küçükten büyüğe sıraladık. 
    let newRigth = parseInt(points.sort(function(a,b){return a-b})[i]);
    newArr.push(newRigth);
}
// console.log(parseInt(points.reduce((t,y) => t+y, 0));
// console.log('X EKSENİNDEKİ PARÇACIKLARIN KONUM SIRALAMASI:  ' + newArr);
// console.log('EN UZAK PARÇACIK:  ' + Math.max(...newArr));
// console.log('EN YAKIN PARÇACIK:  ' + Math.min(...newArr));
// console.log('EN UZAK İKİ PARÇACIK ARASINDAKİ FARK  ' + (Math.max(...newArr) - Math.min(...newArr)) );


// level 2 
// 1.alıştırma 
// en fazla tekrar eden kelimenin bulunmasını sağlayan fonksiyon 

function newName (text){
    let newCount = {};  // sayılan kelimelerin saklandığı obje 
    let newWord ="";   // en fazla sayılan kelime  
    let newmaxCount =0; // en fazla sayılan kelimenin sayısı. 

    let words = text.toLowerCase().split(" "); // toLowerCase() methodu ile küçük harfe dönüştürülür ve split(" ") methodu ile boşluklardan ayıklanır. 
    for (let i = 0; i<words.length; i++){
        let word = words[i].replace(/[^\w]/g, "");  // Her bir kelime için, replace(/[^\w]/g, "") methodu ile metin dışındaki karakterler silinir ve wordCount nesnesinde kelime sayısı arttırılır. 
        if(newCount[word])  // her değiştirmede if ile kontrol edilip artırılır. 
        {
            newCount[word]++; 
        }
        else{
            newCount[word] =1; // eğer word yoksa bunu 1 yapar. 
        }
        if(newCount[word] > newmaxCount){  // eeğrki sayıcının içeriindeki kelime sayısı newmaxcount dan büyük ise 
            newWord = word;    // word ü newword içerisinde aktarılır. 
            newmaxCount = newCount[word];  
        }
    }
    return newWord
}
// console.log(newName(paragraph));  // ekrana yazdırma işlemi 


//en fazla tekrar eden 10 kelimenin yazılmasını sağlayan kod  
function newtenWord(text, limit){
    let wordcount ={}; //İlk olarak, wordCount adlı bir nesne ve maxWords adlı bir dizi tanımlanır.
    let maxWord =[];
    let words = text.toLowerCase().split(" ");// toLowerCase() methodu ile küçük harfe dönüştürülür ve split(" ") methodu ile boşluklardan ayıklanır. 
    for (let i= 0; i<words.length; i++)
    {
        let word = words[i].replace(/[^\w]/g, "");  // Her bir kelime için, replace(/[^\w]/g, "") methodu ile metin dışındaki karakterler silinir ve wordCount nesnesinde kelime sayısı arttırılır. 
        if(wordcount[word]){
            wordcount[word]++;
        }
        else{
            wordcount[word] = 1;
        }
    }
    let wordList =Object.keys(wordcount);  // wordCount nesnesinin anahtarları Object.keys(wordCount) ile alınır ve sort methodu ile kelime sayısına göre sıralanır.
    wordList.sort(function(a,b) {
        return wordcount[b] - wordcount[a];
    });

    for (let i=0; i<wordList.length && i<limit; i++)  //Son olarak, sıralanmış kelime listesi maxWords dizisine kaydedilir ve en fazla tekrar eden limit kelime sayısı kadar döndürülür.
    {
        maxWord.push(wordList[i]);
    }
    return maxWord;

}


//  console.log(newtenWord(paragraph, 10));


// BİR PARAGRAFTAKİ HER KELİMENİN KAÇ DEFA TEKRAR ETTİĞİNİ BULAN FONSKİYON

function myNewWord(text){
    let newWord1= {};
    let words = text.toLowerCase().split(" ");
    for (let i= 0; i<words.length; i++)
    {
        let word = words[i].replace(/[^\w]/g, "");
        if (newWord1[word]){
            newWord1[word]++;
        }
        else{
            newWord1[word] = 1;
        }
    }
    return  newWord1 ;
}
let paragraph = `I love teaching. If you do not love teaching what else can you love.\
 I love Python if you do not love something which can give you all the capabilities \
 to develop an application what else can you love.`

let Object2= myNewWord(paragraph);  
// console.log(Object2);


// 3.LEVEL EXERCİSE
// karakterlerle karıştırılmış bir metnin temizlenmesi sağlandı ve bu metindeki en fazla tekrar eden 3 kelime ekrana yazdırıldı. 
let  sentence = `%I $am@% a %tea@cher%, and and& , &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
let txT3 =  /%|\$|@|#|&|!|;|/gmi ;   // $ karakterni silmek için \$ bu şekilde kullan. 
// console.log(sentence.match(txT3));
console.log(sentence.replace(txT3 , ''));

console.log(newtenWord(sentence, 3));

// console.log(myNewWord(sentence));

//I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?






