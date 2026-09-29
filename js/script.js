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

    // Header
    "Traditional Vedic Puja & Ritual Services": "पारंपरिक वैदिक पूजा एवं अनुष्ठान सेवाएँ",
    "Traditional Vedic Puja": "पारंपरिक वैदिक पूजा",
    "& Ritual Services": "एवं अनुष्ठान सेवाएँ",
    "All India Online Puja": "पूरे भारत में ऑनलाइन पूजा",
    "Ujjain, Madhya Pradesh": "उज्जैन, मध्य प्रदेश",

    // Puja Services
    "Mahamrityunjaya Jaap": "महामृत्युंजय जाप",
    "Mahāmṛtyuñjaya Jaap": "महामृत्युंजय जाप",
    "Rudrabhishek": "रुद्राभिषेक",
    "Rudrabhishek Puja": "रुद्राभिषेक पूजा",
    "Mangal Dosh": "मंगल दोष",
    "Mangal Dosh Pooja": "मंगल दोष पूजा",
    "Pitra Dosh": "पितृ दोष",
    "Pitra Dosh Poojan": "पितृ दोष पूजन",
    "Kaal Sarp Dosh": "काल सर्प दोष",
    "Kaal Sarp Dosh Pooja": "काल सर्प दोष पूजा",
    "Navgraha Shanti": "नवग्रह शांति",
    "Dosh Nivaran": "दोष निवारण",
    "Dosh Nivaran Pooja": "दोष निवारण पूजा",

    // Common buttons
    "View Details": "विवरण देखें",
    "View Service": "सेवा देखें",
    "View All Services": "सभी सेवाएँ देखें",
    "View Full Gallery": "पूरी गैलरी देखें",
    "Learn More": "और जानें",
    "Read More": "और पढ़ें",
    "Send Enquiry": "पूछताछ भेजें",
    "Submit": "सबमिट करें",
    "Submit Enquiry": "पूछताछ भेजें",
    "Get in Touch": "संपर्क करें",
    "Book This Puja": "यह पूजा बुक करें",
    "Enquire Now": "अभी पूछताछ करें",
    "Book Your Puja": "अपनी पूजा बुक करें",
    "Book Online Puja": "ऑनलाइन पूजा बुक करें",
    "Call Us": "हमें कॉल करें",

    // Homepage
    "Vedic Puja & Ritual Services": "वैदिक पूजा एवं अनुष्ठान सेवाएँ",
    "Puja & Ritual Services": "पूजा एवं अनुष्ठान सेवाएँ",
    "Our Services": "हमारी सेवाएँ",
    "ABOUT PANDIT JI": "पंडित जी के बारे में",
    "About Pandit Ji": "पंडित जी के बारे में",
    "WHY CHOOSE US": "हमें क्यों चुनें",
    "Why Choose Us": "हमें क्यों चुनें",
    "Why Choose Vedic Pooja Ujjain": "वैदिक पूजा उज्जैन को क्यों चुनें",
    "Live Online Puja": "लाइव ऑनलाइन पूजा",
    "Frequently Asked Questions": "अक्सर पूछे जाने वाले प्रश्न",
    "FAQ": "अक्सर पूछे जाने वाले प्रश्न",
    "Moments of Puja & Devotion": "पूजा एवं भक्ति के सुंदर क्षण",
    "BEGIN YOUR PUJA JOURNEY": "अपनी पूजा यात्रा शुरू करें",

    // Homepage hero
    "Vedic Puja & Anushthan": "वैदिक पूजा एवं अनुष्ठान",
    "Traditional Vedic Rituals": "पारंपरिक वैदिक अनुष्ठान",
    "Vedic Rituals": "वैदिक अनुष्ठान",
    "Traditional Vedic knowledge & practice": "पारंपरिक वैदिक ज्ञान एवं परंपरा",
    "Authentic": "प्रामाणिक",
    "Traditional Vedic rituals performed with devotion": "भक्ति एवं श्रद्धा के साथ किए जाने वाले पारंपरिक वैदिक अनुष्ठान",
    "Experience in Vedic Puja & Rituals": "वैदिक पूजा एवं अनुष्ठानों का अनुभव",
    "Bhagawatacharya": "भागवताचार्य",
    "Experienced Pandit Ji": "अनुभवी पंडित जी",
    "In-Person": "व्यक्तिगत रूप से",
    "Available in Ujjain & selected cities": "उज्जैन एवं चुनिंदा शहरों में उपलब्ध",
    "Puja Samagri": "पूजा सामग्री",
    "Required samagri arranged by Pandit Ji": "आवश्यक सामग्री की व्यवस्था पंडित जी द्वारा",
    "Puja Samagri Arranged": "पूजा सामग्री की व्यवस्था",
    "Prasad": "प्रसाद",
    "Traditional": "पारंपरिक",
    "Vedic Rituals": "वैदिक अनुष्ठान",
    "15+ Years": "15+ वर्ष",
    "Years": "वर्ष",
    "Experience": "अनुभव",
    "Ujjain &": "उज्जैन एवं",
    "& Across India": "एवं पूरे भारत में",
    "Selected Cities": "चुनिंदा शहर",
    "Online Across India": "पूरे भारत में ऑनलाइन",
    "Available Across India": "पूरे भारत में उपलब्ध",
    "Across India": "पूरे भारत में",

    // Homepage About
    "Pandit": "पंडित",
    "Dinesh Krishn Pradhan": "दिनेश कृष्ण प्रधान",
    "Pandit Dinesh Krishn Pradhan": "पंडित दिनेश कृष्ण प्रधान",
    "Vedic Anushthankarta": "वैदिक अनुष्ठानकर्ता",
    "Vedic Anushthankarta & Bhagawatacharya": "वैदिक अनुष्ठानकर्ता एवं भागवताचार्य",
    "15+ Years of Experience": "15+ वर्षों का अनुभव",

    "Pandit Dinesh Krishn Pradhan is a Bhagawatacharya based in Ujjain, Madhya Pradesh, with more than 15 years of experience in Vedic puja and traditional Hindu rituals.": "पंडित दिनेश कृष्ण प्रधान भागवताचार्य हैं और उज्जैन, मध्य प्रदेश में स्थित हैं। उन्हें वैदिक पूजा एवं पारंपरिक हिंदू अनुष्ठानों में 15 वर्षों से अधिक का अनुभव है।",

    "Pandit Dinesh Krishn Pradhan is a Bhagawatacharya based in Ujjain, Madhya Pradesh, with more than 15 years of experience in Vedic puja and traditional Hindu rituals. Puja services are available in Ujjain and selected cities, with online puja services available across India.": "पंडित दिनेश कृष्ण प्रधान भागवताचार्य हैं और उज्जैन, मध्य प्रदेश में स्थित हैं। उन्हें वैदिक पूजा एवं पारंपरिक हिंदू अनुष्ठानों में 15 वर्षों से अधिक का अनुभव है। पूजा सेवाएँ उज्जैन एवं चुनिंदा शहरों में उपलब्ध हैं तथा ऑनलाइन पूजा सेवाएँ पूरे भारत में उपलब्ध हैं।",

    "Traditional puja services are performed with devotion and according to established Vedic practices. Services are available in Ujjain and selected cities, with online puja available across India.": "पारंपरिक पूजा सेवाएँ श्रद्धा एवं स्थापित वैदिक विधियों के अनुसार की जाती हैं। सेवाएँ उज्जैन एवं चुनिंदा शहरों में उपलब्ध हैं तथा ऑनलाइन पूजा पूरे भारत में उपलब्ध है।",

    // Online Puja
    "Participate in traditional Vedic puja from anywhere in India through a live video call with Pandit Ji.": "भारत में कहीं से भी पंडित जी के साथ लाइव वीडियो कॉल के माध्यम से पारंपरिक वैदिक पूजा में भाग लें।",

    "Traditional Puja, Wherever You Are": "आप जहाँ भी हों, पारंपरिक पूजा आपके साथ",

    "You can participate in your chosen puja from the comfort of your home through a live video call. Pandit Ji performs the rituals according to traditional Vedic practices while you and your family participate remotely.": "आप अपने घर से आरामपूर्वक लाइव वीडियो कॉल के माध्यम से अपनी चुनी हुई पूजा में भाग ले सकते हैं। पंडित जी पारंपरिक वैदिक विधियों के अनुसार अनुष्ठान करते हैं, जबकि आप और आपका परिवार दूर से पूजा में शामिल होते हैं।",

    "Live participation through video call": "वीडियो कॉल के माध्यम से लाइव सहभागिता",
    "Live puja participation from anywhere in India": "भारत में कहीं से भी लाइव पूजा में सहभागिता",
    "Puja samagri arranged by Pandit Ji": "पूजा सामग्री की व्यवस्था पंडित जी द्वारा",
    "Puja can be performed online": "पूजा ऑनलाइन कराई जा सकती है",
    "Online Puja Across India": "पूरे भारत में ऑनलाइन पूजा",
    "Join Online From Anywhere in India": "भारत में कहीं से भी ऑनलाइन जुड़ें",
    "Join the Puja Online": "पूजा में ऑनलाइन जुड़ें",
    "Live through video call": "वीडियो कॉल के माध्यम से लाइव",

    // About page
    "Traditional Puja Services, Wherever You Are": "आप जहाँ भी हों, पारंपरिक पूजा सेवाएँ आपके लिए उपलब्ध हैं",
    "In-person puja services are available in Ujjain and selected cities. Online puja services are available across India through live participation.": "व्यक्तिगत पूजा सेवाएँ उज्जैन एवं चुनिंदा शहरों में उपलब्ध हैं। ऑनलाइन पूजा सेवाएँ लाइव सहभागिता के माध्यम से पूरे भारत में उपलब्ध हैं।",

    // Service page common
    "Information": "जानकारी",
    "About the Puja": "पूजा के बारे में",
    "🕉️ About the Puja": "🕉️ पूजा के बारे में",
    "🔱 About the Puja": "🔱 पूजा के बारे में",
    "🐍 About the Puja": "🐍 पूजा के बारे में",
    "🪔 About the Puja": "🪔 पूजा के बारे में",
    "📿 How It Is Arranged": "📿 इसकी व्यवस्था कैसे की जाती है",
    "🌸 Puja Samagri": "🌸 पूजा सामग्री",
    "Traditional Vedic Vidhi": "पारंपरिक वैदिक विधि",
    "Online & In-Person": "ऑनलाइन एवं व्यक्तिगत रूप से",
    "About the Puja": "पूजा के बारे में",
    "How the Puja is Performed": "पूजा कैसे की जाती है",
    "Who Can Perform This Puja?": "यह पूजा कौन कर सकता है?",
    "Benefits": "लाभ",
    "Puja Details": "पूजा का विवरण",

    "The puja can be arranged as an online ritual or as an in-person service, depending on the preferred date, location and availability.": "पूजा की व्यवस्था ऑनलाइन अनुष्ठान या व्यक्तिगत सेवा के रूप में की जा सकती है। यह पसंदीदा तिथि, स्थान और उपलब्धता पर निर्भर करती है।",

    "Puja samagri and required arrangements can be coordinated with Pandit Ji according to the requirements of the puja.": "पूजा की आवश्यकताओं के अनुसार पूजा सामग्री एवं अन्य आवश्यक व्यवस्थाएँ पंडित जी के साथ समन्वय करके की जा सकती हैं।",

    "Book This Puja": "यह पूजा बुक करें",

    "Contact Pandit Ji to discuss your preferred date, timing and puja arrangements.": "अपनी पसंदीदा तिथि, समय और पूजा की व्यवस्था के बारे में चर्चा करने के लिए पंडित जी से संपर्क करें।",

    // Mahamrityunjaya
    "A traditional Vedic chanting ritual performed with devotion, proper puja vidhi and sacred mantras.": "श्रद्धा, उचित पूजा विधि एवं पवित्र मंत्रों के साथ किया जाने वाला पारंपरिक वैदिक जाप अनुष्ठान।",

    "Mahamrityunjaya Jaap is a traditional Vedic chanting ritual centred around the Mahamrityunjaya Mantra. The ritual is performed according to Vedic procedures with appropriate chanting and puja vidhi.": "महामृत्युंजय जाप महामृत्युंजय मंत्र पर केंद्रित एक पारंपरिक वैदिक जाप अनुष्ठान है। यह अनुष्ठान उचित मंत्रोच्चार एवं पूजा विधि के साथ वैदिक प्रक्रियाओं के अनुसार किया जाता है।",

    "Ready to Arrange Mahamrityunjaya Jaap?": "महामृत्युंजय जाप की व्यवस्था करने के लिए तैयार हैं?",

    // Rudrabhishek
    "A traditional Vedic worship ritual dedicated to Lord Shiva, performed with devotion and proper puja vidhi.": "भगवान शिव को समर्पित पारंपरिक वैदिक पूजा अनुष्ठान, जो श्रद्धा एवं उचित पूजा विधि के साथ किया जाता है।",

    "Rudrabhishek is a traditional Shiva worship ritual in which the Shiva Lingam is respectfully offered Abhishek along with Vedic prayers and chanting.": "रुद्राभिषेक एक पारंपरिक शिव पूजा अनुष्ठान है, जिसमें शिवलिंग का श्रद्धापूर्वक अभिषेक किया जाता है तथा वैदिक प्रार्थना एवं मंत्रोच्चार किए जाते हैं।",

    "Ready to Arrange Rudrabhishek?": "रुद्राभिषेक की व्यवस्था करने के लिए तैयार हैं?",

    // Mangal Dosh
    "A traditional Vedic puja performed according to appropriate rituals and devotional practices for Mangal Dosh.": "मंगल दोष के लिए उचित अनुष्ठान एवं श्रद्धापूर्ण विधियों के अनुसार की जाने वाली पारंपरिक वैदिक पूजा।",

    "Mangal Dosh Pooja is a traditional Vedic ritual associated with Mangal (Mars) and is performed according to established puja vidhi and devotional practices.": "मंगल दोष पूजा मंगल (ग्रह) से संबंधित एक पारंपरिक वैदिक अनुष्ठान है, जो स्थापित पूजा विधि एवं श्रद्धापूर्ण परंपराओं के अनुसार किया जाता है।",

    "Ready to Arrange Mangal Dosh Pooja?": "मंगल दोष पूजा की व्यवस्था करने के लिए तैयार हैं?",

    // Pitra Dosh
    "A traditional Vedic ritual performed according to appropriate puja vidhi and devotional practices associated with Pitra Dosh.": "पितृ दोष से संबंधित उचित पूजा विधि एवं श्रद्धापूर्ण परंपराओं के अनुसार किया जाने वाला पारंपरिक वैदिक अनुष्ठान।",

    "Pitra Dosh Poojan is a traditional Hindu ritual associated with ancestral observances and is performed according to established Vedic procedures and devotional practices.": "पितृ दोष पूजन पूर्वजों से संबंधित पारंपरिक हिंदू अनुष्ठान है, जो स्थापित वैदिक प्रक्रियाओं एवं श्रद्धापूर्ण विधियों के अनुसार किया जाता है।",

    "Ready to Arrange Pitra Dosh Poojan?": "पितृ दोष पूजन की व्यवस्था करने के लिए तैयार हैं?",

    // Kaal Sarp Dosh
    "A traditional Vedic ritual performed according to appropriate puja vidhi and devotional practices associated with Kaal Sarp Dosh.": "काल सर्प दोष से संबंधित उचित पूजा विधि एवं श्रद्धापूर्ण परंपराओं के अनुसार किया जाने वाला पारंपरिक वैदिक अनुष्ठान।",

    "Kaal Sarp Dosh Pooja is a traditional Vedic ritual associated with Kaal Sarp Dosh and is performed according to established puja vidhi and devotional practices.": "काल सर्प दोष पूजा काल सर्प दोष से संबंधित एक पारंपरिक वैदिक अनुष्ठान है, जो स्थापित पूजा विधि एवं श्रद्धापूर्ण परंपराओं के अनुसार किया जाता है।",

    "Ready to Arrange Kaal Sarp Dosh Pooja?": "काल सर्प दोष पूजा की व्यवस्था करने के लिए तैयार हैं?",

    // Navgraha Shanti
    "A traditional Vedic puja dedicated to the Navgraha, performed according to appropriate puja vidhi and devotional practices.": "नवग्रहों को समर्पित पारंपरिक वैदिक पूजा, जो उचित पूजा विधि एवं श्रद्धापूर्ण परंपराओं के अनुसार की जाती है।",

    "Navgraha Shanti is a traditional Vedic ritual associated with the nine Navgraha and is performed according to established puja vidhi and devotional practices.": "नवग्रह शांति नौ नवग्रहों से संबंधित एक पारंपरिक वैदिक अनुष्ठान है, जो स्थापित पूजा विधि एवं श्रद्धापूर्ण परंपराओं के अनुसार किया जाता है।",

    "Ready to Arrange Navgraha Shanti?": "नवग्रह शांति की व्यवस्था करने के लिए तैयार हैं?",

    // Dosh Nivaran
    "A traditional Vedic puja arranged according to the specific requirements and appropriate devotional practices associated with different doshas.": "विभिन्न दोषों से संबंधित विशेष आवश्यकताओं एवं उचित श्रद्धापूर्ण विधियों के अनुसार की जाने वाली पारंपरिक वैदिक पूजा।",

    "Dosh Nivaran Pooja refers to traditional Vedic rituals performed according to the particular dosha and the puja requirements identified for the occasion.": "दोष निवारण पूजा से आशय ऐसे पारंपरिक वैदिक अनुष्ठानों से है, जो संबंधित दोष एवं अवसर के लिए निर्धारित पूजा आवश्यकताओं के अनुसार किए जाते हैं।",

    "Ready to Arrange Dosh Nivaran Pooja?": "दोष निवारण पूजा की व्यवस्था करने के लिए तैयार हैं?",

    // Puja Services page
    "OUR SERVICES": "हमारी सेवाएँ",
    "Traditional Vedic puja and ritual services performed with devotion, proper विधि and श्रद्धा.": "श्रद्धा, उचित विधि एवं भक्ति के साथ की जाने वाली पारंपरिक वैदिक पूजा एवं अनुष्ठान सेवाएँ।",
    "Services": "सेवाएँ",
    "A traditional Vedic chanting ritual performed with devotion and prescribed विधि.": "श्रद्धा एवं निर्धारित विधि के अनुसार किया जाने वाला पारंपरिक वैदिक जाप अनुष्ठान।",
    "A sacred Shiva puja performed through traditional Vedic rituals and offerings.": "पारंपरिक वैदिक अनुष्ठानों एवं अर्पण के माध्यम से की जाने वाली पवित्र शिव पूजा।",
    "Traditional puja performed according to Vedic ritual practices for Mangal Dosh.": "मंगल दोष के लिए वैदिक अनुष्ठान परंपराओं के अनुसार की जाने वाली पारंपरिक पूजा।",
    "A traditional ritual performed with श्रद्धा and Vedic विधि for Pitra-related observances.": "पितृ संबंधी अनुष्ठानों के लिए श्रद्धा एवं वैदिक विधि के अनुसार किया जाने वाला पारंपरिक अनुष्ठान।",
    "A traditional Vedic puja performed according to established ritual practices.": "स्थापित अनुष्ठान परंपराओं के अनुसार की जाने वाली पारंपरिक वैदिक पूजा।",
    "Traditional Navgraha puja and ritual observances performed according to Vedic विधि.": "वैदिक विधि के अनुसार की जाने वाली पारंपरिक नवग्रह पूजा एवं अनुष्ठान।",

    // Gallery
    "OUR GALLERY": "हमारी गैलरी",
    "Puja & Ritual Gallery": "पूजा एवं अनुष्ठान गैलरी",
    "A glimpse of traditional Vedic puja and sacred rituals performed with devotion and care.": "श्रद्धा एवं समर्पण के साथ किए जाने वाले पारंपरिक वैदिक पूजा एवं पवित्र अनुष्ठानों की एक झलक।",
    "Puja Gallery": "पूजा गैलरी",
    "Our Gallery": "हमारी गैलरी",
    "Traditional Puja Ceremony": "पारंपरिक पूजा समारोह",
    "Traditional Puja Items": "पारंपरिक पूजा सामग्री",
    "Puja Samagri and Vedic Rituals": "पूजा सामग्री एवं वैदिक अनुष्ठान",
    "Bhagwat Katha and Vedic Ceremony": "भागवत कथा एवं वैदिक समारोह",
    "Traditional Puja Arrangement": "पारंपरिक पूजा व्यवस्था",

    // FAQ
    "Which puja services can I book?": "मैं कौन-कौन सी पूजा सेवाएँ बुक कर सकता हूँ?",
    "You can book various Vedic puja and ritual services including Mahamrityunjaya Jaap, Mangal Dosh Pooja, Pitra Dosh Poojan, Kaal Sarp Dosh Pooja, Navgraha Shanti, Rudrabhishek and other traditional puja services.": "आप महामृत्युंजय जाप, मंगल दोष पूजा, पितृ दोष पूजन, काल सर्प दोष पूजा, नवग्रह शांति, रुद्राभिषेक तथा अन्य पारंपरिक पूजा सेवाओं सहित विभिन्न वैदिक पूजा एवं अनुष्ठान सेवाएँ बुक कर सकते हैं।",

    "Where are the puja services available?": "पूजा सेवाएँ कहाँ उपलब्ध हैं?",
    "In-person puja services are available in Ujjain and selected cities. Online puja services are available across India through live video calls.": "व्यक्तिगत पूजा सेवाएँ उज्जैन एवं चुनिंदा शहरों में उपलब्ध हैं। ऑनलाइन पूजा सेवाएँ लाइव वीडियो कॉल के माध्यम से पूरे भारत में उपलब्ध हैं।",

    "Can I participate in a puja from my home?": "क्या मैं अपने घर से पूजा में भाग ले सकता हूँ?",
    "Yes. Online puja allows you and your family to participate remotely through a live video call while Pandit Ji performs the rituals according to traditional Vedic practices.": "हाँ। ऑनलाइन पूजा के माध्यम से आप और आपका परिवार लाइव वीडियो कॉल द्वारा दूर से पूजा में भाग ले सकते हैं, जबकि पंडित जी पारंपरिक वैदिक विधियों के अनुसार अनुष्ठान करते हैं।",

    "Who arranges the puja samagri?": "पूजा सामग्री की व्यवस्था कौन करता है?",
    "Pandit Ji arranges the required puja samagri for the puja. Specific arrangements may vary depending on the service.": "पूजा के लिए आवश्यक सामग्री की व्यवस्था पंडित जी करते हैं। विशेष व्यवस्थाएँ सेवा के अनुसार अलग-अलग हो सकती हैं।",

    "How do I book a puja?": "मैं पूजा कैसे बुक कर सकता हूँ?",
    "You can book a puja by calling or WhatsApping us, or by submitting a booking enquiry through the website. Your preferred date and time are confirmed separately by the team.": "आप हमें कॉल या व्हाट्सऐप करके अथवा वेबसाइट के माध्यम से बुकिंग पूछताछ भेजकर पूजा बुक कर सकते हैं। आपकी पसंदीदा तिथि और समय की पुष्टि टीम द्वारा अलग से की जाती है।",

    "How can I know the puja charges?": "मैं पूजा का शुल्क कैसे जान सकता हूँ?",
    "Puja charges depend on the selected service and requirements. Please contact Pandit Ji or the booking team for current pricing.": "पूजा का शुल्क चुनी गई सेवा और आवश्यकताओं पर निर्भर करता है। वर्तमान शुल्क जानने के लिए पंडित जी या बुकिंग टीम से संपर्क करें।",

    // Booking
    "BOOK A PUJA": "पूजा बुक करें",
    "Share your puja requirements and preferred date and time. Our team will contact you to confirm the booking.": "अपनी पूजा की आवश्यकताएँ तथा पसंदीदा तिथि और समय साझा करें। बुकिंग की पुष्टि के लिए हमारी टीम आपसे संपर्क करेगी।",
    "Full Name": "पूरा नाम",
    "Full Name *": "पूरा नाम *",
    "Mobile Number": "मोबाइल नंबर",
    "Mobile Number *": "मोबाइल नंबर *",
    "Puja / Service": "पूजा / सेवा",
    "Puja / Service Required": "पूजा / सेवा आवश्यक",
    "Puja / Service Required *": "पूजा / सेवा आवश्यक *",
    "Select a Puja": "पूजा चुनें",
    "Select a puja or service": "पूजा या सेवा चुनें",
    "Select Puja Service": "पूजा सेवा चुनें",
    "Preferred Date": "पसंदीदा तिथि",
    "Preferred Date *": "पसंदीदा तिथि *",
    "Preferred Time": "पसंदीदा समय",
    "Preferred Time *": "पसंदीदा समय *",
    "Other Puja / Service": "अन्य पूजा / सेवा",
    "Other": "अन्य",
    "Submit Booking Request": "बुकिंग अनुरोध भेजें",
    "Your preferred date and time are subject to confirmation.": "आपकी पसंदीदा तिथि और समय पुष्टि के अधीन हैं।",

    // Contact
    "GET IN TOUCH": "संपर्क करें",
    "Contact Us": "संपर्क करें",
    "For puja bookings, enquiries or any questions, feel free to contact us.": "पूजा बुकिंग, पूछताछ या किसी भी प्रश्न के लिए बेझिझक हमसे संपर्क करें।",
    "Contact Information": "संपर्क जानकारी",
    "Call": "कॉल करें",
    "WhatsApp": "व्हाट्सऐप",
    "Our Location": "हमारा स्थान",
    "In-person puja available in Ujjain and selected cities.": "उज्जैन एवं चुनिंदा शहरों में व्यक्तिगत पूजा उपलब्ध है।",
    "Enquiry Form": "पूछताछ फॉर्म",
    "Send Us a Message": "हमें संदेश भेजें",
    "Share your requirements and preferred date and time. We will contact you to confirm the details.": "अपनी आवश्यकताएँ तथा पसंदीदा तिथि और समय साझा करें। विवरण की पुष्टि के लिए हम आपसे संपर्क करेंगे।",
    "Send us an enquiry": "हमें अपनी पूछताछ भेजें",

    // CTA
    "Ready to Book Your Puja?": "क्या आप अपनी पूजा बुक करने के लिए तैयार हैं?",
    "Connect with Pandit Dinesh Krishn Pradhan for traditional Vedic puja and ritual services in Ujjain and selected cities, or join online from anywhere in India.": "उज्जैन एवं चुनिंदा शहरों में पारंपरिक वैदिक पूजा एवं अनुष्ठान सेवाओं के लिए पंडित दिनेश कृष्ण प्रधान से संपर्क करें, या भारत में कहीं से भी ऑनलाइन जुड़ें।",

    // Footer
    "Brand": "ब्रांड",
    "Traditional Vedic Puja & Ritual Services by Pandit Dinesh Krishn Pradhan.": "पंडित दिनेश कृष्ण प्रधान द्वारा पारंपरिक वैदिक पूजा एवं अनुष्ठान सेवाएँ।",
    "Quick Links": "महत्वपूर्ण लिंक",
    "Booking": "बुकिंग",
    "Contact Us": "संपर्क करें",
    "Privacy Policy": "गोपनीयता नीति",

    // Privacy Policy
    "YOUR PRIVACY MATTERS": "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है",

    "This Privacy Policy explains how Vedic Pooja Ujjain handles information provided by visitors and customers when they use this website or enquire about our services.": "यह गोपनीयता नीति बताती है कि जब आगंतुक और ग्राहक इस वेबसाइट का उपयोग करते हैं या हमारी सेवाओं के बारे में पूछताछ करते हैं, तब वैदिक पूजा उज्जैन द्वारा दी गई जानकारी को कैसे संभाला जाता है।",

    "1. Information We Collect": "1. हम कौन-सी जानकारी एकत्र करते हैं",
    "When you contact us or submit a booking or enquiry, we may receive information such as your name, mobile number, selected puja or service, preferred date and preferred time.": "जब आप हमसे संपर्क करते हैं या बुकिंग अथवा पूछताछ भेजते हैं, तो हमें आपका नाम, मोबाइल नंबर, चुनी गई पूजा या सेवा, पसंदीदा तिथि और पसंदीदा समय जैसी जानकारी प्राप्त हो सकती है।",

    "We only request information that is reasonably necessary to respond to your enquiry, discuss service requirements and arrange a puja.": "हम केवल वही जानकारी मांगते हैं जो आपकी पूछताछ का उत्तर देने, सेवा की आवश्यकताओं पर चर्चा करने और पूजा की व्यवस्था करने के लिए आवश्यक हो।",

    "2. How We Use Your Information": "2. हम आपकी जानकारी का उपयोग कैसे करते हैं",
    "Information provided by you may be used to:": "आपके द्वारा दी गई जानकारी का उपयोग निम्नलिखित के लिए किया जा सकता है:",
    "Respond to your enquiry.": "आपकी पूछताछ का उत्तर देने के लिए।",
    "Discuss and confirm puja requirements.": "पूजा की आवश्यकताओं पर चर्चा और पुष्टि करने के लिए।",
    "Coordinate your preferred date and time.": "आपकी पसंदीदा तिथि और समय का समन्वय करने के लिए।",
    "Communicate with you regarding the requested service.": "अनुरोधित सेवा के संबंध में आपसे संपर्क करने के लिए।",
    "Provide information about our puja and ritual services when relevant to your enquiry.": "आपकी पूछताछ से संबंधित होने पर हमारी पूजा एवं अनुष्ठान सेवाओं की जानकारी प्रदान करने के लिए।",

    "3. WhatsApp and Phone Communication": "3. व्हाट्सऐप और फोन द्वारा संपर्क",
    "Our website provides phone and WhatsApp contact options for enquiries and bookings. When you choose to contact us through these services, your communication is handled through the respective third-party platform.": "हमारी वेबसाइट पूछताछ और बुकिंग के लिए फोन एवं व्हाट्सऐप द्वारा संपर्क करने के विकल्प प्रदान करती है। जब आप इन सेवाओं के माध्यम से हमसे संपर्क करते हैं, तो आपका संचार संबंधित तृतीय-पक्ष प्लेटफ़ॉर्म के माध्यम से संभाला जाता है।",
    "Please review the privacy policies of those platforms for information about how they process your data.": "वे आपके डेटा को कैसे संसाधित करते हैं, इसकी जानकारी के लिए कृपया उन प्लेटफ़ॉर्म की गोपनीयता नीतियों की समीक्षा करें।",

    "4. Information Sharing": "4. जानकारी साझा करना",
    "We do not sell or rent your personal information. Information you provide is used for legitimate communication and service-related purposes.": "हम आपकी व्यक्तिगत जानकारी को बेचते या किराए पर नहीं देते। आपके द्वारा दी गई जानकारी का उपयोग वैध संचार और सेवा संबंधी उद्देश्यों के लिए किया जाता है।",
    "Information may be disclosed where reasonably necessary to comply with applicable law or a valid legal requirement.": "लागू कानून या वैध कानूनी आवश्यकता का पालन करने के लिए उचित रूप से आवश्यक होने पर जानकारी साझा की जा सकती है।",

    "5. Payments": "5. भुगतान",
    "Vedic Pooja Ujjain does not currently process online payments through this website.": "वैदिक पूजा उज्जैन वर्तमान में इस वेबसाइट के माध्यम से ऑनलाइन भुगतान संसाधित नहीं करता है।",
    "Payment arrangements, where applicable, are discussed directly with Pandit Ji.": "जहाँ लागू हो, भुगतान की व्यवस्था पर सीधे पंडित जी के साथ चर्चा की जाती है।",

    "6. Cookies and Website Data": "6. कुकीज़ और वेबसाइट डेटा",
    "This website may use basic technical mechanisms required for normal website operation. We do not intentionally use this website to collect unnecessary personal information.": "यह वेबसाइट सामान्य संचालन के लिए आवश्यक बुनियादी तकनीकी प्रक्रियाओं का उपयोग कर सकती है। हम जानबूझकर इस वेबसाइट का उपयोग अनावश्यक व्यक्तिगत जानकारी एकत्र करने के लिए नहीं करते हैं।",
    "Third-party services or browsers may have their own cookies or data practices, which are governed by their respective policies.": "तृतीय-पक्ष सेवाओं या ब्राउज़र की अपनी कुकीज़ या डेटा संबंधी प्रक्रियाएँ हो सकती हैं, जो उनकी संबंधित नीतियों द्वारा नियंत्रित होती हैं।",

    "7. Data Security": "7. डेटा सुरक्षा",
    "We take reasonable steps to handle information responsibly. However, no method of transmitting information over the internet or storing information electronically can be guaranteed to be completely secure.": "हम जानकारी को जिम्मेदारी से संभालने के लिए उचित कदम उठाते हैं। हालांकि, इंटरनेट पर जानकारी भेजने या इलेक्ट्रॉनिक रूप से संग्रहीत करने की किसी भी विधि को पूरी तरह सुरक्षित होने की गारंटी नहीं दी जा सकती।",

    "8. Data Retention": "8. डेटा बनाए रखना",
    "Information may be retained for as long as reasonably necessary to handle enquiries, bookings, service coordination, record keeping or legal obligations.": "पूछताछ, बुकिंग, सेवा समन्वय, रिकॉर्ड रखने या कानूनी दायित्वों को पूरा करने के लिए आवश्यक उचित अवधि तक जानकारी सुरक्षित रखी जा सकती है।",

    "9. External Links": "9. बाहरी लिंक",
    "Our website may contain links to external services, including WhatsApp. We are not responsible for the privacy practices or content of external websites and services.": "हमारी वेबसाइट में व्हाट्सऐप सहित बाहरी सेवाओं के लिंक हो सकते हैं। बाहरी वेबसाइटों और सेवाओं की गोपनीयता संबंधी प्रक्रियाओं या सामग्री के लिए हम जिम्मेदार नहीं हैं।",

    "10. Your Choices": "10. आपके विकल्प",
    "You may choose not to provide information requested through an enquiry or booking form. However, certain information may be necessary for us to respond to your request or arrange a service.": "आप पूछताछ या बुकिंग फॉर्म के माध्यम से मांगी गई जानकारी प्रदान न करने का विकल्प चुन सकते हैं। हालांकि, आपके अनुरोध का उत्तर देने या सेवा की व्यवस्था करने के लिए कुछ जानकारी आवश्यक हो सकती है।",

    "11. Changes to This Privacy Policy": "11. इस गोपनीयता नीति में परिवर्तन",
    "This Privacy Policy may be updated from time to time to reflect changes in our website, services or applicable requirements. The updated version will be published on this page.": "हमारी वेबसाइट, सेवाओं या लागू आवश्यकताओं में बदलाव को दर्शाने के लिए इस गोपनीयता नीति को समय-समय पर अपडेट किया जा सकता है। अपडेट किया गया संस्करण इसी पृष्ठ पर प्रकाशित किया जाएगा।",

    "12. Contact Us": "12. हमसे संपर्क करें",
    "If you have questions regarding this Privacy Policy or the handling of information provided through the website, you can contact Pandit Ji directly.": "यदि इस गोपनीयता नीति या वेबसाइट के माध्यम से दी गई जानकारी के प्रबंधन के संबंध में आपके कोई प्रश्न हैं, तो आप सीधे पंडित जी से संपर्क कर सकते हैं।",

    "Vedic Pooja Ujjain": "वैदिक पूजा उज्जैन",
    "Ujjain, Madhya Pradesh, India": "उज्जैन, मध्य प्रदेश, भारत",
    "Phone:": "फोन:",

    // Form / UI
    "Your Message": "आपका संदेश",
    "Message": "संदेश",
    "Name": "नाम",
    "Mobile": "मोबाइल",
    "Open navigation menu": "नेविगेशन मेनू खोलें",

    // Language
"English": "English",
"Hindi": "हिंदी",

// Puja Services page
"A traditional Vedic chanting ritual performed with devotion and prescribed विधि.":
    "भक्ति और निर्धारित विधि के अनुसार किया जाने वाला पारंपरिक वैदिक मंत्र जाप।",

"A sacred Shiva puja performed through traditional Vedic rituals and offerings.":
    "पारंपरिक वैदिक विधियों और पूजन सामग्री के साथ की जाने वाली पवित्र शिव पूजा।",

"Traditional puja performed according to Vedic ritual practices for Mangal Dosh.":
    "मंगल दोष के लिए वैदिक अनुष्ठान विधियों के अनुसार की जाने वाली पारंपरिक पूजा।",

"A traditional ritual performed with श्रद्धा and Vedic विधि for Pitra-related observances.":
    "पितृ संबंधी अनुष्ठानों के लिए श्रद्धा और वैदिक विधि से की जाने वाली पारंपरिक पूजा।",

"A traditional Vedic puja performed according to established ritual practices.":
    "प्रचलित अनुष्ठान विधियों के अनुसार की जाने वाली पारंपरिक वैदिक पूजा।",

"Traditional Navgraha puja and ritual observances performed according to Vedic विधि.":
    "वैदिक विधि के अनुसार की जाने वाली पारंपरिक नवग्रह पूजा और अनुष्ठान।",

"Traditional Vedic puja and ritual services performed with devotion, proper विधि and श्रद्धा.":
    "भक्ति, उचित विधि और श्रद्धा के साथ की जाने वाली पारंपरिक वैदिक पूजा एवं अनुष्ठान सेवाएँ।",

"View Details":
    "विवरण देखें",

"View All Services":
    "सभी पूजा सेवाएँ देखें",

"Our Services":
    "हमारी सेवाएँ",

"Puja & Ritual Services":
    "पूजा एवं अनुष्ठान सेवाएँ",

"Gallery":
    "गैलरी",

"Moments of Puja & Devotion":
    "पूजा एवं भक्ति के विशेष क्षण",

"View Full Gallery":
    "पूरी गैलरी देखें"
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
const normalizedText = originalText.replace(/\s+/g, " ");

const translationKey = Object.keys(translations).find(
    key => key.replace(/\s+/g, " ") === normalizedText
);

if (translationKey) {
    node.nodeValue = node.nodeValue.replace(
        originalText,
        translations[translationKey]
    );
}
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