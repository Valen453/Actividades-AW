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


