/* //1.alıştırma 
const arr = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
console.log(arr.length); //11 
//console.log(`Dizinin ilk elemanı: ${arr[0]}, dizinin son elemanı: ${arr[10]}, dizinin ortanca elemanı: ${arr[5]}`);
 
const newArr = [];

for (let i=0; i<arr.length; i++)
{
    newArr.push(arr[i].toUpperCase()); // for döngüsü ile dizideki her bir elemanın harflerini büyük harf yaptı. 
    
}
console.log(newArr);
//2.alıştırma 
const arR= [2,3,4,5,4,3,6,7];
let sum=0;
for (let i=0; i<arR.length; i++)
{
    sum= sum + arR[i];   // for döngüsü ile dizideki her elemanı topladık. 
}
console.log(sum);

//3.alıştırma 
const arr2= [2,3,4,5];
const newArr2= [];

for (let i=0; i<arr2.length; i++)
{
    newArr2.push(arr2[i] ** 2);  // for ile dizideki her elemanın karesini bulduk.. 
}
console.log(newArr2);


//4.alıştırma while döngüsü 

let i=0;
while (i<=5)
{
    console.log(i);
    i++;

}


//5.alıştırma for of loop 

const arr =[1,2,3,4,5];
for (const ar of arr)
{
    //console.log(ar);  // for döngüsü ile dizi elemanlarını döndürdük. 
    console.log (ar*ar);

}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  for (const tech of webTechs) {
    console.log(tech.toUpperCase())   // dizidei her elemanın harflerini büyük harf yaptık. 
  }

  // 6.alıştırma for döngüsünde break 

for (let i= 0; i<=5; i++)
{
    if (i==3)
    {
        break
    }
    console.log(i);

}
// 7.alıştırma for döngüsünde continue 

for (let i=0; i<=5; i++)
{
    if (i==3)
    {
        continue
    }
    console.log(i);
}

*/
// EXERSİCES 6: 

for (let i =0; i<=7; i++)
{
    let row="";
    for (let j=0; j<i; j++)
    {
        row += '#';   // 1 den başlayarak sırayla 1 artarak alt alta # yazan for döngüsü 
    }
    // console.log(row);
    
}
for (let i = 0; i <= 10; i++) {
    // console.log(`${i} x ${i} = ${i * i}`);  // 1den başlayarak her sayıyı kendisi ile çarpan ve bunu ekrana yazan for döngüsü 
}
// console.log('i  i^2  i^3')
for (let i =0; i<=10; i++)
{
    // console.log(`${i}   ${i*i}   ${i*i*i}`);    // i nin i ile çarpımı ve i üssü3 de yazdıırldı. 

}
// console.log('çift sayılar');
for (let i=0; i<100; i++)
{
    if (i % 2 == 0)
    {
        // console.log(i);   // 0 dn 100e kadar olan tüm çift sayıları yazdırdık. 
    }
}
// console.log('tek sayılar');
for (let i=0; i<100; i++)
{
    if (i % 2 != 0)
    {
        // console.log(i);   // 0 dn 100e kadar olan tüm çift sayıları yazdırdık. 
    }
}
let total= 0;
for (let i=0; i<=100;i++)
{
    
    total += i;
    
}
console.log(' 0 dan 100e kadar olan tüm sayıların toplamı: ' + total);
















