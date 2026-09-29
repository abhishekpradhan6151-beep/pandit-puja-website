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

    // Navigation
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

    // Puja Services
    "Mahamrityunjaya Jaap": "महामृत्युंजय जाप",
    "Rudrabhishek": "रुद्राभिषेक",
    "Mangal Dosh Pooja": "मंगल दोष पूजा",
    "Pitra Dosh Poojan": "पितृ दोष पूजन",
    "Kaal Sarp Dosh Pooja": "काल सर्प दोष पूजा",
    "Navgraha Shanti": "नवग्रह शांति",
    "Dosh Nivaran": "दोष निवारण",

    // Header / Website information
    "Traditional Vedic Puja & Ritual Services": "पारंपरिक वैदिक पूजा एवं अनुष्ठान सेवाएँ",
    "All India Online Puja": "पूरे भारत में ऑनलाइन पूजा",
    "Ujjain, Madhya Pradesh": "उज्जैन, मध्य प्रदेश",

    // Footer
    "Quick Links": "महत्वपूर्ण लिंक",
    "Contact Us": "संपर्क करें",
    "Booking": "बुकिंग",
    "Privacy Policy": "गोपनीयता नीति",
    "Puja Services": "पूजा सेवाएँ",

    // Common buttons
    "View All Services": "सभी सेवाएँ देखें",
    "Learn More": "और जानें",
    "Read More": "और पढ़ें",
    "Send Enquiry": "पूछताछ भेजें",
    "Submit": "सबमिट करें",
    "Submit Enquiry": "पूछताछ भेजें",
    "Get in Touch": "संपर्क करें",

    // Homepage
    "Puja & Ritual Services": "पूजा एवं अनुष्ठान सेवाएँ",
    "Our Services": "हमारी सेवाएँ",
    "About Pandit Ji": "पंडित जी के बारे में",
    "Why Choose Us": "हमें क्यों चुनें",
    "Why Choose Vedic Pooja Ujjain": "वैदिक पूजा उज्जैन को क्यों चुनें",
    "Online Puja": "ऑनलाइन पूजा",
    "Live Online Puja": "लाइव ऑनलाइन पूजा",
    "Frequently Asked Questions": "अक्सर पूछे जाने वाले प्रश्न",
    "FAQ": "अक्सर पूछे जाने वाले प्रश्न",
    "Gallery": "गैलरी",

    // Booking / CTA
    "Book Your Puja": "अपनी पूजा बुक करें",
    "Ready to Arrange Your Puja?": "अपनी पूजा की व्यवस्था करने के लिए तैयार हैं?",
    "Ready to Arrange Kaal Sarp Dosh Pooja?": "काल सर्प दोष पूजा की व्यवस्था करने के लिए तैयार हैं?",
    "Contact Pandit Ji to discuss your preferred date, timing and puja arrangements.": "अपनी पसंदीदा तिथि, समय और पूजा की व्यवस्था के बारे में चर्चा करने के लिए पंडित जी से संपर्क करें।",

    // Forms
    "Full Name": "पूरा नाम",
    "Name": "नाम",
    "Mobile Number": "मोबाइल नंबर",
    "Mobile": "मोबाइल",
    "Puja / Service": "पूजा / सेवा",
    "Preferred Date": "पसंदीदा तिथि",
    "Preferred Time": "पसंदीदा समय",
    "Select a Puja": "पूजा चुनें",
    "Your Message": "आपका संदेश",
    "Message": "संदेश",

    // About / Pandit Ji
    "Pandit Dinesh Krishn Pradhan": "पंडित दिनेश कृष्ण प्रधान",
    "Bhagawatacharya": "भागवताचार्य",
    "Vedic Anushthankarta": "वैदिक अनुष्ठानकर्ता",
    "Vedic Anushthankarta & Bhagawatacharya": "वैदिक अनुष्ठानकर्ता एवं भागवताचार्य",
    "15+ Years of Experience": "15+ वर्षों का अनुभव",

    // Service information
    "Traditional Vedic Rituals": "पारंपरिक वैदिक अनुष्ठान",
    "Authentic Vedic Rituals": "प्रामाणिक वैदिक अनुष्ठान",
    "Puja Samagri": "पूजा सामग्री",
    "Puja Samagri Arranged": "पूजा सामग्री की व्यवस्था",
    "Prasad": "प्रसाद",
    "Ujjain & Selected Cities": "उज्जैन एवं चुनिंदा शहर",
    "Across India": "पूरे भारत में",
    "Available Across India": "पूरे भारत में उपलब्ध",

    // Service page common text
    "Benefits": "लाभ",
    "Puja Details": "पूजा का विवरण",
    "About the Puja": "पूजा के बारे में",
    "How the Puja is Performed": "पूजा कैसे की जाती है",
    "Who Can Perform This Puja?": "यह पूजा कौन कर सकता है?",
    "Book This Puja": "यह पूजा बुक करें",
    "Enquire Now": "अभी पूछताछ करें",

    // Online Puja
    "Online Puja Across India": "पूरे भारत में ऑनलाइन पूजा",
    "Join Online From Anywhere in India": "भारत में कहीं से भी ऑनलाइन जुड़ें",
    "Join the Puja Online": "पूजा में ऑनलाइन जुड़ें",
    "Live through video call": "वीडियो कॉल के माध्यम से लाइव",
    "Puja can be performed online": "पूजा ऑनलाइन कराई जा सकती है",

    // FAQ
    "Frequently Asked Questions": "अक्सर पूछे जाने वाले प्रश्न",
    "Can I book a puja online?": "क्या मैं पूजा ऑनलाइन बुक कर सकता हूँ?",
    "Do you provide online puja services?": "क्या आप ऑनलाइन पूजा सेवाएँ प्रदान करते हैं?",
    "Where are in-person pujas available?": "व्यक्तिगत रूप से पूजा कहाँ उपलब्ध है?",
    "Is puja samagri arranged by Pandit Ji?": "क्या पूजा सामग्री की व्यवस्था पंडित जी द्वारा की जाती है?",
    "How can I contact Pandit Ji?": "मैं पंडित जी से कैसे संपर्क कर सकता हूँ?",
    "How do I book a puja?": "मैं पूजा कैसे बुक कर सकता हूँ?",

    // Contact
    "Contact Pandit Ji": "पंडित जी से संपर्क करें",
    "Contact Information": "संपर्क जानकारी",
    "Booking Enquiries": "बुकिंग संबंधी पूछताछ",
    "Call": "कॉल करें",
    "WhatsApp": "व्हाट्सऐप",
    "Send us an enquiry": "हमें अपनी पूछताछ भेजें",

    // Gallery
    "Puja Gallery": "पूजा गैलरी",
    "Our Gallery": "हमारी गैलरी",
    "Traditional Puja Ceremony": "पारंपरिक पूजा समारोह",
    "Traditional Puja Items": "पारंपरिक पूजा सामग्री",
    "Puja Samagri and Vedic Rituals": "पूजा सामग्री एवं वैदिक अनुष्ठान",
    "Bhagwat Katha and Vedic Ceremony": "भागवत कथा एवं वैदिक समारोह",
    "Traditional Puja Arrangement": "पारंपरिक पूजा व्यवस्था",

    // Legal
    "Last Updated": "अंतिम अपडेट",
    "Information We Collect": "हम कौन-सी जानकारी एकत्र करते हैं",
    "How We Use Your Information": "हम आपकी जानकारी का उपयोग कैसे करते हैं",
    "Information Sharing": "जानकारी साझा करना",
    "Data Security": "डेटा सुरक्षा",
    "Your Rights": "आपके अधिकार",
    "Contact Us About Privacy": "गोपनीयता के बारे में हमसे संपर्क करें",

    // Language
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