import { get } from "./api.js";

const formulario = document.querySelector("form")

formulario.addEventListener("submit", async (event)=>{
event.preventDefault();

    const usuario = document.getElementById("usuario")
    const contrasenia = document.getElementById("contrasenia")
    
    const usuariovalor = usuario.value;
    const contraseniavalor = contrasenia.value

    const usuarios = await get('Usuarios');

    const user = usuarios.find((usu) => usu.usuario === usuariovalor);
    

    if(user.length<1) alert("El usuario no existe");
    else{
        if(user.contraseña==contraseniavalor){alert("Usuario Iniciado")}
        else alert("El usuario no puede ingresar")
        
    }

    if (user.contraseña === contraseniavalor) {
    if (user.rol_id === 1) {
      window.location.href = `/pages/interfazAdmin.html?id=${encodeURIComponent(user.usuario_id)}`;
    }

  } else {
    alert("Contraseña incorrecta");
  }
});



