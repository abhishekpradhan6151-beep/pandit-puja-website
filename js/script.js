// Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu?.classList.remove("active");
    });
});

// FAQ accordion
document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        item.classList.toggle("active");
    });
});

// Booking form → WhatsApp
const bookingForm = document.querySelector("#booking-form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name")?.value.trim();
        const mobile = document.querySelector("#mobile")?.value.trim();
        const puja = document.querySelector("#puja")?.value;
        const date = document.querySelector("#date")?.value;
        const time = document.querySelector("#time")?.value;

        if (!name || !mobile || !puja || !date || !time) {
            alert("Please fill in all booking details.");
            return;
        }

        const message =
            "Namaste Pandit Ji,%0A%0A" +
            "I would like to book a puja.%0A%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Mobile: " + encodeURIComponent(mobile) + "%0A" +
            "Puja / Service: " + encodeURIComponent(puja) + "%0A" +
            "Preferred Date: " + encodeURIComponent(date) + "%0A" +
            "Preferred Time: " + encodeURIComponent(time) + "%0A%0A" +
            "Please confirm the booking details.";

        const whatsappURL =
            "https://wa.me/919826484802?text=" + message;

        alert("Your booking request is ready. You will now be redirected to WhatsApp.");

        window.location.href = whatsappURL;
    });
}