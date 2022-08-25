/*
 * Reto #24
 * ITERATION MASTER
 * Fecha publicación enunciado: 13/06/22
 * Fecha publicación resolución: 20/06/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno). ¿De cuántas maneras eres capaz de hacerlo? Crea el código para cada una de ellas.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

for (let iteration = 1; iteration <= 100; iteration++) {
    console.log(iteration)
}

let iteratorDoWhile = 1;
do {
    console.log(iteratorDoWhile++);
} while (iteratorDoWhile <= 100);

let iteratorWhile = 1;
while (iteratorWhile <= 100) {
    console.log(iteratorWhile++)
}

for (const iter in Array(100).fill().map((v, i) => i)) {
    console.log(Number.parseInt(iter) + 1);
}

for (const iter of Array(100).fill().map((v, i) => i)) {
    console.log(Number.parseInt(iter) + 1)
}

Array(100).fill().map((v, i) => i).forEach(n => {
    console.log(Number.parseInt(iter) + 1)
});

function recursiveCount(start, end, ascendete) {
    if (ascendete) {
        if (start === end) return console.log(start);

        console.log(start);
        return recursiveCount(++start, end, true);
    } else {
        if (end === start) return console.log(end);

        console.log(end);
        return recursiveCount(start, --end, false);
    }
}

recursiveCount(1, 100, true)
recursiveCount(1, 100, false)