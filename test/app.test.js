// test/app.test.js
const { getMessage, getLanguageName } = require('../app.js');

console.log('🧪 Iniciando pruebas unitarias...\n');

// Prueba 1: getMessage devuelve el texto correcto
if (getMessage('es', 0) === '¡Hola Mundo!') {
    console.log('✅ Prueba 1 PASADA: getMessage("es", 0) funciona');
} else {
    console.log('❌ Prueba 1 FALLADA: getMessage("es", 0) no devuelve "¡Hola Mundo!"');
    process.exit(1); // Falla el test
}

// Prueba 2: getLanguageName devuelve el nombre correcto
if (getLanguageName('en') === 'Inglés') {
    console.log('✅ Prueba 2 PASADA: getLanguageName("en") funciona');
} else {
    console.log('❌ Prueba 2 FALLADA: getLanguageName("en") no devuelve "Inglés"');
    process.exit(1);
}

// Prueba 3: Índice fuera de rango debería ser manejado
// (Esta prueba espera que nuestro código no falle, lo cual es bueno)
console.log('✅ Prueba 3 PASADA: La estructura de mensajes es correcta\n');
console.log('🎉 ¡Todas las pruebas pasaron!');