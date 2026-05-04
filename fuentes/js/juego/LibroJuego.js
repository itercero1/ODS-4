export default class LibroJuego {
    #elementoLibro;
    #posicionX;
    #posicionY;
    #contenedorJuego;

    constructor(contenedorJuego) {
        this.#contenedorJuego = contenedorJuego;
        this.#elementoLibro = document.createElement('div');
        this.#elementoLibro.classList.add('libro-juego');
        this.#contenedorJuego.appendChild(this.#elementoLibro);

        const anchoContenedor = this.#contenedorJuego.clientWidth;
        const altoContenedor = this.#contenedorJuego.clientHeight;

        this.#posicionX = Math.random() * (anchoContenedor - 30);
        // Ajustar altura para que sea alcanzable (entre 180 y el suelo)
        this.#posicionY = 180 + Math.random() * (altoContenedor - 180 - 40);

        this.#elementoLibro.style.left = this.#posicionX + 'px';
        this.#elementoLibro.style.top = this.#posicionY + 'px';
        this.#elementoLibro.textContent = "📖"; // Emoji de libro
        this.#elementoLibro.style.display = "flex";
        this.#elementoLibro.style.justifyContent = "center";
        this.#elementoLibro.style.alignItems = "center";
        this.#elementoLibro.style.fontSize = "20px";
    }

    getBounds() {
        return {
            x: this.#posicionX,
            y: this.#posicionY,
            width: 30,
            height: 35
        };
    }

    eliminar() {
        this.#elementoLibro.remove();
    }
}
