import { get } from "./api.js";



document.addEventListener('DOMContentLoaded', async () => {
  try {
    const usuarios = await get('Usuarios'); 
    const Roles = await get('Roles'); 
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
      // const roles_encontrados = Roles.find(rol => rol.rol_id == element.rol_id)
      
      rol.textContent = roles_encontrados ? roles_encontrados.nombre : "Desconocido";

      console.log("Resultado encontrado:", roles_encontrados);

      empleados_content.appendChild(nombre);
      empleados_content.appendChild(cedula);
      empleados_content.appendChild(rol)

      empleados.appendChild(empleados_content);
    });

  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
});

