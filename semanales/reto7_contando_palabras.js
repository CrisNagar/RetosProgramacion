/*
 * Reto #7
 * CONTANDO PALABRAS
 * Fecha publicación enunciado: 14/02/22
 * Fecha publicación resolución: 21/02/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

// COMPROBAR QUE SOLO TIENE LETRAS ENTRE A-Z a-z
const isWord = (s) => {
    return /^[A-Za-z]\w*$/.test(s);
}

function countWords(string) {
    if (typeof string !== 'string') return 'Debe ser una cadena de texto';
    
    const splitString = string.split(' ');
    let objCount = new Object();
    for (let i = 0; i < splitString.length; i++) {
        // CONVERTIR CADA PALABRA EN MINUSCULAS
        // ELIMINAR TODOS LOS CARACTERES QUE NO SEAN UNA LETRA
        const lowerValue = splitString[i].toLowerCase().replace(/[^A-Za-z]*/g, '');        
        if (isWord(lowerValue)) {
            if (objCount.hasOwnProperty(lowerValue)) {
                objCount[lowerValue]++;
            } else {
                objCount[lowerValue] = 1;
            }

        }
    }

    return objCount;
}

const wordsCount = countWords("Hola, mi nombre es brais. Mi nombre completo es Brais Moure (MoureDev).");
for (const word in wordsCount) {
    if (Object.hasOwnProperty.call(wordsCount, word)) {
        const count = wordsCount[word];
        console.log(`La palabra ${word.toUpperCase()} se repite ${count} ${count > 1 ? 'veces' : 'vez'}`);
    }
}

