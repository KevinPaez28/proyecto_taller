import { post } from "./api.js";

const formulario = document.querySelector("form")

formulario.addEventListener("submit", async (event)=>{
event.preventDefault();

  const data = {
    cedula: document.getElementById("cedula").value,
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    telefono: document.getElementById("telefono").value,
    usuario: document.getElementById("usuario").value,
    contraseña: document.getElementById("contrasena").value,
    rol_id: 3
  };
    try {
      const crearUsuarios = await post('Usuarios', data);
      alert("Usuario registrado correctamente");
      document.getElementById("formUsuario").reset(); 
    } catch (error) {
      alert("Error al registrar usuario: " + error.message);
    }
    
});


