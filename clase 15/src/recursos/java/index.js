// /*
// console.log("hola")
// */
// /*const nombre = "Valen"*/
// let nombre = "valen"
// nombre = "asdsad"

// console.log(nombre)

// console.log(typeof nombre)

// let esMayor = true

// const edad = 14
// const mayoriaEdad = 18

// const aumentoEdad = edad + 1

// if (aumentoEdad === mayoriaEdad) {
//     esMayor = true
// } else {
//     console.log("Tiene " + mayoriaEdad)
// }

// /* === comprueba que sea del mismo tipo y mismo valor*/
// console.log(esMayor)

// const n1 = 3
// const n2 = 4 

// console.log(n1 + n2)

// console.log(1 - 3)

// console.log(3 * 3)

// console.log(8 / 3)

// console.log(7 % 3)

// nombre = "Valentino Fontana"
// console.log(nombre)

// console.log("Programacion")
// console.log("Web")

// console.log("aplicaciones" + "web" + "1")

// const materia = "Aplicaciones Web 1"
// console.log("Sistemas-" + materia)

// let parentesco = ""

// const familiar = "Juan"

// parentesco = nombre + " amigo de " + familiar

// console.log(parentesco)


const persona = {
    edad: 20,
    estudia: true,
    nombre: "Valen",
    redes: [
        "tiktok",
        "youtube",
        "instagram"
    ],
    otros: {
        pasatiempos: "pintar",
        mascotas: 2
    },
    caminar: function name(params) { }
}

persona.nacionalidad = "argentina"

console.log(persona.redes[1])

let mayoriaEdad = 19

if (mayoriaEdad >= 18) {
    console.log("Es mayor")
} else {
    console.log("Es menor")
}

let numero = 14

if (numero % 2 === 0) {
    console.log("Es par")
} else {
    console.log("Es impar")
}

let nota = 7

if (nota < 4) {
    console.log("Desaprobado")
} else if (nota > 7) {
    console.log("Promocionado")
} else { "Aprobado" }

for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}


for (let i = 10; i > 0; i--) {
    console.log(i);
}

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("Es par")
    } else {
        console.log("Es impar")
    }
}


for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El numero " + i + " es par")
    } else {
        console.log("El numero " + i + " es impar")
    }
}