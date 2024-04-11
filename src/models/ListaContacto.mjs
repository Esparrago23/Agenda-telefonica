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
        return objcontacto
        }

    searchContacto(info){
        let objcontacto
        do {
             objcontacto=cola.dequeue()
            cola.enqueue(objcontacto)
            if(info===objcontacto.getNombre()){
                return objcontacto;
            }
        } while (info===objcontacto.getNombre());
    }

    moveContacto(){
        let objcontacto=cola.dequeue()
        cola.enqueue(objcontacto)
    }
    deleteContacto(){
        cola.dequeue()
    }
    comprobacion(){
        return cola.size()
    }
    
}