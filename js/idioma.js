const textos = {
    es: {
        page_title: "Marcos AI Academy",

        menu_home: "Inicio",
        menu_courses: "Cursos",
        menu_about: "Sobre mí",
        menu_contact: "Contacto",

        title: "Bienvenido a Marcos AI Academy",
        subtitle: "Aprende Inteligencia Artificial de forma práctica",

        about_title: "Sobre mí",
        about_text: "Soy Marcos, creador de Marcos AI Academy. Enseño IA de forma clara y práctica.",

        courses_title: "Cursos disponibles",
        courses_intro: "Aquí tienes los cursos que ofrecemos:",

        course1_title: "Curso de Inteligencia Artificial",
        course1_desc: "Aprende los fundamentos de la IA desde cero.",

        course2_title: "Curso de Machine Learning",
        course2_desc: "Modelos, algoritmos y práctica real.",

        contact_title: "Contacto",
        contact_text: "Puedes ponerte en contacto conmigo a través del siguiente correo:"
    },

    en: {
        page_title: "Marcos AI Academy",

        menu_home: "Home",
        menu_courses: "Courses",
        menu_about: "About me",
        menu_contact: "Contact",

        title: "Welcome to Marcos AI Academy",
        subtitle: "Learn Artificial Intelligence in a practical way",

        about_title: "About me",
        about_text: "I am Marcos, creator of Marcos AI Academy. I teach AI in a clear and practical way.",

        courses_title: "Available courses",
        courses_intro: "Here are the courses we offer:",

        course1_title: "Artificial Intelligence Course",
        course1_desc: "Learn the fundamentals of AI from scratch.",

        course2_title: "Machine Learning Course",
        course2_desc: "Models, algorithms and real practice.",

        contact_title: "Contact",
        contact_text: "You can contact me through the following email:"
    }
};

function cambiarIdioma(lang) {
    localStorage.setItem("idioma", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerText = textos[lang][key];
    });

    if (document.getElementById("title")) {
        document.getElementById("title").innerText = textos[lang].title;
    }
    if (document.getElementById("subtitle")) {
        document.getElementById("subtitle").innerText = textos[lang].subtitle;
    }
}

const idiomaGuardado = localStorage.getItem("idioma") || "es";
document.getElementById("lang").value = idiomaGuardado;
cambiarIdioma(idiomaGuardado);

document.getElementById("lang").addEventListener("change", (e) => {
    cambiarIdioma(e.target.value);
});
