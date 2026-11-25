
// Shopping cart
let cart = [];

const cartCount = document.getElementById("cartCount");
const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        const existingProduct = cart.find(
            item => item.name === name
        );

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        updateCart();

        button.textContent = "Added ✓";

        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1000);
    });
});

function updateCart() {
    const totalItems = cart.reduce(
        (total, item) => total + item.quantity, 0
    );

    cartCount.textContent = totalItems;
}

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();

    formMessage.textContent =
        `Thank you, ${name}! Your message has been received.`;

    contactForm.reset();
});
