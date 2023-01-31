// 9.DAYS EXERCISE


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// countries.forEach((Element) => console.log(Element));  
//names.forEach((Element) => console.log(Element));
//numbers.forEach((Element) => console.log(Element));

// countries.map((a)=> console.log(a.length));
const newSquare = numbers.map((a) => a *a);
// console.log(newSquare); 

const newNames = names.map((a)=> a.toUpperCase());
// console.log(newNames);

const newPrice = products.map((a) => a.price);   // product dizisindeki price elemanlarını aldı. 
// console.log(newPrice);

const arrCountry= countries.filter ((Element) => Element.includes('land'));
// console.log(arrCountry);

const countryLength = countries.filter ((Element) => Element.length >= 6); 
//console.log(countryLength);

const newStart = countries.filter ((Element) => Element.startsWith ('E'));
//console.log(newStart);

const newProduct = products.filter ((Element) => Element.price);
// console.log(newProduct);

function getStringList (add){
    let newry = new Array(); 
    newry += add.map((ad) => ad.product);
    console.log(newry);
}
// const newArr= getStringList(products);   // diziyi parametre olarak alan fonksiyon .

const sum = numbers.reduce ((add, cur) => add +cur ,0);
//console.log(sum);
//let lastCountry = countries.splice(countries.length -1)[0];
// console.log(lastCountry);
//let countriesAnd = countries.splice(0, countries.length).join (',')
//console.log(countriesAnd);

const sentence = countries.reduce ((add, cur, index) => {
    if (index === countries.length -2){      // dizinin son 2 indexi arasına an ifadesi eklendi. 
        return `${add}${cur} and ` ;
    }
    else if (index == countries.length-1){
        return `${add}${cur} are north European countries.`;   // son indexden sonra bu cümle eklendi. 
    }
    else{
        return `${add}${cur},`;  // bunların dışındakilerini yazdırdı ve aralarına virgül eklendi. 
    }
},"")
//console.log(sentence);


const namesLengths= names.some((Element) => Element.length > 7);
//console.log(namesLengths);

const sixCountry = countries.find((Element) => Element.length >6);
//console.log(sixCountry);

const sixCountry2 = countries.findIndex((Element) => Element.length >6);
//console.log(sixCountry2);

const sixCountry3 = countries.findIndex((Element) => Element.length -1);
console.log(sixCountry3);

































