const submit = document.querySelector("#submit");
const btn = document.querySelectorAll(".all-btn button");
const thanks = document.querySelector(".thanks");
const rating = document.querySelector(".rating");
const span = document.querySelector("#result");
var k;
btn.forEach((el,index) => {
    
    el.addEventListener("click",()=>{
        for(let i=0;i<btn.length;i++){btn[i].style.backgroundColor="hsl(215, 11%, 21%)";btn[i].style.color= "hsl(217, 12%, 63%)";}
        el.style.backgroundColor="hsl(25, 97%, 53%)";el.style.color= "white";
        k=index;
    })

});
submit.addEventListener("click",()=>{
    thanks.style.display="grid";
    rating.style.display="none";
    span.textContent=btn[k].textContent;
})