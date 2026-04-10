import Vista from './vista.js'
import Alumno from './alumno.js'
import Modelo from './module.js'

class controlador{
    #vista
    #modelo
    constructor(){

        console.log('Controlador creado')
        this.#vista = new Vista()
    }
    insertar(datos){
        console.log('controlador.insertar')
        console.log(datos)
        const alumno = new Alumno(datos.nombre, datos.fechaNacimiento)
        this.#modelo.agregarAlumno(alumno)
    }
}
//lanzador
document.addEventListener('DOMContentLoaded', () => {
    new controlador()
})
