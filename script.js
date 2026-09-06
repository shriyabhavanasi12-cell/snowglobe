const globe=document.querySelector("#globe");
const button=document.querySelector("#shake");
const message= document.querySelector("#message");


button.addEventListener("click",()=>{
    globe.classList.add("shaking");
    setTimeout(()=> globe.classList.remove("shaking"),600);

});
