// importamos la clase Personaje que es el jugador que se mueve
import Personaje from './Personaje.js';
// importamos la clase LibroJuego que son los libros que hay que recoger
import LibroJuego from './LibroJuego.js';

// controlador principal del juego, aqui esta toda la logica
export default class ControladorJuego {
    // atributos privados del juego
    #contenedorJuego;       // el div donde se dibuja todo el juego
    #elementoPuntuacion;    // el elemento html donde se muestra la puntuacion
    #personaje;             // el personaje que controla el jugador
    #listaLibros = [];      // array con todos los libros que hay en pantalla
    #puntos = 0;            // puntos que lleva el jugador
    #bucleJuego;            // guarda el intervalo del loop principal
    #teclasPresionadas = {}; // objeto para saber que teclas estan pulsadas en cada momento

    constructor() {
        // buscamos los elementos del html que vamos a necesitar
        this.#contenedorJuego = document.querySelector('#contenedorJuego');
        this.#elementoPuntuacion = document.querySelector('#puntuacion');
    }

    // metodo para iniciar o reiniciar el juego
    iniciar() {
        // primero paramos todo por si habia una partida anterior en curso
        this.detener();
        this.#contenedorJuego.innerHTML = ''; // limpiamos el contenedor
        this.#listaLibros = [];  // vaciamos la lista de libros
        this.#puntos = 0;        // reseteamos los puntos a 0
        this.actualizarPuntuacion(); // actualizamos el marcador en pantalla

        // creamos el personaje y lo metemos en el contenedor
        this.#personaje = new Personaje(this.#contenedorJuego);

        // creamos 5 libros al principio con un bucle for
        for (let indiceLibro = 0; indiceLibro < 5; indiceLibro++) {
            this.#listaLibros.push(new LibroJuego(this.#contenedorJuego));
        }

        // añadimos los eventos del teclado para mover al personaje
        window.addEventListener('keydown', this.#manejarKeyDown.bind(this));
        window.addEventListener('keyup', this.#manejarKeyUp.bind(this));

        // el bucle principal del juego, se ejecuta cada 20 milisegundos
        // es como el "tick" del juego, cuanto mas pequeño mas fluido va
        this.#bucleJuego = setInterval(this.#actualizarJuego.bind(this), 20);
    }

    // metodo para parar el juego
    detener() {
        if (this.#bucleJuego) {
            clearInterval(this.#bucleJuego); // paramos el intervalo
            this.#bucleJuego = null;         // lo ponemos a null para saber que esta parado
        }
        // quitamos los eventos del teclado para que no sigan funcionando
        window.removeEventListener('keydown', this.#manejarKeyDown.bind(this));
        window.removeEventListener('keyup', this.#manejarKeyUp.bind(this));
    }

    // este metodo se llama cada 20ms y actualiza todo lo que pasa en el juego
    #actualizarJuego() {
        // calculamos la velocidad horizontal segun las teclas que haya pulsadas
        // ponemos tanto mayuscula como minuscula por si el usuario tiene el caps lock
        let velocidadX = 0;
        if (this.#teclasPresionadas['a'] || this.#teclasPresionadas['A']) velocidadX = -6; // izquierda
        if (this.#teclasPresionadas['d'] || this.#teclasPresionadas['D']) velocidadX = 6;  // derecha
        this.#personaje.setVelocidadX(velocidadX);

        // si se pulsa W o espacio el personaje salta
        if (this.#teclasPresionadas['w'] || this.#teclasPresionadas['W'] || this.#teclasPresionadas[' ']) {
            this.#personaje.saltar();
        }

        // actualizamos la posicion del personaje (aplica gravedad, movimiento, etc)
        this.#personaje.actualizar();

        // comprobamos si el personaje toca algun libro
        // primero obtenemos los limites (posicion y tamaño) del personaje
        const limitesPersonaje = this.#personaje.getBounds();
        
        // recorremos todos los libros con un for clasico
        // no usamos forEach porque necesitamos modificar el array mientras lo recorremos
        for (let indice = 0; indice < this.#listaLibros.length; indice++) {
            const libroActual = this.#listaLibros[indice];
            const limitesLibro = libroActual.getBounds();

            // si hay colision entre el personaje y este libro...
            if (this.#detectarColision(limitesPersonaje, limitesLibro)) {
                libroActual.eliminar(); // quitamos el libro del html
                
                // lo eliminamos tambien del array con splice
                this.#listaLibros.splice(indice, 1);
                indice--; // bajamos el indice 1 porque el array ahora es mas pequeño

                // sumamos un punto y actualizamos el marcador
                this.#puntos++;
                this.actualizarPuntuacion();

                // metemos un libro nuevo para que siempre haya 5 en pantalla
                this.#listaLibros.push(new LibroJuego(this.#contenedorJuego));

                // si llega a 10 puntos ha ganado
                if (this.#puntos >= 10) {
                    this.detener(); // paramos el juego
                    alert("¡Felicidades! Has completado ODS 4 recogiendo 10 libros.");
                    return; // salimos del metodo para que no siga ejecutandose
                }
            }
        }
    }

    // se ejecuta cuando el usuario pulsa una tecla
    #manejarKeyDown(evento) {
        // marcamos esa tecla como pulsada en el objeto
        this.#teclasPresionadas[evento.key] = true;
        // evitamos que el navegador haga cosas raras con estas teclas
        // por ejemplo el espacio hace scroll y no queremos eso
        if (evento.key === ' ' || evento.key === 'w' || evento.key === 'W' || evento.key === 'a' || evento.key === 'A' || evento.key === 's' || evento.key === 'S' || evento.key === 'd' || evento.key === 'D') {
            evento.preventDefault();
        }
    }

    // se ejecuta cuando el usuario suelta una tecla
    #manejarKeyUp(evento) {
        // la marcamos como no pulsada
        this.#teclasPresionadas[evento.key] = false;
    }

    // metodo para detectar si dos rectangulos se tocan
    // recibe los limites de dos elementos y devuelve true si colisionan
    // esta formula la busque por internet y funciona bien para colisiones rectangulares
    #detectarColision(rectangulo1, rectangulo2) {
        return rectangulo1.x < rectangulo2.x + rectangulo2.width &&
               rectangulo1.x + rectangulo1.width > rectangulo2.x &&
               rectangulo1.y < rectangulo2.y + rectangulo2.height &&
               rectangulo1.y + rectangulo1.height > rectangulo2.y;
    }

    // actualiza el texto del marcador en el html
    actualizarPuntuacion() {
        this.#elementoPuntuacion.innerText = "Libros recogidos: " + this.#puntos;
    }
}