// preloader
window.addEventListener('load', function() {
    let preloader = document.querySelector('.preloader');
    let loader = document.querySelector('.loader');


    this.setTimeout(function() {
        loader.style.display = "none";
        preloader.style.cssText = "top: -100%;";
    },1000)
    

});
//preloader



// Анімація збільшення зменшиння при прокручуані
let inWhyWeBlock = document.getElementsByClassName("inWhyWeBlock")
function inDefaultStyle(element) {
    element.style.cssText = "transform: scale(1);";
}
function inDisDefaultStyle(element) {
    element.style.cssText = "transform: scale(1.05);"
}
window.addEventListener('scroll', () => {
    if(window.matchMedia("screen and (min-width: 769px)").matches==true){
        for (let i = 0 ; i < inWhyWeBlock.length ; i++) {
            let elementTop = inWhyWeBlock[i].getBoundingClientRect().top; //відстань від верху сторінку до верху елемента
            let windowHeight = window.innerHeight;//висота вікна
            inDefaultStyle(inWhyWeBlock[i])
            if (elementTop <= windowHeight / 6 * 5 ) {
                inDisDefaultStyle(inWhyWeBlock[i]);
                if(elementTop <= windowHeight / 8){
                    inDefaultStyle(inWhyWeBlock[i])
}}}}});
// Анімація збільшення зменшиння при прокручуані



let inHeaderBackground = document.getElementsByClassName('inHeaderBackground');

function inHeaderBackgroundStyleStandart(element) {
    element.style.cssText = `background-position: 0px 0px;`;
}

function inHeaBackgroundStyleNoStandart(element, value) {
    element.style.cssText = `background-position: 0px ${value}px;`;
}
inHeaBackgroundStyleNoStandart(inHeaderBackground[0], 0);
