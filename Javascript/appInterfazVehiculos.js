import { get } from "./api.js";
import { Vehiculos } from "./Modules/modules.js";

const vehiculos = await get('Vehiculos');
const Usuarios = await get('Usuarios');

Vehiculos(vehiculos,Usuarios)


const dialogo = document.getElementById("insertarvehiculos")
const cerrar = document.getElementById("cerrarvehiculos");
const btnregistrar = document.getElementById("registrar_vehiculos")

btnregistrar.addEventListener("click",()=>{
 dialogo.showModal();
})

cerrar.addEventListener("click",()=>{
    dialogo.close();
})