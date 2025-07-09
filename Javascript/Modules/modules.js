import { get , del, put } from "../api.js";

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

export const Eliminarusuarios = (usuarios, Roles) => {
  try {
    const dialogo = document.getElementById("EliminarUsuario");
    const contenido = document.querySelector(".EliminarUsuario__Content");

    contenido.innerHTML = "";

    const encabezado = document.createElement("div");
    encabezado.classList.add("Menu__empleados-header");

    const nombre__content = document.createElement("p");
    nombre__content.classList.add("Menu__empleados-titulos");
    nombre__content.textContent = "Nombre";

    const cedula__content = document.createElement("p");
    cedula__content.classList.add("Menu__empleados-titulos");
    cedula__content.textContent = "Cédula";

    const telefono = document.createElement("p");
    telefono.classList.add("Menu__empleados-titulos");
    telefono.textContent = "Teléfono";

    const usuariotext = document.createElement("p");
    usuariotext.classList.add("Menu__empleados-titulos");
    usuariotext.textContent = "Usuario";

    const rol__content = document.createElement("p");
    rol__content.classList.add("Menu__empleados-titulos");
    rol__content.textContent = "Rol";

    encabezado.appendChild(nombre__content);
    encabezado.appendChild(cedula__content);
    encabezado.appendChild(telefono);
    encabezado.appendChild(usuariotext);
    encabezado.appendChild(rol__content);

    contenido.appendChild(encabezado);

    usuarios.forEach(usuario => {
      const fila = document.createElement("div");
      fila.classList.add("empleadosContent");

      const datosDiv = document.createElement("div");
      datosDiv.classList.add("empleadosContent__info");

      const nombre = document.createElement("p");
      nombre.classList.add("empleadosContent__datos");
      nombre.textContent = usuario.nombre;

      const cedula = document.createElement("p");
      cedula.classList.add("empleadosContent__datos");
      cedula.textContent = usuario.cedula;

      const telefono = document.createElement("p");
      telefono.classList.add("empleadosContent__datos");
      telefono.textContent = usuario.telefono;

      const usuarioText = document.createElement("p");
      usuarioText.classList.add("empleadosContent__datos");
      usuarioText.textContent = usuario.usuario;

      const rol = document.createElement("p");
      rol.classList.add("empleadosContent__datos");
      const encontrado = Roles.find(r => r.rol_id === usuario.rol_id);
      rol.textContent = encontrado ? encontrado.nombre : "Desconocido";

      datosDiv.appendChild(nombre);
      datosDiv.appendChild(cedula);
      datosDiv.appendChild(telefono);
      datosDiv.appendChild(usuarioText);
      datosDiv.appendChild(rol);

      const accionesDiv = document.createElement("div");
      accionesDiv.classList.add("empleadosContent__acciones");

      const btnEditar = document.createElement("button");
      btnEditar.textContent = "Editar";
      btnEditar.classList.add("btn-modificar");

      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.classList.add("btn-Eliminar");

      btnEliminar.addEventListener("click", () => {
        eliminarUsuarioPorId(usuario.usuario_id);
      });

      btnEditar.addEventListener("click", async () =>{
        const inputNombre = document.createElement("input");
        inputNombre.classList.add("empleadosContent__input");
        inputNombre.value = nombre.textContent;
        nombre.replaceWith(inputNombre); //Remplazamos el elemento de parrafo 

        const inputCedula = document.createElement("input");
        inputCedula.classList.add("empleadosContent__input");
        inputCedula.value = cedula.textContent;
        cedula.replaceWith(inputCedula);

        const inputTelefono = document.createElement("input");
        inputTelefono.classList.add("empleadosContent__input");
        inputTelefono.value = telefono.textContent;
        telefono.replaceWith(inputTelefono);

        const inputUsuario = document.createElement("input");
        inputUsuario.classList.add("empleadosContent__input");
        inputUsuario.value = usuarioText.textContent;
        usuarioText.replaceWith(inputUsuario);

        btnEditar.textContent = "Guardar";
        btnEditar.classList.remove("btn-modificar");
        btnEditar.classList.add("btn-guardar");
      
        btnEditar.addEventListener("click", async () => {
              const nuevoUsuario = {
                nombre: inputNombre.value.trim(),
                cedula: inputCedula.value.trim(),
                telefono: inputTelefono.value.trim(),
                usuario: inputUsuario.value.trim(),
                correo: usuario.correo,       
                contrasena: usuario.contrasena,
                rol_id: usuario.rol_id
             };
         const paramns = usuario.usuario_id;
         try {
         const respuesta = await put(`Usuarios/${paramns}`, nuevoUsuario);
          if (respuesta.ok) {
           
           alert(" Usuario actualizado correctamente");
           location.reload();  
          } else {
            alert("No se pudo actualizar el usuario");
          }
          } catch (error) {
            console.error("Error al actualizar usuario:", nuevoUsuario);
            alert(" Error inesperado al actualizar");
          }
        });
      });
      accionesDiv.appendChild(btnEditar);
      accionesDiv.appendChild(btnEliminar);

      fila.appendChild(datosDiv);
      fila.appendChild(accionesDiv);

      contenido.appendChild(fila);
    });

    dialogo.showModal();

  } catch (error) {
    console.error("Error al mostrar usuarios para eliminar:", error);
  }
};

export const eliminarUsuarioPorId = async (id) => {
    try {
    const respuesta = await del(`Usuarios/${id}`);

    if (respuesta.ok) {
      alert("Usuario eliminado correctamente");

      location.reload();  
    } else {
      alert("No se pudo eliminar el usuario");
    }
  } catch (error) {
    console.error("Error al eliminar usuarios:", error);
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
    nombre.textContent = element.nombre;

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
    option.textContent = element.nombre;
    select.appendChild(option);
  });
};

//VALIDACIONES 

export const contarCamposFormulario = (formulario) => {
  const campos = [...formulario.elements].filter(campo => campo.hasAttribute('required'));
  return campos.length;
};

export const validar = (event) => {
  event.preventDefault();

  const campos = [...event.target.elements].filter((item) => item.hasAttribute('required'));
  const inputText = campos.filter((campo) =>
    campo.tagName === 'INPUT' &&
    (campo.getAttribute('type') === 'text' || campo.getAttribute('type') === 'email')
  );
  const inputContrasenia = campos.filter((campo) =>
    campo.tagName === 'INPUT' && campo.getAttribute('type') === 'password'
  );
  const selects = campos.filter((campo) => campo.tagName === 'SELECT');
  const textAreas = campos.filter((campo) => campo.tagName === 'TEXTAREA');

  let info = {};

  inputText.forEach(campo => {
    const id = campo.getAttribute('id');
    if (validarMinimo(campo)) {
      if (id === 'correo') {
        if (validarCorreo(campo)) {
          info[id] = campo.value.toLowerCase();
        }
      } else if (id === 'cedula') {
        if (validarCedula(campo)) {
          info[id] = campo.value;
        }
      } else {
        info[id] = campo.value;
      }
    }
  });

  // Validar contraseña
  inputContrasenia.forEach(campo => {
    if (validarContrasenia(campo)) {
      info[campo.getAttribute('id')] = campo.value;
    }
  });

  // Validar selects
  selects.forEach(select => {
    if (select.value === "") {
      if (select.nextElementSibling) select.nextElementSibling.remove();
      const mensaje = document.createElement('span');
      mensaje.textContent = "Debe seleccionar un elemento";
      mensaje.classList.add("mensaje-error");
      select.insertAdjacentElement('afterend', mensaje);
      select.classList.add('border--red');
    } else {
      info[select.getAttribute('id')] = select.value;
    }
  });

  // Validar textarea 
  textAreas.forEach(textArea => {
    if (validarMinimo(textArea)) {
      info[textArea.getAttribute('id')] = textArea.value;
    }
  });

  return info;
};

export const validarCorreo = (campo) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const correo = campo.value.trim();
  if (!regex.test(correo)) {
    const mensaje = document.createElement('span');
    mensaje.textContent = "Correo inválido";
    mensaje.classList.add("mensaje-error");
    if (campo.nextElementSibling) campo.nextElementSibling.remove();
    campo.insertAdjacentElement('afterend', mensaje);
    campo.classList.add('border--red');
    return false;
  }
  return true;
};

export const validarCedula = (campo) => {
  const regex = /^\d{6,10}$/; // entre 6 y 10 números
  const cedula = campo.value.trim();
  
  if (!regex.test(cedula)) {
    if (campo.nextElementSibling) campo.nextElementSibling.remove();
    const mensaje = document.createElement('span');
    mensaje.textContent = "La cédula debe tener entre 6 y 10 dígitos.";
    mensaje.classList.add("mensaje-error");
    campo.insertAdjacentElement('afterend', mensaje);
    campo.classList.add('border--red');
    return false;
  }
  return true;
};

export const validarContrasenia = (campo) => {
  const texto = campo.value.trim();
  const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/; 

  if (!regex.test(texto)) {
    const mensaje = document.createElement('span');
    mensaje.textContent = "La contraseña debe tener al menos 5 caracteres, una mayúscula y un número.";3
    mensaje.classList.add("mensaje-error");

    if (campo.nextElementSibling) campo.nextElementSibling.remove();
    campo.insertAdjacentElement('afterend', mensaje);
    campo.classList.add('border--red');
    return false;
  }

  return true;
};

export const limpiar = (campo) => {
  if (campo.nextElementSibling) campo.nextElementSibling.remove();
  campo.classList.remove('border--red');
};

export const validarLetras = (event) => {
  const tecla = event.key;

  const permitidas = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/;

  if (!permitidas.test(tecla) && tecla!="Backspace" ) {
    event.preventDefault();
  }
};

export const validarMinimo = (campo) => {
 const texto = campo.value.trim();
  let minimo = parseInt(campo.getAttribute('minlength') || campo.getAttribute('min') || "0");

  if (texto.length < minimo) {
    const span = document.createElement('span');
    span.textContent = `El campo ${campo.getAttribute('id')} debe tener mínimo ${minimo} caracteres`;
    span.classList.add("mensaje-error");
    if (campo.nextElementSibling) campo.nextElementSibling.remove();
    campo.insertAdjacentElement('afterend', span);
    campo.classList.add('border--red');
    return false;
  } else {
    if (campo.nextElementSibling) campo.nextElementSibling.remove();
    campo.classList.remove('border--red');
    return true;
  }
}

export const validarMaximo = (event) => {
  const campo = event.target;
  const max = campo.getAttribute('maxlength');

  if (max && campo.value.length >= max && event.key !== 'Backspace') {
    event.preventDefault();
  }
};

export const validarNumeros = (event) => {
  const tecla = event.key;

  const permitidas = /^[0-9]$/;

  if (!permitidas.test(tecla) && tecla!="Backspace") {
    event.preventDefault();
  }
};
