/*
 * Reto #17
 * LA CARRERA DE OBSTÁCULOS
 * Fecha publicación enunciado: 25/04/22
 * Fecha publicación resolución: 02/05/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo) o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla) será correcto y no
 *        variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

interface Actions {
    JUMP: string
    RUN: string
};

const AtletaActions: Actions = {
    JUMP: '|',
    RUN: '_'
}

/**
 * Comprueba la accion realizada en cada tramo de pista
 * 
 * @param actions Array<String> Acciones del atletra
 * @param pista String Pista que recorre el atleta
 * @returns TRUE Si las acciones son correctas en cada tramo | FALSE si no corresponden
 */
function checkCarreraObstaculos(actions: Array<string>, pista: string): boolean {
    let isOK: boolean = true;
    for (let index: number = 0; index < pista.length; index++) {
        const element: string = pista[index];

        if (actions[index] !== element) isOK = false;
    }

    return isOK;
}

console.log(checkCarreraObstaculos([AtletaActions.RUN, AtletaActions.JUMP, AtletaActions.RUN, AtletaActions.JUMP, AtletaActions.RUN], "_|_|_"))
console.log(checkCarreraObstaculos([AtletaActions.RUN, AtletaActions.RUN, AtletaActions.RUN, AtletaActions.JUMP, AtletaActions.RUN], "_|_|_"))
console.log(checkCarreraObstaculos([AtletaActions.RUN, AtletaActions.RUN, AtletaActions.JUMP, AtletaActions.JUMP, AtletaActions.RUN], "_|_|_"))
console.log(checkCarreraObstaculos([AtletaActions.RUN, AtletaActions.RUN, AtletaActions.JUMP, AtletaActions.JUMP, AtletaActions.RUN], "_|_|_|_"))
console.log(checkCarreraObstaculos([AtletaActions.RUN, AtletaActions.JUMP, AtletaActions.RUN, AtletaActions.JUMP], "_|_|_"))
console.log(checkCarreraObstaculos([AtletaActions.RUN, AtletaActions.JUMP, AtletaActions.RUN, AtletaActions.JUMP, AtletaActions.RUN, AtletaActions.JUMP, AtletaActions.RUN], "_|_|_"))
console.log(checkCarreraObstaculos([AtletaActions.JUMP, AtletaActions.JUMP, AtletaActions.JUMP, AtletaActions.JUMP, AtletaActions.JUMP], "|||||"))
console.log(checkCarreraObstaculos([AtletaActions.JUMP, AtletaActions.JUMP, AtletaActions.JUMP, AtletaActions.JUMP, AtletaActions.JUMP], "||?||"))
