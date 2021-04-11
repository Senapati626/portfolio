const loadingText = document.querySelector(".preloader_text h2");
const loaded = document.querySelector("#loaded");
const mritoSainik = document.querySelector(".loader_1");
const mritoSainik2 = document.querySelector(".loader_2");
const mritoSainik3 = document.querySelector(".loader_3");
const loader = document.querySelector(".preloader");
const welcomearray = ["Welcome", "خوش آمدید","Willkommen","स्वागत","Добро пожаловать","Bienvenida","স্বাগত",
"Bienvenue","வரவேற்பு","Benvenuto","ようこそ"];

const currentText = welcomearray[Math.floor(Math.random()*4)];

let indexer = 0;

const loopText = () => {
    for (let i=0; i<=12; i++){
        if (indexer == 11){
            indexer = 0;
        }
        else{
            indexer ++;
            loadingText.innerHTML = welcomearray[indexer-1];
        }  
    }    
}

const anime = setInterval(function(){loopText();},1000);

document.onreadystatechange = () => {
    if(document.readyState === 'complete'){
        clearInterval(anime);
        loadingText.style.opacity = "0";
        mritoSainik.style.transform = "translateY(-100%)";
        mritoSainik2.style.transform = "translateY(-100%)";
        mritoSainik3.style.transform = "translateY(-100%)";

        loader.style.opacity = "0";
        loaded.style.display = "block";
    }
}
