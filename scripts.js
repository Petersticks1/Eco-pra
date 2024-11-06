//NAVIGATION INDICATOR JS//

const dots = document.querySelectorAll('.dot');
let activeIndex = 0;

// Function to update the active dot
function updateActiveDot() {
    // Remove 'active' class from all dots
    dots.forEach(dot => dot.classList.remove('active'));

    // Add 'active' class to the current dot
    dots[activeIndex].classList.add('active');

    // Move to the next dot, or loop back to the first one
    activeIndex = (activeIndex + 1) % dots.length;
}

// Initial call to set the first dot as active
updateActiveDot();

// Update the active dot every 1 second
setInterval(updateActiveDot, 1000);
//NAVIGATION INDICATOR JS//



//COUNTDOWN JS//
// Set the date for the countdown (3 days from now)
const countdownDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;

// Function to format numbers with leading zeros
function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

// Update the countdown every 1 second
const countdownInterval = setInterval(() => {
    // Get the current time
    const now = new Date().getTime();
    
    // Calculate the time left
    const timeLeft = countdownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result with leading zeros
    document.getElementById("days").innerText = formatNumber(days);
    document.getElementById("hours").innerText = formatNumber(hours);
    document.getElementById("minutes").innerText = formatNumber(minutes);
    document.getElementById("seconds").innerText = formatNumber(seconds);
    
    // If the countdown is over, clear the interval and show a message
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<p>Countdown Complete!</p>";
    }
}, 1000);


//COUNTDOWN JS//


// FLASH SALES PRODUCTS JS//
const productContainer = document.getElementById("product-list");
const cardWidth = 220; // Width of a single product card including margin
let scrollPosition = 0;

// Function to slide right
function slideRight() {
    scrollPosition += cardWidth;
    productContainer.style.transition = 'transform 0.3s ease-in-out';
    productContainer.style.transform = `translateX(-${scrollPosition}px)`;

    // If we've scrolled to the end, reset the scroll position
    if (scrollPosition >= productContainer.scrollWidth - productContainer.clientWidth) {
        setTimeout(() => {
            scrollPosition = 0;
            productContainer.style.transition = 'none';
            productContainer.style.transform = `translateX(0px)`;
        }, 300); // Timeout matches the transition duration
    }
}

// Function to slide left
function slideLeft() {
    if (scrollPosition === 0) {
        scrollPosition = productContainer.scrollWidth - productContainer.clientWidth;
        productContainer.style.transition = 'none';
        productContainer.style.transform = `translateX(-${scrollPosition}px)`;
    }

    scrollPosition -= cardWidth;
    productContainer.style.transition = 'transform 0.3s ease-in-out';
    productContainer.style.transform = `translateX(-${scrollPosition}px)`;
}

// Fetch and display products from products.json file
async function fetchProducts() {
    try {
        const response = await fetch("./products.json");
        const data = await response.json();

        const limitedData = data.slice(0, 30); // Limit to 5 products
        limitedData.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";

            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.title;
            productCard.appendChild(productImage);

            const productTitle = document.createElement("h2");
            productTitle.textContent = product.title;
            productCard.appendChild(productTitle);

            const productPrice = document.createElement("p");
            productPrice.className = "product-price";
            productPrice.textContent = `$${product.price}`;
            productCard.appendChild(productPrice);

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
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

fetchProducts();
