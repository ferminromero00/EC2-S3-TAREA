// Carrusel de imágenes
const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
let currentImage = 0;

/**
 * Cambia la imagen actual del carrusel a la siguiente.
 * Remueve la clase 'active' de la imagen actual y la aplica a la siguiente imagen.
 */
function changeImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}

// Cambia la imagen del carrusel cada 5 segundos
setInterval(changeImage, 5000);

// Formulario de contacto
const form = document.getElementById('contact-form');

/**
 * Maneja el envío del formulario de contacto.
 * Verifica que todos los campos estén llenos antes de mostrar un mensaje de confirmación
 * o una advertencia.
 * 
 * @param {Event} e - El evento de envío del formulario que recoge datos.
 */
function handleFormSubmit(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert('Gracias por contactarnos. Le responderemos pronto.');
        form.reset();
    } else {
        alert('Por favor, rellene todos los campos');
    }
}

// Añade el listener de envío al formulario de contacto
form.addEventListener('submit', handleFormSubmit);

// Cambio de tema
const themeToggle = document.getElementById('theme-toggle');

/**
 * Alterna entre el tema claro y oscuro de la página.
 * Cambia el texto del botón según el tema actual.
 */
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';

    // Guardar la preferencia del tema en localStorage
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Añade el listener de clic para cambiar el tema
themeToggle.addEventListener('click', toggleTheme);

// Función para cambiar el idioma (puedes agregar más lógica aquí según sea necesario)
const languageSelector = document.getElementById("language-selector");

// JSON con los textos en varios idiomas
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


/**
 * Cambia el idioma de la página.
 * 
 * @param {string} lang - El código del idioma seleccionado.
 */
function changeLanguage(lang) {
    // Seleccionar los elementos por sus IDs
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("title-header").textContent = translations[lang].title;
    document.getElementById("home").textContent = translations[lang].home;
    document.getElementById("services").textContent = translations[lang].services;
    document.getElementById("contact").textContent = translations[lang].contact;
    document.getElementById("documentation").textContent = translations[lang].documentation;
    document.getElementById("our-services").textContent = translations[lang].our_services;
    document.getElementById("residential-cleaning").textContent = translations[lang].residential_cleaning;
    document.getElementById("residential-cleaning-desc").textContent = translations[lang].residential_cleaning_desc;
    document.getElementById("commercial-cleaning").textContent = translations[lang].commercial_cleaning;
    document.getElementById("commercial-cleaning-desc").textContent = translations[lang].commercial_cleaning_desc;
    document.getElementById("specialized-cleaning").textContent = translations[lang].specialized_cleaning;
    document.getElementById("specialized-cleaning-desc").textContent = translations[lang].specialized_cleaning_desc;
    document.getElementById("responsible-cleaning").textContent = translations[lang].responsible_cleaning;
    document.getElementById("responsible-cleaning-desc").textContent = translations[lang].responsible_cleaning_desc;
    document.getElementById("contact-us").textContent = translations[lang].contact_us;
    document.getElementById("nombre").placeholder = translations[lang].name_placeholder;
    document.getElementById("email").placeholder = translations[lang].email_placeholder;
    document.getElementById("mensaje").placeholder = translations[lang].message_placeholder;
    document.getElementById("send").textContent = translations[lang].send;
    document.getElementById("footer").innerHTML = translations[lang].footer;
}

// Detectar el cambio en el selector de idioma
document.getElementById("language-selector").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);  // Guardamos el idioma en localStorage
});

// Establecer el idioma predeterminado al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "es"; // Leer el idioma guardado o español por defecto
    changeLanguage(savedLanguage);

    // Establecer el selector de idioma en la opción correcta
    document.getElementById("language-selector").value = savedLanguage;
});

// Aplicar el tema guardado desde localStorage al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light"; // Tema predeterminado: claro
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        document.getElementById("theme-toggle").textContent = "☀️"; // Cambiar el icono a sol
    }
});
