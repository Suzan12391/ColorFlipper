const container = document.getElementById("container");
const h1 = document.getElementById("h1");
const btn = document.getElementById("btn");
const span= document.querySelector('span');



btn.addEventListener('click',(e)=>{
    
    const random = Math.floor(Math.random()*356);
    const random2 = Math.floor(Math.random()*100);
    const random3 = Math.floor(Math.random()*50);

    const randomColor =`hsl(${random}, ${random2}%, ${random3}%)`;



    document.body.style.backgroundColor=randomColor;
    span.textContent=randomColor;


});


