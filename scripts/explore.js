
// Fetch and display products from products.json, limiting to 4 products
function fetchProducts() {
    const productContainer = document.getElementById("products-explore");

    fetch("./products.json")
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(function (data) {
            const limitedData = data.slice(0, 8); // Limit to 4 products
            limitedData.forEach(function (product) {
                const productCard = document.createElement("div");
                productCard.className = "product-card";

                // Product Image
                const productImage = document.createElement("img");
                productImage.src = product.image;
                productImage.alt = product.title;
                productCard.appendChild(productImage);

                // Product Title
                const productTitle = document.createElement("h2");
                productTitle.textContent = product.title;
                productCard.appendChild(productTitle);

                // Product Price
                const productPrice = document.createElement("p");
                productPrice.className = "product-price";
                productPrice.textContent = `$${product.price}`;
                productCard.appendChild(productPrice);

                // Product Description
                const productDescription = document.createElement("p");
                productDescription.className = "product-description";
                productDescription.textContent = product.description;
                productCard.appendChild(productDescription);

                const productRatings = document.createElement("p");
            productRatings.className = "product-ratings";
            productRatings.textContent = `Rating: ${product.rating.rate} / 5`;
            productCard.appendChild(productRatings);


                productContainer.appendChild(productCard);
            });
        })
        .catch(function (error) {
            console.error("Error fetching products:", error);
            productContainer.innerHTML = "<p>Failed to load products.</p>";
        });
}

// Initialize fetching of products
fetchProducts();





