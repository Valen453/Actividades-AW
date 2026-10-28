// import productos from './productos.js' // No nombrada
import {productosMascotas, categorias} from './productos.js' // Nombrada
import {renderizarCatalogo,filtrarPorTalle} from './funciones.js'

// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos")

// Select 
/*
<select name="talle">
    <option value="S">S</option>
</select>
*/
// Filtramos el arreglo de los productos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

// Renderizamos
renderizarCatalogo(contenedorProductos, productosFiltrados)


const eventoBoton = document.getElementById("evento")
const dialogo = document.getElementById("dialogo")

eventoBoton.addEventListener('click', (evento)=>{
    console.log(evento)
})

eventoBoton.addEventListener('click', (evento)=>{
    dialogo.showModal()
})

const botonesCarro = contenedorProductos.querySelectorAll(".boton-agregar-carro")

botonesCarro.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
        const id = boton.dataset.id
        console.log(`click en el boton ${id}`)
    })
})