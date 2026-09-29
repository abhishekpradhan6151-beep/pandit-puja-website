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
/* =========================================
   ENGLISH / HINDI LANGUAGE TOGGLE
   ========================================= */

const languageToggle = document.querySelector("#language-toggle");

const translations = {
    "Home": "होम",
    "Puja Services": "पूजा सेवाएँ",
    "About": "परिचय",
    "Online Puja": "ऑनलाइन पूजा",
    "Gallery": "गैलरी",
    "Contact": "संपर्क",
    "Book a Puja": "पूजा बुक करें",
    "WhatsApp Us": "व्हाट्सऐप करें",
    "Talk to Pandit Ji": "पंडित जी से बात करें",
    "Call Pandit Ji": "पंडित जी को कॉल करें",

    "Mahamrityunjaya Jaap": "महामृत्युंजय जाप",
    "Rudrabhishek": "रुद्राभिषेक",
    "Mangal Dosh Pooja": "मंगल दोष पूजा",
    "Pitra Dosh Poojan": "पितृ दोष पूजन",
    "Kaal Sarp Dosh Pooja": "काल सर्प दोष पूजा",
    "Navgraha Shanti": "नवग्रह शांति",

    "Traditional Vedic Puja & Ritual Services": "पारंपरिक वैदिक पूजा एवं अनुष्ठान सेवाएँ",
    "All India Online Puja": "पूरे भारत में ऑनलाइन पूजा",
    "Ujjain, Madhya Pradesh": "उज्जैन, मध्य प्रदेश",

    "Quick Links": "महत्वपूर्ण लिंक",
    "Contact Us": "संपर्क करें",
    "Booking": "बुकिंग",
    "Privacy Policy": "गोपनीयता नीति",

    "English": "English",
    "Hindi": "हिंदी"
};

function translatePageToHindi() {
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function (node) {
                if (
                    !node.parentElement ||
                    ["SCRIPT", "STYLE", "NOSCRIPT"].includes(node.parentElement.tagName)
                ) {
                    return NodeFilter.FILTER_REJECT;
                }

                return node.nodeValue.trim()
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_REJECT;
            }
        }
    );

    while (walker.nextNode()) {
        const node = walker.currentNode;
        const originalText = node.nodeValue.trim();

        if (translations[originalText]) {
            node.nodeValue = node.nodeValue.replace(
                originalText,
                translations[originalText]
            );
        }
    }
}

function restoreEnglish() {
    location.reload();
}

if (languageToggle) {
    languageToggle.addEventListener("click", function () {
        const currentLanguage = localStorage.getItem("siteLanguage") || "en";

        if (currentLanguage === "en") {
            localStorage.setItem("siteLanguage", "hi");
            translatePageToHindi();
            document.documentElement.lang = "hi";
            languageToggle.textContent = "English";
        } else {
            localStorage.setItem("siteLanguage", "en");
            restoreEnglish();
        }
    });
}

if (localStorage.getItem("siteLanguage") === "hi") {
    translatePageToHindi();

    if (languageToggle) {
        languageToggle.textContent = "English";
    }

    document.documentElement.lang = "hi";
}