function loadBasket() {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    const basketContainer = document.getElementById("basket-items");
    basketContainer.innerHTML = "";

    if (basket.length === 0) {
        basketContainer.innerHTML = "<p>Your basket is empty.</p>";
        return;
    }

    basket.forEach(item => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <img src="${item.image}" width="100">
            <p>${item.name} - £${item.price} (x${item.quantity})</p>
            <button onclick="removeFromBasket('${item.name}')">Remove</button>
        `;
        basketContainer.appendChild(productDiv);
    });
}

function removeFromBasket(name) {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket = basket.filter(item => item.name !== name);
    localStorage.setItem("basket", JSON.stringify(basket));
    loadBasket();
}

// Load basket items when page opens
loadBasket();



/*function updateBasketUI() {
    const basketContainer = document.getElementById("basket-items");
    basketContainer.innerHTML = "";

    basket.forEach((item) => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <img src="${item.image}" width="100">
            <p>${item.name} - £${item.price} (x${item.quantity})</p>
            <button onclick="removeFromBasket('${item.name}')">Remove</button>`;
        basketContainer.appendChild(productDiv);
    });
}

function removeFromBasket(name) {
    basket = basket.filter((item) => item.name !== name);
    updateBasketUI();
}/*/
