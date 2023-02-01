// Closure 
// fonksiyon içerisinde fonksiyon tanımladıktan sonra ana fonksiyonun değişkenlerine erişebilek için kullanılır. 


function counter (){
    let count =0;
    function up(){
        count ++;
        return count;
    }
    function down(){
        count --;      // fonksiyon içerisinde tanımlanan fonksiyon
        return count;
    }
    return {
        up:up,
        down : down
    }
}
let count = counter();
console.log(count.up());   // fonksiyon içerisindeki fonksiyonu çağırırken bu şekilde kullanabiliriz. 
console.log(count.up());
console.log(count.up());
console.log(count.up());

console.log(count.down());
console.log(count.down());
console.log(count.down());
console.log(count.down());







