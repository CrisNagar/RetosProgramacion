/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

// ALGORITMO LA CRIBA DE ERATOSTENES

// LISTAMOS TODOS LOS "NUMEROS" AYUDANDONOS DE LOS INDICES DE LOS ARRAY
// SABEMOS QUE 0 y 1 NO SON PRIMOS, POR LO TANTO LOS INICIAMOS A FALSE
// EL RESTO SE TOMAN COMO PRIMOS HATA QUE SE EVALUEN
const PRIMOS = Array(100).fill().map((v, i) => {
    if (i === 0 || i === 1) return false;
    return true;
});

// ARRAY DONDE GUARDAREMOS LOS NUMEROS PRIMOS EVALUADOS
let result = [];

// SE TOMA EL PRIMER NUMERO, EMPEZANDO POR EL 2
// SE "TACHAN" TODOS SUS MULTIPLOS
// SI EL CUADRADO DEL SIGUIENTE NUMERO NO EVALUADO ES MENOR QUE EL MAXIMO, SE REPITEN LOS 2 PASOS ANTERIORES
for (let i = 2; i <= PRIMOS.length; i++) {
    if (Math.sqrt(i) < PRIMOS.length) {
        for (let j = 2; i * j <= PRIMOS.length; j++) {
            PRIMOS[i * j] = false;
        }
    }
}

// GUARDAMOS APARTE LOS NUMEROS "MARCADOS" COMO PRIMOS
PRIMOS.forEach((value, index) => {
    if (value === true) {
        result.push(index)
    };
});

console.log(result);