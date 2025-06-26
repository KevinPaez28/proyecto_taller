import {get} from "./api.js" 
import {post} from "./api.js" 

const formulario = document.querySelector("form")
const select = document.querySelector("select")


const roles = await get('Roles')

roles.forEach(element => {
    const option = document.createElement('option');
    option.setAttribute('value', element.rol_id); 
    option.textContent = element.nombre;          
    select.append(option);
});


formulario.addEventListener("submit", async (event)=>{
event.preventDefault();

  const data = {
    cedula: document.getElementById("cedula").value,
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    telefono: document.getElementById("telefono").value,
    usuario: document.getElementById("usuario").value,
    contraseña: document.getElementById("contrasena").value,
    rol_id: document.getElementById("rol").value
  };
    try {
      const crearUsuarios = await post('Usuarios', data);
      alert("Personal registrado correctamente");
      document.getElementById("formUsuario").reset();
    } catch (error) {
      alert("Error al registrar Personal: " + error.message);
    }


});

