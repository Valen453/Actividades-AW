/* function suma(a, b) {
    return a + b
}

const suma2 = (a, b) => {
    return a + b
}

a => a + 4

const hola = () => 1 + 1

const numeros = [1, 4, 6, 78, 4, 54, 5 ,54]

let sumar = 0

numeros.forEach(numero => {
    sumar = sumar + numero
    console.log(sumar)
});

const numerosIncrementados =  numeros.map((numero) => {
    return numero + 1
})

//find y filter */

function saludar () {
    console.log("hola")
}

saludar()

function saludarPersona(nombre) {
    console.log("Hola " + nombre + " BIENVENIDO")
}

saludarPersona("Valen")

function esMayorDeEdad(edad) {
    let esMayor = false
    if(edad >= 18) {
        esMayor = true
    }
    return esMayor
}

let res = esMayorDeEdad(15)
console.log(res)

console.log(esMayorDeEdad(19))

let esMayor = (edad) => {
    if(edad >= 18) {
        return true
    }
    else {
        return false
    }
}

let comparaNumeros = (comparador) => {
    for (let i = 0; i < 10; i++) {
    if(i > comparador) {
        console.log(`El numero ${i} es mayor que ${comparador}`)
    } else if (numero = comparador){
        console.log(`El numero ${i} es igual que ${comparador}`)
    } else {
        console.log(`El numero ${i} es menor que ${comparador}`)
    }
    }
}

const operacion = (a, b, cb) => {
    if (a) {
        
    }
   return cb(a, b)
}

const sumador = (a, b) => a + b

const restador = (a, b) => a - b

console.log(operacion (1, 5, restador))
console.log(operacion (1, 5, sumador))

function verificarNum(numeroVerificar) {
    esNumero = false
    const numeros = [0, 1,2,3,4,5,6,7,8,9]
    numeros.forEach(numero => {
        if (numeroVerificar = numero) {
            esNumero = true
        }
    });
}