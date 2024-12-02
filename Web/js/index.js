// Translations object with all the text content
const translations = {
    "es": {
        "title": "Limpieza Pro",
        "home": "Inicio",
        "services": "Servicios",
        "contact": "Contacto",
        "documentation": "Documentación",
        "our_services": "Nuestros Servicios",
        "residential_cleaning": "Limpieza Residencial",
        "residential_cleaning_desc": "Mantenemos tu hogar impecable y acogedor.",
        "commercial_cleaning": "Limpieza Comercial",
        "commercial_cleaning_desc": "Servicios de limpieza para oficinas y negocios.",
        "specialized_cleaning": "Limpieza Especializada",
        "specialized_cleaning_desc": "Limpieza profunda para ocasiones especiales.",
        "responsible_cleaning": "Limpieza Responsable",
        "responsible_cleaning_desc": "Nos encargaremos de que quedes satisfecho.",
        "contact_us": "Contáctanos",
        "name_placeholder": "Nombre",
        "email_placeholder": "Email",
        "message_placeholder": "Mensaje",
        "send": "Enviar",
        "footer": "&copy; 2024 LimpiezaPro by Fermín. Todos los derechos reservados."
    },
    "en": {
        "title": "Clean Pro",
        "home": "Home",
        "services": "Services",
        "contact": "Contact",
        "documentation": "Documentation",
        "our_services": "Our Services",
        "residential_cleaning": "Residential Cleaning",
        "residential_cleaning_desc": "We keep your home spotless and welcoming.",
        "commercial_cleaning": "Commercial Cleaning",
        "commercial_cleaning_desc": "Cleaning services for offices and businesses.",
        "specialized_cleaning": "Specialized Cleaning",
        "specialized_cleaning_desc": "Deep cleaning for special occasions.",
        "responsible_cleaning": "Responsible Cleaning",
        "responsible_cleaning_desc": "We ensure your satisfaction.",
        "contact_us": "Contact Us",
        "name_placeholder": "Name",
        "email_placeholder": "Email",
        "message_placeholder": "Message",
        "send": "Send",
        "footer": "&copy; 2024 CleanPro by Fermín. All rights reserved."
    }
};

// Carousel functionality
class Carousel {
    constructor() {
        this.carousel = document.getElementById('carousel');
        if (!this.carousel) return;
        
        this.images = this.carousel.getElementsByTagName('img');
        this.currentImage = 0;
        this.startCarousel();
    }

    changeImage() {
        if (!this.images.length) return;
        this.images[this.currentImage].classList.remove('active');
        this.currentImage = (this.currentImage + 1) % this.images.length;
        this.images[this.currentImage].classList.add('active');
    }

    startCarousel() {
        if (this.images.length > 0) {
            setInterval(() => this.changeImage(), 5000);
        }
    }
}

// Contact form functionality
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        if (this.form) {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre')?.value;
        const email = document.getElementById('email')?.value;
        const mensaje = document.getElementById('mensaje')?.value;

        if (nombre && email && mensaje) {
            alert('Gracias por contactarnos. Le responderemos pronto.');
            this.form.reset();
        } else {
            alert('Por favor, rellene todos los campos');
        }
    }
}

// Theme manager functionality
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        if (this.themeToggle) {
            this.setupEventListeners();
            this.loadSavedTheme();
        }
    }

    setupEventListeners() {
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        this.themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            this.toggleTheme();
        }
    }
}

// Language manager functionality
class LanguageManager {
    constructor() {
        this.languageSelector = document.getElementById('language-selector');
        if (!this.languageSelector) return;

        // Detectar y aplicar el idioma al cargar la página
        this.detectAndSetLanguage();

        // Configurar el evento de cambio en el selector
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.languageSelector.addEventListener('change', (event) => {
            const selectedLanguage = event.target.value;
            this.changeLanguage(selectedLanguage);
            localStorage.setItem('language', selectedLanguage); // Guardar el idioma seleccionado
        });
    }

    detectAndSetLanguage() {
        const savedLanguage = localStorage.getItem('language'); // Obtener idioma guardado
        const languageToApply = savedLanguage || this.detectBrowserLanguage(); // Usar guardado o detectar del navegador

        this.changeLanguage(languageToApply);
        this.languageSelector.value = languageToApply; // Sincronizar el selector con el idioma aplicado
    }

    detectBrowserLanguage() {
        const browserLanguages = navigator.languages || [navigator.language || 'es'];
        for (const lang of browserLanguages) {
            const baseLang = lang.split('-')[0].toLowerCase();
            if (translations[baseLang]) {
                return baseLang;
            }
        }
        return 'es'; // Idioma predeterminado
    }

    changeLanguage(lang) {
        if (!translations[lang]) return;

        const elements = {
            title: document.getElementById('title'),
            titleHeader: document.getElementById('title-header'),
            home: document.getElementById('home'),
            services: document.getElementById('services'),
            contact: document.getElementById('contact'),
            documentation: document.getElementById('documentation'),
            ourServices: document.getElementById('our-services'),
            residentialCleaning: document.getElementById('residential-cleaning'),
            residentialCleaningDesc: document.getElementById('residential-cleaning-desc'),
            commercialCleaning: document.getElementById('commercial-cleaning'),
            commercialCleaningDesc: document.getElementById('commercial-cleaning-desc'),
            specializedCleaning: document.getElementById('specialized-cleaning'),
            specializedCleaningDesc: document.getElementById('specialized-cleaning-desc'),
            responsibleCleaning: document.getElementById('responsible-cleaning'),
            responsibleCleaningDesc: document.getElementById('responsible-cleaning-desc'),
            contactUs: document.getElementById('contact-us'),
            send: document.getElementById('send'),
            footer: document.getElementById('footer'),
            nombre: document.getElementById('nombre'),
            email: document.getElementById('email'),
            mensaje: document.getElementById('mensaje')
        };

        if (elements.title) elements.title.textContent = translations[lang].title;
        if (elements.titleHeader) elements.titleHeader.textContent = translations[lang].title;
        if (elements.home) elements.home.textContent = translations[lang].home;
        if (elements.services) elements.services.textContent = translations[lang].services;
        if (elements.contact) elements.contact.textContent = translations[lang].contact;
        if (elements.documentation) elements.documentation.textContent = translations[lang].documentation;
        if (elements.ourServices) elements.ourServices.textContent = translations[lang].our_services;
        if (elements.residentialCleaning) elements.residentialCleaning.textContent = translations[lang].residential_cleaning;
        if (elements.residentialCleaningDesc) elements.residentialCleaningDesc.textContent = translations[lang].residential_cleaning_desc;
        if (elements.commercialCleaning) elements.commercialCleaning.textContent = translations[lang].commercial_cleaning;
        if (elements.commercialCleaningDesc) elements.commercialCleaningDesc.textContent = translations[lang].commercial_cleaning_desc;
        if (elements.specializedCleaning) elements.specializedCleaning.textContent = translations[lang].specialized_cleaning;
        if (elements.specializedCleaningDesc) elements.specializedCleaningDesc.textContent = translations[lang].specialized_cleaning_desc;
        if (elements.responsibleCleaning) elements.responsibleCleaning.textContent = translations[lang].responsible_cleaning;
        if (elements.responsibleCleaningDesc) elements.responsibleCleaningDesc.textContent = translations[lang].responsible_cleaning_desc;
        if (elements.contactUs) elements.contactUs.textContent = translations[lang].contact_us;
        if (elements.send) elements.send.textContent = translations[lang].send;
        if (elements.footer) elements.footer.innerHTML = translations[lang].footer;

        // Actualizar los placeholders
        if (elements.nombre) elements.nombre.placeholder = translations[lang].name_placeholder;
        if (elements.email) elements.email.placeholder = translations[lang].email_placeholder;
        if (elements.mensaje) elements.mensaje.placeholder = translations[lang].message_placeholder;
    }
}


// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
    new ContactForm();
    new ThemeManager();
    new LanguageManager();
});

console.log("Idiomas del navegador:", navigator.languages);
console.log("Idioma principal del navegador:", navigator.language);
