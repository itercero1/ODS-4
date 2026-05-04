import Personaje from './Personaje.js';
import LibroJuego from './LibroJuego.js';

export default class ControladorJuego {
    #contenedorJuego;
    #elementoPuntuacion;
    #personaje;
    #listaLibros = [];
    #puntos = 0;
    #bucleJuego;
    #teclasPresionadas = {};

    constructor() {
        this.#contenedorJuego = document.querySelector('#contenedorJuego');
        this.#elementoPuntuacion = document.querySelector('#puntuacion');
    }

    iniciar() {
        // Limpiar
        this.detener();
        this.#contenedorJuego.innerHTML = '';
        this.#listaLibros = [];
        this.#puntos = 0;
        this.actualizarPuntuacion();

        // Crear personaje
        this.#personaje = new Personaje(this.#contenedorJuego);

        // Crear libros iniciales
        for (let indiceLibro = 0; indiceLibro < 5; indiceLibro++) {
            this.#listaLibros.push(new LibroJuego(this.#contenedorJuego));
        }

        // Eventos de teclado
        window.addEventListener('keydown', this.#manejarKeyDown.bind(this));
        window.addEventListener('keyup', this.#manejarKeyUp.bind(this));

        // Loop principal (siguiendo el estilo de setInterval de COMO_MOVER)
        this.#bucleJuego = setInterval(this.#actualizarJuego.bind(this), 20);
    }

    detener() {
        if (this.#bucleJuego) {
            clearInterval(this.#bucleJuego);
            this.#bucleJuego = null;
        }
        window.removeEventListener('keydown', this.#manejarKeyDown.bind(this));
        window.removeEventListener('keyup', this.#manejarKeyUp.bind(this));
    }

    #actualizarJuego() {
        // Movimiento horizontal con WASD
        let velocidadX = 0;
        if (this.#teclasPresionadas['a'] || this.#teclasPresionadas['A']) velocidadX = -6; 
        if (this.#teclasPresionadas['d'] || this.#teclasPresionadas['D']) velocidadX = 6;
        this.#personaje.setVelocidadX(velocidadX);

        // Salto con W o Espacio
        if (this.#teclasPresionadas['w'] || this.#teclasPresionadas['W'] || this.#teclasPresionadas[' ']) {
            this.#personaje.saltar();
        }

        this.#personaje.actualizar();

        // Detectar colisiones con un bucle for clásico (estilo 1DAW)
        const limitesPersonaje = this.#personaje.getBounds();
        
        for (let indice = 0; indice < this.#listaLibros.length; indice++) {
            const libroActual = this.#listaLibros[indice];
            const limitesLibro = libroActual.getBounds();

            if (this.#detectarColision(limitesPersonaje, limitesLibro)) {
                // Eliminar el libro visualmente
                libroActual.eliminar();
                
                // Quitar el libro del array
                this.#listaLibros.splice(indice, 1);
                indice--; // Ajustar índice al eliminar

                // Actualizar puntuación
                this.#puntos++;
                this.actualizarPuntuacion();

                // Añadir un nuevo libro para que siempre haya 5
                this.#listaLibros.push(new LibroJuego(this.#contenedorJuego));

                // Mensaje de victoria al llegar a 10
                if (this.#puntos >= 10) {
                    this.detener();
                    alert("¡Felicidades! Has completado ODS 4 recogiendo 10 libros.");
                    return;
                }
            }
        }
    }

    #manejarKeyDown(evento) {
        this.#teclasPresionadas[evento.key] = true;
        // Evitar que el espacio o WASD muevan la página o reinicien el juego
        if (evento.key === ' ' || evento.key === 'w' || evento.key === 'W' || evento.key === 'a' || evento.key === 'A' || evento.key === 's' || evento.key === 'S' || evento.key === 'd' || evento.key === 'D') {
            evento.preventDefault();
        }
    }

    #manejarKeyUp(evento) {
        this.#teclasPresionadas[evento.key] = false;
    }

    #detectarColision(rectangulo1, rectangulo2) {
        return rectangulo1.x < rectangulo2.x + rectangulo2.width &&
               rectangulo1.x + rectangulo1.width > rectangulo2.x &&
               rectangulo1.y < rectangulo2.y + rectangulo2.height &&
               rectangulo1.y + rectangulo1.height > rectangulo2.y;
    }

    actualizarPuntuacion() {
        this.#elementoPuntuacion.innerText = "Libros recogidos: " + this.#puntos;
    }
}
