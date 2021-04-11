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
}
nav_link.addEventListener('click', menuSlide);




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