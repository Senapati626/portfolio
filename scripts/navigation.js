const navbutton = document.querySelector(".home_menu");
const nav_menu = document.querySelector(".menu_container");
const nav_link = document.getElementById("nav-links");
const menuSlide = () => {
    if (nav_menu.style.right == "-100%"){
    nav_menu.style.right = "0";
    navbutton.classList.add("close_menu");
    }
    else{
      nav_menu.style.right = "-100%";  
      navbutton.classList.remove("close_menu");
    }
};




const flip = document.querySelector("#turner");
const flip2 = document.querySelector("#turner2");
const card = document.querySelector(".contact_card");
const back = document.querySelector(".back");



flip.addEventListener('click', () => {
    if (card.classList.contains("page_flip")){
    card.classList.remove("page_flip");
}
else{
    card.classList.add("page_flip");
}
     
})

const btn = document.querySelectorAll(".btn");
const slider = document.querySelectorAll(".project_slider");
const btn2 = document.querySelectorAll(".btn2");
for (let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", () => {
    btn[i].style.opacity = "0";
    slider[i].style.top = "0";
    })

    btn2[i].addEventListener("click", () => {
    slider[i].style.top = "100%";
    btn[i].style.opacity = "1";
    })
}