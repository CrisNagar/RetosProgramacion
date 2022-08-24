/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const Tipos = {
    triangulo: "triangulo",
    rectangulo: "rectangulo",
    cuadrado: "cuadrado"
}

interface Triangulo {
    base: number
    altura: number
    lado: number
    toString: (b: number, a: number, l: number) => string
}

interface Cuadrado {
    lado_a: number
    lado_b: number
    lado_c: number
    lado_d: number
    toString: (l: number) => string
}

interface Rectangulo {
    lado_a: number
    lado_b: number
    lado_c: number
    lado_d: number
    toString: (l1: number, l2: number) => string
}

interface Poligono {
    type: string
    figura: Triangulo | Cuadrado | Rectangulo
}

function calcArea(pol: Poligono) {
    switch(pol.type) {
        case Tipos.triangulo:
            const tri: Triangulo = <Triangulo> pol.figura;
            const areaTri: number = (tri.base * tri.altura) / 2;

            console.log(`${tri.toString(tri.base, tri.altura, tri.lado)} tiene un area de ${areaTri}` )

            return areaTri
        case Tipos.cuadrado:
            const cua: Cuadrado = <Cuadrado> pol.figura;
            const areaCua: number = Math.sqrt(cua.lado_a);

            console.log(`${cua.toString(cua.lado_a)} y un area de ${areaCua}`);

            return areaCua;
        case Tipos.rectangulo:
            const rec: Rectangulo = <Rectangulo> pol.figura;
            const areaRec: number = rec.lado_a * rec.lado_b;

            console.log(`${rec.toString(rec.lado_a, rec.lado_b)} con area de ${areaRec}`)

            return areaRec;
    }
}

calcArea(<Poligono> {
    type: Tipos.triangulo,
    figura: <Triangulo> {
        base: 12,
        altura: 6,
        lado: 14,
        toString: (b, a, l) => `Triangulo con base ${b}, una altura de ${a} y un lado de ${l}`
    }
})

calcArea(<Poligono> {
    type: Tipos.cuadrado,
    figura: <Cuadrado> {
        lado_a: 5,
        lado_b: 5,
        lado_c: 5,
        lado_d: 5,
        toString: (l) => `Cuadrado con lados de ${l}`
    }
})

calcArea(<Poligono> {
    type: Tipos.rectangulo,
    figura: <Rectangulo> {
        lado_a: 5,
        lado_b: 15,
        lado_c: 5,
        lado_d: 15,
        toString: (l1, l2) => `Rectangulo con lados de ${l1} y ${l2}`
    }
})