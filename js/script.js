// Mobile menu
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (!menuToggle || !navMenu) {
        return;
    }

    menuToggle.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");
        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
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
/* ================================
   CONTACT PAGE FORM
================================ */

const contactPageForm = document.querySelector("#contact-page-form");

if (contactPageForm) {
    contactPageForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#page-contact-name")?.value.trim();
        const mobile = document.querySelector("#page-contact-mobile")?.value.trim();
        const puja = document.querySelector("#page-contact-puja")?.value;
        const date = document.querySelector("#page-contact-date")?.value;
        const time = document.querySelector("#page-contact-time")?.value;

        if (!name || !mobile || !puja || !date || !time) {
            alert("Please fill in all enquiry details.");
            return;
        }

        const message =
            "Namaste Pandit Ji,%0A%0A" +
            "I have an enquiry regarding a puja.%0A%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Mobile: " + encodeURIComponent(mobile) + "%0A" +
            "Puja / Service: " + encodeURIComponent(puja) + "%0A" +
            "Preferred Date: " + encodeURIComponent(date) + "%0A" +
            "Preferred Time: " + encodeURIComponent(time) + "%0A%0A" +
            "Please contact me to confirm the details.";

        const whatsappURL =
            "https://wa.me/919826484802?text=" + message;

        alert("Your enquiry is ready. You will now be redirected to WhatsApp.");

        window.location.href = whatsappURL;
    });
}