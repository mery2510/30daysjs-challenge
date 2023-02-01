/**PROMİSES 
Promise, JavaScript'te eşzamansız işlemleri gerçekleştirmenin bir yoludur. 
Eşzamansız bir eylemin nihai başarı değeri veya başarısızlık nedeni ile işleyicilere izin verir.
Bu, eşzamansız yöntemlerin eşzamanlı yöntemler gibi değerler döndürmesine izin verir:
 *  son değeri hemen döndürmek yerine, eşzamansız yöntem, değeri gelecekte bir noktada sağlama taahhüdünü döndürür. */

/**
 * pending:başlangıç ​​durumu, ne yerine getirildi ne de reddedildi.
 * fulfilled:işlemin başarıyla tamamlandığı anlamına gelir.
 * rejected: işlemin başarısız olduğu anlamına gelir.
 */
// iş tamamlanırsa içerisindeki değeri alabilmek için then() kullanırız. 
// eşer işlem başarısız olursa da içerisindeki değeri alabilmek için catch() kullanılır. 


const test = callback =>{
    setTimeout(() => {
        callback('hata oluştu!')
        
    }, 2000);
}

const callback = (err,data) => {
    if(err){
        console.log('hata', err)
    }
    else{
        console.log('data', data)
    }
}
test(callback);
/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('işlem başarılı');

    }, 1500);   // promise 1.5 sn sonra işlem başarılı şekilde bir değerle gğncellenecek ama hala pending halinde görünecektir.
    // içerisindeki değeri almak için then() ifadesini kullanırız. 
   
   
    // resolve ('işlem başarılı');
    // reject ('işlem başarısız');
}
)
promise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.warn(err)
})
*/


const API_URL = 'https://restcountries.com/v2/all';   // verilen url ülkelerin olduğu json tipinde değerler mevcuttur. 
fetch(API_URL)
.then((res) => res.json())     // json ile değerler çağırılabilir.
.then((data) => console.log(data))   // json içerisindeki data değerleri çağrılabildi. 
.catch((err) => console.error(err));








