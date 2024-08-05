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






// автододавання
function getCookieValue(cookieName) {
    // Розділяємо всі куки на окремі частини
    const cookies = document.cookie.split(';');

    // Шукаємо куки з вказаним ім'ям
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); // Видаляємо зайві пробіли

        // Перевіряємо, чи починається поточне кукі з шуканого імені
        if (cookie.startsWith(cookieName + '=')) {
            // Якщо так, повертаємо значення кукі
            return cookie.substring(cookieName.length + 1); // +1 для пропуску символу "="
        }
    }
    // Якщо кукі з вказаним іменем не знайдено, повертаємо порожній рядок або можна повернути null
    return '';
}

// Отримуємо дані про товари з JSON файлу
async function getProducts() {
    let response = await fetch("rooms.json");
    let products = await response.json();
    return products;
};

// Генеруємо HTML-код для карточки товару
function getCardHTML(product) {
    return `
        <div class="inNumbersPart">
                <img src="img/${product.img}" class="inNumberImg">
                <div class="inNumbersRight">
                    <div class="inNumbersRight5">${product.name}</div>
                    <div style="display: flex; flex-direction: row;">
                        <div class="inNumbersLeftPart">
                            <div class="inNumbersRight1">${product.plus}</div>
                            <div class="inNumbersRight2">${product.plus}</div>
                            <div class="inNumbersRight3">${product.plus}</div>
                            <div class="inNumbersRight4">${product.plus}</div>
                        </div>
                        <div class="inNumbersRightPart">
                            <div class="inNumbersRight6">${product.price}</div>
                            <div class="inNumbersRight7">За добу</div>
                            <div class="inNumbersRight8 inBuyNumbers">Замовити</div>
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
        products.forEach(function (product) {
            productsList.innerHTML += getCardHTML(product)
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
