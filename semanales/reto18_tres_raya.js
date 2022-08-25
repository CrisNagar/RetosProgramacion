/*
 * Reto #18
 * TRES EN RAYA
 * Fecha publicación enunciado: 02/05/22
 * Fecha publicación resolución: 09/05/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta. O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const FICHAS = {
    X: 'x',
    O: 'o',
    EMPTY: ''
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // SI HAY MAS DE 9 error
    if (squares.length < 9) return null;

    // SI LA DIFERENCIA ES DE MAS DE 1 
    // SIGNIFICA QUE ALGUIEN HA PUESTO UNA FICHA EXTRA
    const x = squares.find((v) => v === FICHAS.X)
    const o = squares.find((v) => v === FICHAS.O)
    const diff = (x > o) ? x - o : o - x;
    if (diff > 1) return null;

    // COMPROBAMOS LAS COMBINACIONES GANADORAS
    // SI UN JUGADOR TIENE UNA COMB. GANADORA SE MODIFICA SU BOOLENO A TRUE
    const ganadorX = false;
    const ganadorO = false;
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] !== FICHAS.EMPTY && squares[a] === squares[b] && squares[a] === squares[c]) {
            if (squares[a] === FICHAS.X) {
                ganadorX = true;
            } else {
                ganadorO = true;
            }
        }
    }

    if (ganadorX && ganadorO) {
        return 'EMPATE';
    } else if (ganadorX) {
        return 'X'
    } else if (ganadorO) {
        return 'O'
    } else {
        return null;
    }
}

console.log(
    calculateWinner([
        FICHAS.X, FICHAS.O, FICHAS.X,
        FICHAS.O, FICHAS.X, FICHAS.O,
        FICHAS.O, FICHAS.O, FICHAS.X
    ])
)

console.log(
    calculateWinner([
        FICHAS.EMPTY, FICHAS.O, FICHAS.X,
        FICHAS.EMPTY, FICHAS.X, FICHAS.O,
        FICHAS.EMPTY, FICHAS.O, FICHAS.X
    ])
)

console.log(
    calculateWinner([
        FICHAS.O, FICHAS.O, FICHAS.O,
        FICHAS.O, FICHAS.X, FICHAS.X,
        FICHAS.O, FICHAS.X, FICHAS.X
    ])
)

console.log(
    calculateWinner([
        FICHAS.X, FICHAS.O, FICHAS.X,
        FICHAS.X, FICHAS.X, FICHAS.O,
        FICHAS.X, FICHAS.X, FICHAS.X
    ])
)

console.log(
    calculateWinner([
        FICHAS.X, FICHAS.O, FICHAS.O,
        FICHAS.X, FICHAS.X, FICHAS.O,
        FICHAS.X, FICHAS.X, FICHAS.O
    ])
)