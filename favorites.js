document.addEventListener("DOMContentLoaded", function () {
    displayFavorites();

    // Add event listeners to all Add to Favorites buttons
    document.querySelectorAll(".add-to-fav").forEach(button => {
        button.addEventListener("click", function() {
            let product = button.closest(".product-card");
            let id = product.dataset.id;
            let name = product.dataset.name;
            let price = parseFloat(product.dataset.price);
            let image = product.dataset.image;

            addToFav(id, name, price, image);
        });
    });
});

