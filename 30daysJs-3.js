const date = new Date();

let year = date.getFullYear(),
    month = date.getMonth(),
    day= date.getDate(),
    hours = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayNumber = date.getDay()


let months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]
let dayLer =[
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    
]

let humanReadDate = `${day} ${months[month]} ${year} ${dayLer[dayNumber]} ${hours}:${minute}:${second}, `;  // tarih bilgisini insnların okuyabileceği şekile ekrana yazdırma biçimi)

console.log(humanReadDate); 

//23 Ocak 2023 Pazartesi, saat....

// EXAMPLE 










