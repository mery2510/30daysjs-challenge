// 10 GÜN EXERSİZLERİ
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway'];
// console.log([...a,...b]); // a birleşim b
let newb= new Set(b);

// console.log(a.filter((num) => newb.has(num)));   // a ve b nin kesişimleri bulundu. 

const languages = [
    'English', 'English','Finnish','English','French',
    'Spanish','English','French', 'English','Finnish', 
    'English','French','Spanish', 'English','French', 
    'English','Finnish','English','French','Spanish', 
    'English','French', 'Finnish','English','French',
    'Spanish', 'English','French','French', 'English',
    'Finnish','English', 'French','Spanish','English',
    'Finnish','English','French','Spanish', 'English',
    'French','French', 'English','Finnish','English',
    'French','Spanish','English','French','Finnish',
    'Spanish','English','French','French','English',
    'turkeys', 'turkeys','turkeys','turkeys',
    'turkeys', 'turkeys','turkeys','turkeys', 
    'turkeys', 'turkeys','turkeys','turkeys',  
    'turkeys','turkeys','turkeys', 'turkeys', 
]
// console.log(languages);
const newLangues = new Set(languages);
// console.log(newLangues);
const langue =[];
const reply = {};
for (const l of newLangues){
    const filteredLangue2 = languages.filter ((lng) => lng === l);
    // console.log(filteredLangue);

    langue.push({ l, reply: filteredLangue2.length});
    // console.log(langue);
    if(filteredLangue2.length > 15)
    {
        const biggerLangue =[];
        biggerLangue.push(l , filteredLangue2.length);  // en çok konuşulan dillerin sayılarını aldık. 
        console.log(biggerLangue);      // sayısı 15 den büyük olan dilleri kontrol ettik ve ekrana bastırdık. bunu ekrana basarken dizi içerisine attık. 

        // console.log('en çok konuşulan diller: ' + l + ': ' + filteredLangue2.length);
    }
    

}
// console.log(newLangues.values());


