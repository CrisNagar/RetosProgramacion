/*
 * Reto #14
 * ¿ES UN NÚMERO DE ARMSTRONG?
 * Fecha publicación enunciado: 04/04/22
 * Fecha publicación resolución: 11/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe una función que calcule si un número dado es un número de Amstrong (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información al respecto.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function isAmstrongNum(num) {
    if (num < 0) return false;

    const numToString = num.toString();
    const numLength = numToString.length;

    let calc = 0;
    for (const l of numToString) {
        calc += Math.pow(Number.parseInt(l, 10), numLength)
    }

    return calc === num;
}


console.log(`El numero 371 ${isAmstrongNum(371) ? 'es' : 'no es'} amstrong`)
console.log(`El numero -371 ${isAmstrongNum(-371) ? 'es ' : 'no es'} amstrong`)
console.log(`El numero 372 ${isAmstrongNum(372) ? 'es' : 'no es'} amstrong`)
console.log(`El numero 0 ${isAmstrongNum(0) ? 'es' : 'no es'} amstrong`)