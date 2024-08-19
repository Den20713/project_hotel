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







// Отримуємо дані про товари з JSON файлу
async function getProducts() {
    let response = await fetch("rooms.json");
    let products = await response.json();
    return products;
};

// Генеруємо HTML-код для карточки товару
function getCardHTML(product, index) {
    const carouselId = `carouselExample${index}`;
    return `
         <div class="inNumbersNameMB">${product.name}</div>
            <div class="inNumbersPart">
                <div id="${carouselId}" class="carousel slide" style="background-size: cover; width: 40vw; margin-right: 1vw;">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="${product.img2}" class="d-block w-100">
                      </div>
                      <div class="carousel-item">
                        <img src="${product.img3}" class="d-block w-100">
                      </div>
                      <div class="carousel-item">
                        <img src="${product.img4}" class="d-block w-100">
                      </div>
                      <div class="carousel-item">
                        <img src="${product.img1}" class="d-block w-100">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="inNumbersInfo">
                    <div class="inNumbersNamePC">${product.name}</div>
                    <div style="display: flex; flex-direction: row; height: 100%;">
                        <div class="inNumbersLeftPart">
                            <div class="inNumbersRight1">${product.plus1}</div>
                            <div class="inNumbersRight2">${product.plus2}</div>
                            <div class="inNumbersRight3">${product.plus3}</div>
                            <div class="inNumbersRight4">До пляжу <br>${product.plus4} кроків</div>
                        </div>
                        <div class="inNumbersRightPart">
                            <div class="inNumbersRight6">${product.price}</div>
                            <div class="inNumbersRight7">За добу</div>
                            <div class="inNumbersRight8"><a style="text-decoration:nine;" href="rooms.html"><div class="inBuyNumbers">Замовити</div></a></div>    
                        </div>
                    </div>
                </div>
            </div>
    `;
}

// Відображаємо товари на сторінці
getProducts().then(function (products) {
    let productsList = document.querySelector('.inNumbers')
    if (productsList) {
        products.forEach(function (product, index) {
            productsList.innerHTML += getCardHTML(product, index)
        })
    }
})




























// let inHeaderBackground = document.getElementsByClassName('inHeaderBackground');

// function inHeaderBackgroundStyleStandart(element) {
//     element.style.cssText = `background-position: 0px 0px;`;
// }

// function inHeaBackgroundStyleNoStandart(element, value) {
//     element.style.cssText = `background-position: 0px ${value}px;`;
// }
// inHeaBackgroundStyleNoStandart(inHeaderBackground[0], 0);
