
// HTML5 Web Storage
//sessionStorage yalnızca tarayıcı sekmesinde veya pencere oturumunda kullanılabilir. 
// Verileri tek bir web sayfası oturumunda depolamak için tasarlanmıştır. 
//Bu, pencere kapatılırsa oturum verilerinin kaldırılacağı anlamına gelir. 

/*HTML5 localStorage, web depolama API'sinin son kullanma tarihi olmayan verileri tarayıcıda depolamak için kullanılan paragrafıdır. 
Veriler, tarayıcı kapatıldıktan sonra bile tarayıcıda mevcut olacaktır. localStorage, tarayıcı oturumları arasında bile tutulur. 
Bu, tarayıcı kapatılıp yeniden açıldığında ve ayrıca sekmeler ve pencereler arasında anında verilerin mevcut olduğu anlamına gelir.*/

localStorage.setItem('name','meryem'); // local strorage yerine name ve meryem yazdırıldı. 
// bu değerler tarayıcıda görüntülenir ve tarayıcı kapatılsa bile silinmez. silmek için 
localStorage.clear();  // kullanılır. 

localStorage.getItem(); //localStorage'da saklanan verileri görüntülemek için. Parametre olarak bir anahtar alır. 
localStorage.getItem('name');
// 'meryem'    koncolda bu ifade çıkar. 
const skills = ['HTML', 'CSS', 'JS', 'React'];
console.log(skills);



// bu kodlar VSCODE editörünün terminalindde çalışmaz. bunları tararyıcıda veya HTML dosyası içerisinde çağırıp çalıştırabiliriz. 








