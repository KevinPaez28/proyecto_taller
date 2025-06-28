import { get } from "./api.js";

document.addEventListener('DOMContentLoaded', async () =>{
  try {
   const vehiculos = await get ('Vehiculos')
   const vehiculo = vehiculos.find(vehi => vehi.id === idBuscado);

    if (vehiculo) {
    document.getElementById("nombre").textContent = vehiculo.nombre;
    document.getElementById("color").textContent = vehiculo.color;
    document.getElementById("año").textContent = vehiculo.año;
    }
  } catch (error) {
      console.error('Error al obtener los vehiculos:', error);
  }
})