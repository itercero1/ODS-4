export default class Personaje {
    #elementoPersonaje;
    #posicionX;
    #posicionY;
    #velocidadX;
    #velocidadY;
    #contenedorJuego;
    #gravedad = 0.5;
    #estaSaltando = false;

    constructor(contenedorJuego) {
        this.#contenedorJuego = contenedorJuego;
        this.#elementoPersonaje = document.createElement('div');
        this.#elementoPersonaje.classList.add('personaje');
        this.#contenedorJuego.appendChild(this.#elementoPersonaje);

        this.#posicionX = 50;
        this.#posicionY = 0;
        this.#velocidadX = 0;
        this.#velocidadY = 0;

        this.render();
    }

    actualizar() {
        // Aplicar gravedad
        this.#velocidadY += this.#gravedad;
        this.#posicionY += this.#velocidadY;

        // Colisión con el suelo
        const altoContenedor = this.#contenedorJuego.clientHeight;
        if (this.#posicionY + 60 > altoContenedor) {
            this.#posicionY = altoContenedor - 60;
            this.#velocidadY = 0;
            this.#estaSaltando = false;
        }

        // Límites horizontales
        this.#posicionX += this.#velocidadX;
        const anchoContenedor = this.#contenedorJuego.clientWidth;
        if (this.#posicionX < 0) this.#posicionX = 0;
        if (this.#posicionX + 50 > anchoContenedor) this.#posicionX = anchoContenedor - 50;

        this.render();
    }

    render() {
        this.#elementoPersonaje.style.left = this.#posicionX + 'px';
        this.#elementoPersonaje.style.top = this.#posicionY + 'px';
    }

    setVelocidadX(nuevaVelocidadX) {
        this.#velocidadX = nuevaVelocidadX;
    }

    saltar() {
        if (!this.#estaSaltando) {
            this.#velocidadY = -14;
            this.#estaSaltando = true;
        }
    }

    getBounds() {
        return {
            x: this.#posicionX,
            y: this.#posicionY,
            width: 50,
            height: 60
        };
    }

    destruir() {
        this.#elementoPersonaje.remove();
    }
}
