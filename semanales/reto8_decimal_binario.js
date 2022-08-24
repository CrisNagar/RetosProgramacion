/*
 * Reto #8
 * DECIMAL A BINARIO
 * Fecha publicación enunciado: 18/02/22
 * Fecha publicación resolución: 02/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

// NUMERO A EVALUAR
const decimal = 12;

// ARRAY CON 100 NUMEROS
const RANGE = Array(101).fill().map((v, i) => {
    return i;
});

// OBTENER EL EXPONENTE MAX AL DECIMAL SIN PASARSE
const getExponente = (n) => {
    let exponente = 0;
    for (const i of RANGE) {
        if (Math.pow(2, i) <= n) {
            exponente = i;
        }
    }
    
    return exponente;
}

// CONVERSION A BINARIO
const getBinario = (n) => {
    let bin = [];
    let tempN = n;
    for(let i = 0; i <= getExponente(n); i++) {
        bin.push(tempN % 2 === 0 ? 0 : 1);
        tempN = Math.floor(tempN / 2);
    }

    return bin.reverse().join("");
}

console.log(getBinario(decimal));