/*
 * Reto #10
 * EXPRESIONES EQUILIBRADAS
 * Fecha publicación enunciado: 07/03/22
 * Fecha publicación resolución: 14/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

// LISTADO DE SIMBOLOS PERMITIDOS
// Y SUS EQUIVALENCIAS
const SIMBOLOS = {
    '{': '}',
    '[': ']',
    '(': ')'
}

const isBalanced = (string) => {
    // OBJETO PARA LLEVAR EL CONTEO
    // SIMBOLOS DE APERTURA
    // SIMBOLOS DE CERRADO
    let objCount = new Object();
    objCount.openCount = new Object();
    objCount.closeCount = new Object();

    // GENERAR ARRAY SOLO CON LOS SIMBOLOS
    // EL RESTO DE LA CADENA NO NOS SIRVE
    const splitString = string.replace(/[^\{|\[|\(|\)|\]|\}]/g, ' ').replace(/\s+/g, '').split('');


    for (const l of splitString) {
        // SI ES UN SIMBOLO DE APERTURA SE CUENTA EN EL OBJ DESTINADO
        // INICIALIZAR OBJ CON SIMBOLO DE CERRADO A 0 CUANDO SE ABRE
        // LLEVAR CONTEO DE SIMBOLOS DE CERRADO CUANDO NO SEAN DE APERTURA
        if (SIMBOLOS.hasOwnProperty(l)) {
            if (objCount.openCount.hasOwnProperty(l)) {
                objCount.openCount[l]++
            } else {
                objCount.openCount[l] = 1
            }

            objCount.closeCount[SIMBOLOS[l]] = 0
        } else {
            if (objCount.closeCount.hasOwnProperty(l)) {
                objCount.closeCount[l]++
            } else {
                objCount.closeCount[l] = 1
            }
        }
    }

    const opened = objCount.openCount;
    const closed = objCount.closeCount;

    // DE MOMENTO, ES BALANCEADO SI TIENE EL MISMO NUMERO DE PROPIEDADES
    let isBalanced = Object.keys(opened).length === Object.keys(closed).length;

    for (const openKey in opened) {
        // ASEGURAR QUE ES UN SIMBOLO DE APERTURA
        // BUSCAR SIMBOLO DE CERRADO ASOCIADO
        // COMPARAR CONTEO DE AMBOS EN VARIABLE isBalanced
        // TERMINAR LOOP CUANDO SE ENCUENTRE UNA DISCREPANCIA
        if (SIMBOLOS.hasOwnProperty(openKey)) {
            const openCount = opened[openKey];
            const closeCount = closed[SIMBOLOS[openKey]];

            if (openCount !== closeCount) {
                isBalanced = false;
                break;
            }
        }
    }
    
    return isBalanced;
}


console.log("{a + b [c] * (2x2)}}}}", isBalanced("{a + b [c] * (2x2)}}}}"))
console.log("{ [ a * ( c + d ) ] - 5 }", isBalanced("{ [ a * ( c + d ) ] - 5 }"))
console.log("{ a * ( c + d ) ] - 5 }", isBalanced("{ a * ( c + d ) ] - 5 }"))
console.log("{a^4 + (((ax4)}", isBalanced("{a^4 + (((ax4)}"))
console.log("{ ] a * ( c + d ) + ( 2 - 3 )[ - 5 }", isBalanced("{ ] a * ( c + d ) + ( 2 - 3 )[ - 5 }"))
console.log("{{{{{{()}}}}}}", isBalanced("{{{{{{()}}}}}}"))
console.log("(a", isBalanced("(a"))
