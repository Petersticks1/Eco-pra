let currentIndex = 0;

function highlightActive(index) {
  const items = document.querySelectorAll(".browse-category ul li");
  items.forEach((item, i) => {
    item.classList.remove("active"); // Remove active class from all
    if (i === index) {
      item.classList.add("active"); // Add active class to the current one
    }
  });
}

function left() {
  const items = document.querySelectorAll(".browse-category ul li");
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Cycle backward
  highlightActive(currentIndex);
}

function right() {
  const items = document.querySelectorAll(".browse-category ul li");
  currentIndex = (currentIndex + 1) % items.length; // Cycle forward
  highlightActive(currentIndex);
}

// Initialize first item as active
document.addEventListener("DOMContentLoaded", () => {
  highlightActive(currentIndex);
});

  