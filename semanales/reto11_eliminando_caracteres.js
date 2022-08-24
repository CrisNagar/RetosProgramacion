/*
 * Reto #11
 * ELIMINANDO CARACTERES
 * Fecha publicación enunciado: 14/03/22
 * Fecha publicación resolución: 21/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function switchOccurrences(str1, str2) {
    let out1 = '';
    for (const l of str1) {
        if (str2.toLowerCase().indexOf(l.toLowerCase()) === -1) {
            out1 += l;
        }
    }

    let out2 = '';
    for (const l of str2) {
        if (str1.toLowerCase().indexOf(l.toLowerCase()) === -1) {
            out2 += l;
        }
    }

    console.log(str1)
    console.log(str2)
}

switchOccurrences("brais", "moure")
switchOccurrences("Me gusta Java", "Me gusta Kotlin")
switchOccurrences("Usa el canal de nuestro discord (https://mouredev.com/discord) \"\uD83D\uDD01reto-semanal\" para preguntas, dudas o prestar ayuda a la comunidad",
    "Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.")