// function calcCartPrice() {
//     // const cartWrapper = document.querySelector('.cart-wrapper');
//     const cartItems = document.querySelectorAll('.cart-item');

//     // Общая стоимость товаров
//     let totalPrice = 0;

//     // Обходим все блоки с ценами в корзине
//     cartItems.forEach(function (item) {

//         // Находим количество товара
//        const amountEl = item.querySelector('[data-counter]');
//        const priceEl = item.querySelector('.price__currency');
//        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
//        totalPrice += currentPrice;
//     })

//     console.log(totalPrice);

// }

function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl =document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');


    //Общая стоимость товаров
    let priceTotal = 0;

    //Обходм все блоки с ценами в корзине
    priceElements.forEach(function (item) {

        //Находим количество товара
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
        
        // Добавляем стоимость товара в общую стоимость(кол-во * цену)
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);

    });
    // Отображаем цену на странице
    totalPriceEl.innerText = priceTotal;

    // Скрываем / Показываем блок с стоимостью доставки
    if (priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    // Указываем стоимость доставки
    if (priceTotal >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₴';
    }
}