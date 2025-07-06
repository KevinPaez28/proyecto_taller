import { get } from "./api.js";
import { TotalUsuarios } from "./Modules/modules.js";
 const usuarios = await get('Usuarios'); 
const Roles = await get('Roles'); 

TotalUsuarios(usuarios,Roles);


