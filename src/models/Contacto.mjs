export class Contacto {
    #nombre
    #apellido
    #telefono
    #correoElectronico
    setNombre(nombre){this.#nombre = nombre}
    getNombre(){return this.#nombre}
    setApellido(apellido){this.#apellido = apellido}
    getApellido(){return this.#apellido}
    setTelefono(telefono){this.#telefono = telefono}
    getTelefono(){return this.#telefono}
    setCorreoElectronico(correoElectronico){this.#correoElectronico = correoElectronico}
    getCorreoElectronico(){return this.#correoElectronico}

}