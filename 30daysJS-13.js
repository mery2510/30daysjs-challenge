
//CONSOLE OBJECT METHODS  

// console.log('%cDUR' ,'font_size: 100px');

// console.error('meryeemmm !!');  // ekrana error olarak çıkar. terminalde bunu göremeyiz ama 

const names3 = ['Asabeneh', 'Brook', 'David', 'John'] 
// console.table(names)    // girilen objelerin veya dizilerin ekranda tablo çeklinde görünmesi için kullanılmaktadır. 

const user2 ={
    name: 'meryem',
    surname: 'islam',
    age: 23,
    school: {
        lise: 'imamhatip',
        üni: 'rteü',
    }

}
// console.table(user);
const users1 = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 25
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
//   console.table(users)

// console.time ('calculate 1m array');   // 100 milyon tane elemanlı bir dizinin oluşturulması ne kadar sürer diye merake dersek buunu kullaırız. 
// new Array(10e6).fill().map((value, index) => index)  // fill ile arrayin içini index ile doldurduk. 
// console.timeEnd('calculate 1m array');


const names = ['Asabeneh', 'Brook', 'David', 'John']
const courtiers = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')   // names değişkenindeki names isimleriyle bir group oluşturuldu. 
// console.log(names)
console.groupEnd()


console.group('Countries')
// console.log(courtiers)
console.groupEnd()

console.group('Users')
// console.log(user)
// console.log(users)
console.groupEnd()



// exercise soruları 
//1 

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
    ['Turkey', 'Macaristan']
]

// console.table(countries);

const countriesObject = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    }]

    console.table(countriesObject);


console.group('countries');
console.log(countriesObject);
console.groupEnd();














