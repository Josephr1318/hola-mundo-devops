// app.js - Lógica de la aplicación
const messages = {
    es: ["¡Hola Mundo!", "¡Bienvenidos!", "Hola desde DevOps"],
    en: ["Hello World!", "Welcome!", "Hello from DevOps"]
};

function getMessage(lang, index) {
    return messages[lang][index];
}

function getLanguageName(code) {
    const names = { es: 'Español', en: 'Inglés' };
    return names[code];
}

// Exportar para las pruebas (solo para Node.js/entorno de test)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getMessage, getLanguageName };
}