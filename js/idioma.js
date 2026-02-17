// Cargar archivo JSON
async function cargarJSON(ruta) {
    const respuesta = await fetch(ruta);
    return await respuesta.json();
}

async function cambiarIdioma(lang) {
    localStorage.setItem("idioma", lang);

    const textos = await cargarJSON(`../lang/${lang}.json`);

    document.getElementById("title").innerText = textos.title;
    document.getElementById("subtitle").innerText = textos.subtitle;
}

// Detectar idioma guardado
const idiomaGuardado = localStorage.getItem("idioma") || "es";
document.getElementById("lang").value = idiomaGuardado;
cambiarIdioma(idiomaGuardado);

// Evento del selector
document.getElementById("lang").addEventListener("change", (e) => {
    cambiarIdioma(e.target.value);
});
