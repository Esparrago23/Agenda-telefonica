import {Contacto} from "./Contacto.mjs"
import { cola } from "../controllers/dependencies.mjs";
export class listaContacto{
    addContacto(nombre,apellido,numero,correo){
        let contacto = new Contacto()
        contacto.setNombre(nombre)
        contacto.setApellido(apellido)
        contacto.setTelefono(numero)
        contacto.setCorreoElectronico(correo)
        cola.enqueue(contacto)
    }
    seeContacto(){
        let objcontacto=cola.peek()
        console.log(objcontacto.getNombre())
        return objcontacto
        }
    deleteContacto(){
        let objcontacto=cola.dequeue()
        cola.enqueue(objcontacto)

    }
    comprobacion(){
        return cola.size()
    }
}