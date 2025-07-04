import {get} from "./api.js" 
import {post} from "./api.js" 


const formularioCategorias = document.getElementById("categorias")


const select = document.querySelector("select")
const categorias = await get('Categorias')
const Productos = await get ('Productos')
const contenedor = document.getElementById("contenedorCategorias");

formularioCategorias.addEventListener("submit", async (event) =>{
event.preventDefault();

 const data = {
    nombre_categoria: document.getElementById("nombrecategoria").value,
 }
 try {
   const crearCategorias = await post('Categorias',data);
   alert("Categorias Registradas correctamente")
    document.getElementById("categorias").reset(); 
 } catch (error) {
    alert("Error al registrar Categorias: " + error.message); 
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
   try {
   const crearproductos = await post('Productos',data);
   alert("Productos Registrados correctamente")
    document.getElementById("categorias").reset(); 
 } catch (error) {
    alert("Error al registrar Categorias: " + error.message); 
 }  
 console.log(data)
});



categorias.forEach(element => {
  const card = document.createElement("div");
  card.classList.add("interfazcategorias__Cards");

  const body = document.createElement("div");
  body.classList.add("interfazcategorias__body");

  const nombre = document.createElement("div");
  nombre.classList.add("interfazcategorias__nombre");
  nombre.textContent = element.nombre_categoria;

  const divItem = document.createElement("div");
  divItem.classList.add("interfazcategorias__nombre-item");

  const innerDiv = document.createElement("div");
  innerDiv.classList.add("interfazcategorias__nombre_content");

  const pStock = document.createElement("p");
  pStock.textContent = "Stock";

  const pNombre = document.createElement("p");
  pNombre.textContent = "Nombre";

  const pPrecio = document.createElement("p");
  pPrecio.textContent = "Precio";

  const productos = document.createElement("div");
  productos.classList.add("interfazcategorias__productos");

  productos.appendChild(divItem);

  const productosFiltrados = Productos.filter(p => p.categoria_id == element.categoria_id);

  if (productosFiltrados.length > 0) {
    productosFiltrados.forEach(p => {
      const divProducto = document.createElement("div");
      divProducto.classList.add("interfazcategorias__productos_item");

      const stock = document.createElement("p");
      stock.textContent = p.stock;

      const nombreProducto = document.createElement("p");
      nombreProducto.textContent = p.nombre;

      const precio = document.createElement("p");
      precio.textContent = (p.precio)

      divProducto.append(stock, nombreProducto, precio);
      productos.appendChild(divProducto);
    });
  } else {
    const sinProductos = document.createElement("em");
    sinProductos.textContent = "No hay productos";
    productos.appendChild(sinProductos);
  }

  const botones = document.createElement("div");
  botones.classList.add("interfazcategorias__button");

  const btnEditar = document.createElement("button");
  btnEditar.classList.add("interfazcategorias__buttones");
  btnEditar.textContent = "Editar";

  const btnEliminar = document.createElement("button");
  btnEliminar.classList.add("interfazcategorias__buttones");
  btnEliminar.textContent = "Eliminar";

  botones.appendChild(btnEditar);
  botones.appendChild(btnEliminar);

  body.appendChild(nombre);
  body.appendChild(productos);
  body.appendChild(botones);
  innerDiv.appendChild(pStock);
  innerDiv.appendChild(pNombre);
  innerDiv.appendChild(pPrecio);
  divItem.appendChild(innerDiv);
  card.appendChild(body);
  contenedor.appendChild(card);

  const option = document.createElement('option');
  option.setAttribute('value', element.categoria_id);
  option.textContent = element.nombre_categoria;
  select.append(option);
});

