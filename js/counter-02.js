// Добавляем прослушку на всем окне
window.addEventListener("click", function (event) {
  // Обьявляем переменную для счетчика
  let counter;
  // Проверяем клик строго по кнопкам + либо -
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // находим обертку счетчика
    const counterWrapper = event.target.closest(".counter-wrapper");

    // Находим див с числом счетчика
    counter = counterWrapper.querySelector("[data-counter]");
  }

  // Проверяем является ли елемент по клику кнопкой +
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }
  // Проверяем является ли елемент по клику кнопкой -
  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      // Проверка на товар который находится в корзине
      console.log("IN CART!!!!");
      // Удаляем товар из корзины
      event.target.closest(".cart-item").remove();

      // Отображение статуса корзины Пустая / Полная
      toggleCartStatus();

      // Пересчет общей стоимости товара в корзине
      calcCartPriceAndDelivery();
    }
  }

  // Проверяем клик на + или - внутри корзины
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    // Пересчет общей стоимости товара в корзине
    calcCartPriceAndDelivery();
  }
});
