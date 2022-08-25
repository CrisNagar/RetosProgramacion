/*
 * Reto #25
 * PIEDRA, PAPEL, TIJERA
 * Fecha publicación enunciado: 20/06/22
 * Fecha publicación resolución: 27/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
const JUGADAS = {
    R: 'Piedra',
    P: 'Papel',
    S: 'Tijera'
}

function calculateWinner(jugadas) {
    let jugador1 = 0;
    let jugador2 = 0;

    jugadas.forEach(move => {
        const move1 = move[0]
        const move2 = move[1]

        if (move1 === move2) return 'TIE';

        switch (move1) {
            case JUGADAS.R:
                if (move2 === JUGADAS.S) {
                    jugador1++;
                } else {
                    jugador2++;
                }
                break;
            case JUGADAS.P:
                if (move2 === JUGADAS.R) {
                    jugador1++;
                } else {
                    jugador2++;
                }
                break;
            case JUGADAS.S:
                if (move2 === JUGADAS.P) {
                    jugador1++;
                } else {
                    jugador2++;
                }
                break;
            default:
                jugador2++;
        }
    });

    if (jugador1 > jugador2) {
        return 'Player 1'
    } else if (jugador2 > jugador1) {
        return 'Player 2'
    } else {
        return 'Tie'
    }
}

console.log(calculateWinner([
    [JUGADAS.R, JUGADAS.R]
]))

console.log(calculateWinner([
    [JUGADAS.R, JUGADAS.S]
]))

console.log(calculateWinner([
    [JUGADAS.P, JUGADAS.S]
]))

console.log(calculateWinner([
    [JUGADAS.R, JUGADAS.R],
    [JUGADAS.S, JUGADAS.S],
    [JUGADAS.P, JUGADAS.P]]))

console.log(calculateWinner([
    [JUGADAS.R, JUGADAS.S],
    [JUGADAS.S, JUGADAS.P],
    [JUGADAS.S, JUGADAS.R]]))

console.log(calculateWinner([
    [JUGADAS.R, JUGADAS.P],
    [JUGADAS.S, JUGADAS.R],
    [JUGADAS.P, JUGADAS.S]]))