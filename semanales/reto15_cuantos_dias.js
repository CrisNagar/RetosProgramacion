/*
 * Reto #15
 * ¿CUÁNTOS DÍAS?
 * Fecha publicación enunciado: 11/04/22
 * Fecha publicación resolución: 18/04/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */


function checkFormat(str, format) {
    return format.test(str);
}
/**
 * 
 * 
 * @param {String} dateString1 fecha en texto con el formato dd/MM/yyyy
 * @param {String} dateString2 fecha en texto con el formato dd/MM/yyyy
 */
function diffDaysInteger(dateString1, dateString2) {
    const pattern = /(\d{2}).(\d{2}).(\d{4})/;
    const oneDay = 1000 * 60 * 60 * 24;

    if (!checkFormat(dateString1, pattern) || !checkFormat(dateString2, pattern)) {
        throw "Formato incorrecto de las fechas";
    }


    let dt1 = new Date(dateString1.replace(pattern, '$3-$2-$1'));
    let dt2 = new Date(dateString2.replace(pattern, '$3-$2-$1'));

    let result = 0;
    if(dt1.getTime() > dt2.getTime()) {
        result = Math.floor((dt1.getTime() - dt2.getTime()) / oneDay)
    } else {
        result = Math.floor((dt2.getTime() - dt1.getTime()) / oneDay)
    }
    
    return result;

}

console.log(`Entre 01/01/2022 y 31/12/2022 hay ${diffDaysInteger('01/01/2022', '31/12/2022')} dias.`)