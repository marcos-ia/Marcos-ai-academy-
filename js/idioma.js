// Textos directamente en el JS (sin JSON)
const textos = {
    es: {
        title: "Bienvenido a Marcos AI Academy",
        subtitle: "Aprende Inteligencia Artificial de forma práctica"
    },
    en: {
        title: "Welcome to Marcos AI Academy",
        subtitle: "Learn Artificial Intelligence in a practical way"
    }
};

function cambiarIdioma(lang) {
    localStorage.setItem("idioma", lang);

    document.getElementById("title").innerText = textos[lang].title;
    document.getElementById("subtitle").innerText = textos[lang].subtitle;
}

// Cargar idioma guardado
const idiomaGuardado = localStorage.getItem("idioma") || "es";
document.getElementById("lang").value = idiomaGuardado;
cambiarIdioma(idiomaGuardado);

// Evento del selector
document.getElementById("lang").addEventListener("change", (e) => {
    cambiarIdioma(e.target.value);
});
