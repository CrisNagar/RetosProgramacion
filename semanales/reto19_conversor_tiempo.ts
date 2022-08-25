/*
 * Reto #19
 * CONVERSOR TIEMPO
 * Fecha publicación enunciado: 09/05/22
 * Fecha publicación resolución: 16/05/22
 * Dificultad: FACIL
 *
 * Enunciado: Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const dayToMilisegundos = (n: number): number => {
    return n * (1000 * 60 * 60 * 24);
}

const hourToMilisegundos = (n: number): number => {
    return n * (1000 * 60 * 60);
}

const minutesToMilisegundos = (n: number): number => {
    return n * (1000 * 60);
}

const secondsToMilisegundos = (n: number): number => {
    return n * (1000);
}

function toMisisegundos(dias: number, horas: number, minutos: number, segundos: number): number {
    if (!Number.isInteger(dias)) {
        throw "Dias debe ser un numero entero"
    }

    if (!Number.isInteger(horas)) {
        throw "Horas debe ser un numero entero"
    }

    if (!Number.isInteger(minutos)) {
        throw "Minutos debe ser un numero entero"
    }

    if (!Number.isInteger(segundos)) {
        throw "Segundos debe ser un numero entero"
    }

    return dayToMilisegundos(dias) + hourToMilisegundos(horas) + minutesToMilisegundos(minutos) + secondsToMilisegundos(segundos);
}

console.log(toMisisegundos(0, 0, 0, 10))
console.log(toMisisegundos(2, 5, -45, 10))
console.log(toMisisegundos(2000000000, 5, 45, 10))