export default class Rules {
    static COLUMNS = 7;
    static ROWS = 6;
    static PLAYERS = {
        RED: 'red',
        YELLOW: 'yellow'
    }

    static WINNERS_MOVES = [
        /* COMBINACIONES HORIZONTALES */
        [35, 36, 37, 38],
        [36, 37, 38, 39],
        [37, 38, 39, 40],
        [38, 39, 40, 41],

        [28, 29, 30, 31],
        [29, 30, 31, 32],
        [30, 31, 32, 33],
        [31, 32, 33, 34],

        [21, 22, 23, 24],
        [22, 23, 24, 25],
        [23, 24, 25, 26],
        [24, 25, 26, 27],

        [14, 15, 16, 17],
        [15, 16, 17, 18],
        [16, 17, 18, 19],
        [17, 18, 19, 20],

        [7, 8, 9, 10],
        [8, 9, 10, 11],
        [9, 10, 11, 12],
        [10, 11, 12, 13],

        [0, 1, 2, 3],
        [1, 2, 3, 4],
        [2, 3, 4, 5],
        [3, 4, 5, 6],

        /* COMBINACIONES VERTICALES */
        [35, 28, 21, 14],
        [28, 21, 14, 7],
        [21, 14, 7, 0],

        [36, 29, 22, 15],
        [29, 22, 15, 8],
        [22, 15, 8, 1],

        [37, 30, 23, 16],
        [30, 23, 16, 9],
        [23, 16, 9, 2],

        [38, 31, 24, 17],
        [31, 24, 17, 10],
        [24, 17, 10, 3],

        [39, 32, 25, 18],
        [32, 25, 18, 11],
        [25, 18, 11, 4],

        [40, 33, 26, 19],
        [33, 26, 19, 12],
        [26, 19, 12, 5],

        [41, 34, 27, 20],
        [34, 27, 20, 13],
        [27, 20, 13, 6],

        /* COMBINACIONES DIAGONALES */
        [41, 33, 25, 17],
        [40, 32, 24, 16],
        [39, 31, 23, 15],
        [38, 30, 22, 24],

        [38, 32, 26, 20],
        [37, 31, 27, 19],
        [36, 30, 26, 18],
        [35, 29, 25, 17],

        [34, 26, 18, 10],
        [33, 25, 17, 9],
        [32, 24, 16, 8],
        [31, 23, 15, 7],

        [31, 25, 19, 13],
        [30, 24, 18, 12],
        [29, 23, 17, 11],
        [28, 22, 16, 10],

        [27, 19, 11, 3],
        [26, 18, 10, 2],
        [25, 17, 9, 1],
        [24, 16, 8, 0],

        [24, 18, 12, 6],
        [23, 17, 11, 5],
        [22, 16, 10, 4],
        [21, 15, 9, 3],
    ];

    static LINES = [
        [0, 1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12, 13],
        [14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27],
        [28, 29, 30, 31, 32, 33, 34],
        [35, 36, 37, 38, 39, 40, 41],
    ];

    static nextPlayer(currentPlayer) {
        return currentPlayer === Rules.PLAYERS.RED ? Rules.PLAYERS.YELLOW : Rules.PLAYERS.RED;
    }

    static checkPosition(tokens, position) {
        let nextPosition = position;
        linesLoop: for (let linea = 0; linea < Rules.LINES.length; linea++) {
            for (const hueco of Rules.LINES[linea]) {
                if (hueco === nextPosition) {
                    if (tokens[hueco] === null) {
                        for (const limit of Rules.LINES[Rules.LINES.length - 1]) {
                            if (nextPosition < limit) nextPosition += 7;
                            break;
                        }
                        continue linesLoop;
                    } else {
                        nextPosition -= 7;
                        break linesLoop;
                    }
                }
            }
        }

        console.log(nextPosition);
        return nextPosition;
    }

    static calculateWinner(tokens) {
        for (let i = 0; i < Rules.WINNERS_MOVES.length; i++) {
            const [a, b, c, d] = Rules.WINNERS_MOVES[i];
            if (null !== tokens[a] && tokens[a] === tokens[b] && tokens[a] === tokens[c] && tokens[a] === tokens[d]) {
                return tokens[a];
            }
        }
        return null;
    }
}