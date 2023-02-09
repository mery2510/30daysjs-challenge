// const h1 = document.querySelector ('h1');
// console.log(h1);
// console.log(h1.attributes.id);

const ul = document.querySelector('ul');
const deleteButton = document.querySelectorAll('.delete-item');
deleteButton.forEach(btn => {
    btn.addEventListener ('click', e => {
        e.target.remove();    //listedeki elemanlara tıklanığında ekrandan siliniyor. 
        console.log(ul.childElementCount);    // ul altındaki elemanların tıklandığında hangi indexe ait oldukları konsola yazılır.
        if (ul.childElementCount === 0){   // içerisindeki bütün li'leri sildikten sonra bütün ul 'yi de silecektir. 
            ul.innerHTML = 'gösterilecek element bulunamadı !!';
        } 
    })
});
// childElementCount  = Elemanın kaç çocuk öğesi olduğunu döndürür.
//children = Elemanın çocuk öğelerini HTMLCollection objesi olarak döndürür.





