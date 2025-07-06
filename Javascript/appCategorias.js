import {get} from "./api.js" 
import {post} from "./api.js" 
import { Categorias_Productos, validarCategorias, validarProductos } from "./Modules/modules.js"

const formularioCategorias = document.getElementById("categorias")


const categorias = await get('Categorias')
const Productos = await get ('Productos')
const select = document.querySelector("select")
const contenedor = document.getElementById("contenedorCategorias");

formularioCategorias.addEventListener("submit", async (event) =>{
event.preventDefault();

 const data = {
    nombre_categoria: document.getElementById("nombrecategoria").value,
 }
  if(validarCategorias(data)){
    try {
    const crearCategorias = await post('Categorias',data);
    alert("Categorias Registradas correctamente")
    document.getElementById("categorias").reset(); 
  } catch (error) {
    alert("Error al registrar Categorias: " + error.message); 
  } 
  }  
});

;
const formularioproductos = document.getElementById("productos")
formularioproductos.addEventListener("submit", async (event) =>{
event.preventDefault();
   const data = {
     nombre: document.getElementById("nombreProductos").value,
     precio: document.getElementById("precioProductos").value,
     stock: document.getElementById("unidadProductos").value,
     categoria_id: document.getElementById("rolCategorias").value,
   }
   if(validarProductos(data)){
    try {
      const crearproductos = await post('Productos',data);
      alert("Productos Registrados correctamente")
      document.getElementById("categorias").reset(); 
    } catch (error) {
        alert("Error al registrar Categorias: " + error.message); 
    }  
  }
});

Categorias_Productos(categorias, Productos, select, contenedor);

