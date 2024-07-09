// manu
let toggler =document.querySelector(".toggler");
let nav= document.querySelector(".nav");
let main= document.querySelector(".main");
toggler.onclick=function(){
    nav.classList.toggle("active");
    main.classList.toggle("active");
}

// nav 
let list= document.querySelectorAll(".nav li");
function activeLink(){
    list.forEach((itme)=>
    itme.classList.remove("hoverd"));
    this.classList.add("hoverd");
    }
    list.forEach((itme)=>
    itme.addEventListener("mouseover",activeLink)
);