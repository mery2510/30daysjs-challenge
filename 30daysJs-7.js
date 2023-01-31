//30 days of javascript 7. days fonksiyon.. 
/* function myFunction(r)
{
    let area = Math.PI *r *r;
    return area;

}

console.log ('dairenin alanı: ' + myFunction(5)); */
// 2 parametreli fonksiyon 
/*function myFunction(num1, num2)
{
    let sum= num1 + num2;
    // return sum;
    console.log(sum);
}
// console.log('yaşlar toplamı: ' + myFunction(34,21));
myFunction (34,21); 
*/

/* dizi parametreli fonksiyon 
function myFunction (arr){
    let sum=0;
    for (let i=0; i<arr.length; i++)
    {
        sum = sum + arr[i];

    }
    return sum;

}

const arr=[1,2,3,4,5,4,343];
console.log (myFunction(arr));*/

/* çok parametreli fonksiyon

const allSum = (... args) => {
    console.log(args);

}

allSum(3,4,2,3,4,5,4,232,2,4); */


/* anonim olrak tanımlanan fonksiyon 

const square = function(m){
    return m *m ;

}
console.log(square(6));
*/ 

/* kendini çapıran fonksion 

(function(n) {
    console.log(n * n)
  })(2)
*/

/* ok işaretli fonksiyonlar

function square (n){
    return n*n

}
console.log(square(7));
// 3 farklı fonksion yazılma şekli verildi. hepside çok kullanışlı ve kod kalabalığından kurtarır. ezberle  
const square2= n => {
    return n*n;
}
console.log (square2(4));

const square3 = n =>  n*n ;
console.log(square3(9));  */ 
/*
const changeChar = arr => {
    const newArr= [];
    for (const elemnt of arr )
    {
        newArr.push(elemnt.toUpperCase());   // yeni dizinşn içerisine harfleri büyümüş olan elemanları teker teker atarız. 
    }
    return newArr;
}
const country =['sivas','izmir', 'samsun', 'kayseri', 'istanbul'];
console.log(changeChar(country));
*/
/*
const changeChar = arr =>
{
    const newArr =[];
    for (const element of arr)
    {
        newArr.push(element.toUpperCase());
    }
    return newArr;
}

const names = ['meryem','emre','hasan','beyza'];
console.log(changeChar(names));



// 2 parametreli anonim fonksiyonun kullanımı....
const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

console.log(fullName('feyza','meryem'))
*/

/*
// sadece dönüş ifadeli fonksiyon yazılması...
const fullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log (fullName ('meryem', 'feyzza'));

//const fullAge = (yourAge, myAge) => `${yourAge}` + `${myAge}`   // bu şekilde toplama işlemi yapılmak istendiğinde girilen parametreleri string olarak algılar ve yanyana toplanır.
//console.log(fullAge(4,8));

const fullAge = (yourAge, myAge) => yourAge + myAge   // bu şekilde toplama işlemi yapıldığında da girilen parametreleri int olarak algılayabilir ve istenilen toplama işlemi yapılabilir .
console.log(fullAge(4,6));



// bazen varsayılan değerleri parametre olarak girdiğimiz fonksiyonları kullanırız. örneğin 

function myFunction (name ='meryem')
{
    let message = `${name}, akıllıdır.! `;
    return message
}

console.log(myFunction());  // varsayılan değerli fonksiyonu çağırdık. 
console.log(myFunction('emre'));  // varsayılan değer yerine kendi belirlediğimiz değeri de yazdırdık. 

function fullName (name= 'meryem', lastName ='islam')
{
    let space =' ';
    let massege2= name + space +lastName;  // varsayılan parametreli fonksiyonu yazdrdık.
    return massege2

}
console.log(fullName());
// 2.parametresi sabit olan fonksiyon 
function myFullAge (birthday, nowYear ='2023')
{
    let age = nowYear - birthday
    return age
}

console.log(myFullAge (1999))

function weigthObj (mass, gravity =9.81) {
    let wight = mass * gravity + 'N';
    return wight;

}
console.log(weigthObj(100));

*/

//OBJECT 
/*
const newObj = {
    name: 'meryem',
    surname:'islam',
    age: 24,
    marRied: false,
    country: 'turkey',
    city: 'sivas',
    favFruit: [                  // bir obje tanımladık. bu objeye pekçok değişken tanımlaması yaptık. 
                                 // bu değişkenleri çağırmak için objenin ismi.key yazarak key içindeki value değerleri alınabilir. 
        'apple',                 // ayrıca obje içerisinde fonksiyon tanımlaması da yapabilmekteyiz. 
        'strawberry',
        'orange',
        'mellow'
    ],
    getFullname: function(){
        return `${this.name} ${this.surname}`
    },
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
      ]
}
//console.log(newObj.getFullname());

newObj.getPersonInfo = function()
{
    let skillsLast= this.skills
    .splice(0, this.skills.length -1)
    .join(' ,');    // dizinin elemanları arasına virgül koyarak birleştirdi. 
    let lastSkills = this.skills.at(-1)    //[this.skills.length -1]   // dizinin son elemanını aldı. 
    let skills = `${skillsLast} and ${lastSkills}`;   // dizinin elemanları arasına virgül eklendi ve son eleman ile and kelimesi ile brleştirildi .
    console.log(skills);
    //console.log(lastSkills);
    //console.log(skillsLast);

    let newChar = `Kişinin kimlik bilgileri: ${newObj.name} and ${newObj.surname}, Kişinin yaşadığı yer: ${newObj.country} and ${newObj.city}`;
    return newChar
    //console.log(newChar);
}
//console.log(newObj.getPersonInfo());

//console.log(Object.keys(newObj)); // objeye ait olan anahtarları dizi olara ekrana yazdırdık. 
console.log(Object.values(newObj));
*/














