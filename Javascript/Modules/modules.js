import { get } from "../api.js";

export const TotalUsuarios =(usuarios,Roles)=>{
 try {
    const empleados = document.querySelector(".menu__empleados");
    const clientesfiltrados = usuarios.filter(usuario => usuario.rol_id === 3);
    const numeroClientes = document.querySelectorAll('.menu__numbers')[0]; 
    if (numeroClientes) {
      numeroClientes.textContent = clientesfiltrados.length;
    }

    const empleados__nombres = document.createElement("div")
    empleados__nombres.classList.add("Menu__empleados-nombres");

    const nombre__content = document.createElement("p");
    nombre__content.textContent = "Nombre";
    const cedula__content = document.createElement("p");
    cedula__content.textContent = "Cedula"
    const rol__content = document.createElement("p");
    rol__content.textContent = "Rol"

    empleados__nombres.appendChild(nombre__content)
    empleados__nombres.appendChild(cedula__content)
    empleados__nombres.appendChild(rol__content)
    empleados.appendChild(empleados__nombres);

    usuarios.forEach(element => {
      

      const empleados_content = document.createElement("div");
      empleados_content.classList.add("Menu__empleados-content");

      const nombre = document.createElement("p");
      nombre.classList.add("Menu__empleados-pnombres")
      nombre.textContent = element.nombre;

      const cedula = document.createElement("p");
      cedula.classList.add("Menu__empleados-pcedula");
      cedula.textContent = element.cedula;
      empleados_content.appendChild(nombre);

      const rol = document.createElement("p")
      rol.classList.add("Menu__empleados-prol")
      const roles_encontrados = Roles.find(rol => (rol.rol_id) ==(element.rol_id));
     
      rol.textContent = roles_encontrados ? roles_encontrados.nombre : "Desconocido";

      empleados_content.appendChild(nombre);
      empleados_content.appendChild(cedula);
      empleados_content.appendChild(rol)

      empleados.appendChild(empleados_content);
    });

  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
}

export const Vehiculos = (vehiculos,Usuarios) =>{
 
  vehiculos.forEach(element => {
  const cards = document.createElement("div");
  cards.classList.add("interfazvehiculos__cards");

  const body = document.createElement("div");
  body.classList.add("interfazvehiculos__body");

  const infoWrapper = document.createElement("div"); 
  infoWrapper.classList.add("interfazvehiculos__info"); 

  const titulos = document.createElement("div");
  titulos.classList.add("interfazvehiculos__contentCard");

  const content = document.createElement("div");
  content.classList.add("interfazvehiculos__contentCard");

  const nombreauto = document.createElement("p");
  nombreauto.classList.add("interfazvehiculos__titulonombre");
  nombreauto.textContent = "Nombre:";

  const placaauto = document.createElement("p");
  placaauto.classList.add("interfazvehiculos__titulonombre");
  placaauto.textContent = "Placa:";

  const modeloAuto = document.createElement("p");
  modeloAuto.classList.add("interfazvehiculos__titulonombre");
  modeloAuto.textContent = "Modelo:";

  const anioAuto = document.createElement("p");
  anioAuto.classList.add("interfazvehiculos__titulonombre");
  anioAuto.textContent = "Año:";

  const usuarioAuto = document.createElement("p");
  usuarioAuto.classList.add("interfazvehiculos__titulonombre");
  usuarioAuto.textContent = "Usuario:";

  titulos.appendChild(nombreauto);
  titulos.appendChild(placaauto);
  titulos.appendChild(modeloAuto);
  titulos.appendChild(anioAuto);
  titulos.appendChild(usuarioAuto);

  const nombre = document.createElement("p");
  nombre.classList.add("interfazvehiculos__nombre");
  nombre.textContent = element.marca;

  const Placa = document.createElement("p");
  Placa.classList.add("interfazvehiculos__placa");
  Placa.textContent = element.placa;

  const Modelo = document.createElement("p");
  Modelo.classList.add("interfazvehiculos__modelo");
  Modelo.textContent = element.modelo;

  const anio = document.createElement("p");
  anio.classList.add("interfazvehiculos__anio");
  anio.textContent = element.año;

  const botones = document.createElement("div");
  botones.classList.add("interfazvehiculos__button");

  const btnEditar = document.createElement("button");
  btnEditar.classList.add("interfazvehiculos__buttones");
  btnEditar.textContent = "Editar";

  const btnEliminar = document.createElement("button");
  btnEliminar.classList.add("interfazvehiculos__buttones");
  btnEliminar.textContent = "Eliminar";

  const Usuariosfiltrados = Usuarios.filter(V => V.usuario_id === element.usuario_id && V.rol_id === 3);

    if (Usuariosfiltrados.length > 0) {
      Usuariosfiltrados.forEach(p => {
        const usuarioid = document.createElement("p");
        usuarioid.classList.add("interfazvehiculos__usuarioId");
        usuarioid.textContent = p.usuario;

        content.appendChild(nombre);
        content.appendChild(Placa);
        content.appendChild(Modelo);
        content.appendChild(anio);
        content.appendChild(usuarioid);

        botones.appendChild(btnEditar);
        botones.appendChild(btnEliminar);

        infoWrapper.appendChild(titulos);
        infoWrapper.appendChild(content);

        body.appendChild(infoWrapper);
        body.appendChild(botones);
        cards.appendChild(body);

        document.querySelector(".interfazVehiculos__content").appendChild(cards);
      });
    }else{
      const usuarioid = document.createElement("p");
      usuarioid.classList.add("interfazvehiculos__usuarioId");
      usuarioid.textContent = "Sin usuario asignado";

      content.appendChild(nombre);
      content.appendChild(Placa);
      content.appendChild(Modelo);
      content.appendChild(anio);
      content.appendChild(usuarioid);

      botones.appendChild(btnEditar);
      botones.appendChild(btnEliminar);

      infoWrapper.appendChild(titulos);
      infoWrapper.appendChild(content);

      body.appendChild(infoWrapper);
      body.appendChild(botones);
      cards.appendChild(body);

      document.querySelector(".interfazVehiculos__content").appendChild(cards);
    }
  });
}

export const Categorias_Productos = (Categorias, Productos, select, contenedorPadre) => {
  Categorias.forEach(element => {
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

    innerDiv.append(pStock, pNombre, pPrecio);
    divItem.appendChild(innerDiv);

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
        precio.textContent = p.precio;

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

    botones.append(btnEditar, btnEliminar);

    body.append(nombre, productos, botones);
    card.appendChild(body);
    contenedorPadre.appendChild(card); // 👈 Aquí agregas solo las tarjetas (no contenedores múltiples)

    const option = document.createElement("option");
    option.value = element.categoria_id;
    option.textContent = element.nombre_categoria;
    select.appendChild(option);
  });
};

export const validarCategorias = (data) =>{
 const nombre = data.nombre_categoria.trim()
 
 const sololetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
 if(nombre === "" ){
    alert("El campo necesita letras")
    return false;
 }
 if(!sololetras.test(nombre)){
    alert("El nombre de la categoria solo debe contener Letras")
    return false
 }
 return true
}

export const validarProductos = (data) => {
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  const regexPrecio = /^\d+(\.\d{1,2})?$/;
  const regexStock = /^\d+$/;

  if (!data.nombre || data.nombre.trim() === "") {
    alert("Por favor, ingresa el nombre del producto.");
    return false;
  }
  if (!regexNombre.test(data.nombre.trim())) {
    alert("El nombre del producto solo puede contener letras y espacios.");
    return false;
  }

  if (data.descripcion && data.descripcion.trim().length < 5) {
    alert("La descripción debe tener al menos 5 caracteres si se proporciona.");
    return false;
  }

  if (!data.precio || data.precio.trim() === "") {
    alert("Por favor, ingresa el precio del producto.");
    return false;
  }
  if (!regexPrecio.test(data.precio.trim()) || parseFloat(data.precio) <= 0) {
    alert("El precio debe ser un número positivo válido. Ejemplo: 12 o 12.99");
    return false;
  }

  if (!data.stock || data.stock.trim() === "") {
    alert("Por favor, ingresa el stock disponible.");
    return false;
  }
  if (!regexStock.test(data.stock.trim()) || parseInt(data.stock) <= 0) {
    alert("El stock debe ser un número entero positivo.");
    return false;
  }

  if (!data.categoria_id || data.categoria_id === "0") {
    alert("Selecciona una categoría válida del listado.");
    return false;
  }

  return true; 
}