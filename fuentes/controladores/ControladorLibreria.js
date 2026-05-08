// importamos el modelo de la libreria que es donde se guardan los datos
import ModeloLibreria from '../modelos/modeloLibreria.js';
// este es el controlador del juego, lo necesitamos para iniciarlo y pararlo
import ControladorJuego from '../js/juego/ControladorJuego.js';

// clase principal del controlador, la exportamos para usarla en otros sitios
export default class ControladorLibreria {
    // atributos privados (con # para que no se puedan tocar desde fuera)
    #modelo;
    #controladorJuego;

    // constructor: se ejecuta solo cuando creamos un objeto de esta clase
    constructor() {
        this.#modelo = new ModeloLibreria(); // creamos el modelo
        this.#controladorJuego = new ControladorJuego(); // creamos el controlador del juego
        this.inicializarEventos(); // llamamos al metodo que pone los eventos
    }

    // aqui ponemos los eventos del formulario
    inicializarEventos() {
        // buscamos el formulario en el html por su id
        const form = document.querySelector("#formLibro");
        if (form) {
            // si existe el formulario le añadimos el evento submit
            // el .bind(this) es para que el this dentro del metodo siga siendo el controlador
            // (sin el bind no funciona bien, nos lo explico el profe)
            form.addEventListener("submit", this.manejarEnvioFormulario.bind(this));
        }
    }

    // este metodo se ejecuta cuando el usuario le da a enviar en el formulario
    manejarEnvioFormulario(evento) {
        // con esto evitamos que la pagina se recargue al enviar el formulario
        evento.preventDefault();

        // recogemos los valores de los campos del formulario
        // el .trim() quita los espacios que el usuario pone sin querer al principio o al final
        const titulo = document.querySelector("#titulo").value.trim();
        const autor = document.querySelector("#autor").value.trim();
        const fecha = document.querySelector("#fecha").value;
        const categoria = document.querySelector("#categoria").value;
        const descripcion = document.querySelector("#descripcion").value;

        // para el idioma hay que mirar cual de los radio buttons esta marcado
        let idioma = "";
        const radioMarcado = document.querySelector("input[name='idioma']:checked");
        if (radioMarcado) {
            idioma = radioMarcado.value; // guardamos el valor del radio que este seleccionado
        }

        // la disponibilidad son checkboxes, puede haber mas de uno marcado
        // usamos un array para guardar los que esten activados
        let disponibilidad = [];
        if (document.querySelector("#chkFisico").checked) disponibilidad.push("Físico");
        if (document.querySelector("#chkDigital").checked) disponibilidad.push("Digital");
        if (document.querySelector("#chkAudio").checked) disponibilidad.push("Audiolibro");
        
        // juntamos todos los tipos de disponibilidad en un string separado por comas
        const disponibilidadStr = disponibilidad.join(", ");

        // validaciones: comprobamos que los campos obligatorios no esten vacios
        if (titulo === "") {
            alert("El título es obligatorio.");
            return; // salimos del metodo si falta el titulo
        }
        if (autor === "") {
            alert("El autor es obligatorio.");
            return; // igual pero con el autor
        }

        // creamos el objeto libro con todos los datos recogidos del formulario
        const libro = { 
            titulo, 
            autor, 
            fecha, 
            categoria, 
            idioma, 
            disponibilidad: disponibilidadStr, 
            descripcion 
        };

        // añadimos el libro al modelo (que es donde se guardan todos los libros)
        this.#modelo.agregarLibro(libro);
        // reseteamos el formulario para que quede vacio otra vez
        document.querySelector("#formLibro").reset();
        alert("Libro guardado correctamente");
    }

    // este metodo muestra la vista que le pasamos y esconde las demas
    mostrarVista(vistaId) {
        // guardamos las tres vistas en variables
        const vistaFormulario = document.querySelector("#vistaFormulario");
        const vistaHistorial = document.querySelector("#vistaHistorial");
        const vistaJuego = document.querySelector("#vistaJuego");
        
        // ocultamos todas las vistas primero (para que no se vean dos a la vez)
        if (vistaFormulario) vistaFormulario.style.display = "none";
        if (vistaHistorial) vistaHistorial.style.display = "none";
        if (vistaJuego) vistaJuego.style.display = "none";

        // mostramos solo la vista que nos piden
        const vistaMostrar = document.querySelector("#" + vistaId);
        if (vistaMostrar) vistaMostrar.style.display = "block";

        // si estamos en el historial, mostramos los libros guardados
        if (vistaId === 'vistaHistorial') {
            this.#modelo.renderizarLibros();
        }

        // si estamos en el juego lo iniciamos, si no lo paramos
        if (vistaId === 'vistaJuego') {
            this.#controladorJuego.iniciar();
        } else {
            this.#controladorJuego.detener(); // importante parar el juego si cambiamos de vista
        }
    }
}