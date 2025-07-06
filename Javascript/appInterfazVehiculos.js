import { get } from "./api.js";
import { Vehiculos } from "./Modules/modules.js";

const vehiculos = await get('Vehiculos');
const Usuarios = await get('Usuarios');

Vehiculos(vehiculos,Usuarios)