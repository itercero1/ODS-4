import ModeloLibreria from '../modelos/modeloLibreria.js';
import ControladorJuego from '../js/juego/ControladorJuego.js';

export default class ControladorLibreria {
    #modelo;
    #controladorJuego;

    constructor() {
        this.#modelo = new ModeloLibreria();
        this.#controladorJuego = new ControladorJuego();
        this.inicializarEventos();
    }

    inicializarEventos() {
        const form = document.querySelector("#formLibro");
        if (form) {
            form.addEventListener("submit", this.manejarEnvioFormulario.bind(this));
        }
    }

    manejarEnvioFormulario(evento) {
        evento.preventDefault();

        const titulo = document.querySelector("#titulo").value.trim();
        const autor = document.querySelector("#autor").value.trim();
        const fecha = document.querySelector("#fecha").value;
        const categoria = document.querySelector("#categoria").value;
        const descripcion = document.querySelector("#descripcion").value;

        let idioma = "";
        const radioMarcado = document.querySelector("input[name='idioma']:checked");
        if (radioMarcado) {
            idioma = radioMarcado.value;
        }

        let disponibilidad = [];
        if (document.querySelector("#chkFisico").checked) disponibilidad.push("Físico");
        if (document.querySelector("#chkDigital").checked) disponibilidad.push("Digital");
        if (document.querySelector("#chkAudio").checked) disponibilidad.push("Audiolibro");
        
        const disponibilidadStr = disponibilidad.join(", ");

        if (titulo === "") {
            alert("El título es obligatorio.");
            return;
        }
        if (autor === "") {
            alert("El autor es obligatorio.");
            return;
        }

        const libro = { 
            titulo, 
            autor, 
            fecha, 
            categoria, 
            idioma, 
            disponibilidad: disponibilidadStr, 
            descripcion 
        };

        this.#modelo.agregarLibro(libro);
        document.querySelector("#formLibro").reset();
        alert("Libro guardado correctamente");
    }

    mostrarVista(vistaId) {
        const vistaFormulario = document.querySelector("#vistaFormulario");
        const vistaHistorial = document.querySelector("#vistaHistorial");
        const vistaJuego = document.querySelector("#vistaJuego");
        
        if (vistaFormulario) vistaFormulario.style.display = "none";
        if (vistaHistorial) vistaHistorial.style.display = "none";
        if (vistaJuego) vistaJuego.style.display = "none";

        const vistaMostrar = document.querySelector("#" + vistaId);
        if (vistaMostrar) vistaMostrar.style.display = "block";

        if (vistaId === 'vistaHistorial') {
            this.#modelo.renderizarLibros();
        }

        if (vistaId === 'vistaJuego') {
            this.#controladorJuego.iniciar();
        } else {
            this.#controladorJuego.detener();
        }
    }
}