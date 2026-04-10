
export default class Vista{

    //referencia del interfaz de usuario 
    #boton
    #inputNombre
    #inputFechNacimiento
    #controlador
    constructor(){
        console.log('Vista Creada')
        this.#boton = document.querySelector('button')
        this.#inputNombre = document.querySelector('input')
        this.#inputFechNacimiento = document.querySelector('input[type="date"]')
        this.#controlador = document.querySelector('input')


        this.#boton.addEventListener('click', this.#insertar.bind(this))
    }

    #insertar(){
        console.log('Pulsado insertar')
        const nombre = this.#inputNombre.value
        const fechaNacimiento = this.#inputFechNacimiento.value
        const datos ={
            'nombre' : nombre,
            'fechaNacimiento': fechaNacimiento
        }
        this.#controlador.insertar(datos)
    }
}