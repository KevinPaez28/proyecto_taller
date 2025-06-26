import { get } from "./api.js";

document.addEventListener('DOMContentLoaded', async () => { 
  try {
    const usuarios = await get('Usuarios'); 
    const clientes = usuarios.filter(usuario => usuario.rol_id === 3);

    const numeroClientes = document.querySelectorAll('.menu__numbers')[0]; 
    if (numeroClientes) {
      numeroClientes.textContent = clientes.length;
    }

  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
});
