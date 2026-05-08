// clase que representa al personaje que controla el jugador
export default class Personaje {
    // atributos privados del personaje
    #elementoPersonaje;       // el div que se ve en pantalla
    #posicionX;               // posicion horizontal
    #posicionY;               // posicion vertical
    #velocidadX;              // velocidad horizontal (negativa = izquierda, positiva = derecha)
    #velocidadY;              // velocidad vertical (negativa = sube, positiva = baja)
    #contenedorJuego;         // el contenedor donde esta el personaje
    #gravedad = 0.5;          // cuanto cae el personaje cada tick, si lo subes cae mas rapido
    #estaSaltando = false;    // para saber si ya esta en el aire y no saltar dos veces

    // el constructor recibe el contenedor del juego donde se va a meter el personaje
    constructor(contenedorJuego) {
        this.#contenedorJuego = contenedorJuego;

        // creamos el div del personaje y le ponemos su clase de css
        this.#elementoPersonaje = document.createElement('div');
        this.#elementoPersonaje.classList.add('personaje');

        // lo añadimos al contenedor para que se vea en pantalla
        this.#contenedorJuego.appendChild(this.#elementoPersonaje);

        // posicion inicial del personaje, empieza en la izquierda arriba del todo
        this.#posicionX = 50;
        this.#posicionY = 0;

        // velocidades iniciales a 0 porque no se esta moviendo todavia
        this.#velocidadX = 0;
        this.#velocidadY = 0;

        // lo pintamos en su posicion inicial
        this.render();
    }

    // se llama cada tick para actualizar la posicion del personaje
    actualizar() {
        // aplicamos la gravedad sumandola a la velocidad vertical
        // asi cada tick cae un poco mas rapido (efecto de caida real)
        this.#velocidadY += this.#gravedad;
        this.#posicionY += this.#velocidadY;

        // comprobamos si el personaje ha llegado al suelo
        const altoContenedor = this.#contenedorJuego.clientHeight;
        if (this.#posicionY + 60 > altoContenedor) {
            // lo ponemos justo encima del suelo para que no se salga
            this.#posicionY = altoContenedor - 60;
            this.#velocidadY = 0;          // paramos la caida
            this.#estaSaltando = false;    // ya puede volver a saltar
        }

        // movimiento horizontal y comprobacion de limites laterales
        this.#posicionX += this.#velocidadX;
        const anchoContenedor = this.#contenedorJuego.clientWidth;

        // que no se salga por la izquierda
        if (this.#posicionX < 0) this.#posicionX = 0;
        // que no se salga por la derecha (restamos 50 que es el ancho del personaje)
        if (this.#posicionX + 50 > anchoContenedor) this.#posicionX = anchoContenedor - 50;

        // actualizamos la posicion visual
        this.render();
    }

    // pinta el personaje en su posicion actual modificando el css
    render() {
        this.#elementoPersonaje.style.left = this.#posicionX + 'px';
        this.#elementoPersonaje.style.top = this.#posicionY + 'px';
    }

    // cambia la velocidad horizontal del personaje (lo llama el controlador segun las teclas)
    setVelocidadX(nuevaVelocidadX) {
        this.#velocidadX = nuevaVelocidadX;
    }

    // hace saltar al personaje si no esta ya saltando
    saltar() {
        if (!this.#estaSaltando) {
            this.#velocidadY = -14;       // velocidad negativa para que suba
            this.#estaSaltando = true;    // marcamos que esta saltando para no saltar en el aire
        }
    }

    // devuelve la posicion y tamaño del personaje para las colisiones
    // igual que en LibroJuego, el ancho y alto son fijos
    getBounds() {
        return {
            x: this.#posicionX,
            y: this.#posicionY,
            width: 50,    // ancho del personaje
            height: 60    // alto del personaje
        };
    }

    // elimina el personaje del html, se usa cuando se reinicia el juego
    destruir() {
        this.#elementoPersonaje.remove();
    }
}