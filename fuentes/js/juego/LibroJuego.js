// clase que representa cada libro que aparece en el juego
export default class LibroJuego {
    // atributos privados
    #elementoLibro;    // el div que se ve en pantalla
    #posicionX;        // posicion horizontal del libro
    #posicionY;        // posicion vertical del libro
    #contenedorJuego;  // el contenedor donde se mete el libro

    // el constructor recibe el contenedor donde tiene que aparecer el libro
    constructor(contenedorJuego) {
        this.#contenedorJuego = contenedorJuego;

        // creamos un div nuevo para el libro y le añadimos su clase css
        this.#elementoLibro = document.createElement('div');
        this.#elementoLibro.classList.add('libro-juego');

        // lo metemos dentro del contenedor del juego
        this.#contenedorJuego.appendChild(this.#elementoLibro);

        // obtenemos el tamaño del contenedor para saber donde puede aparecer el libro
        const anchoContenedor = this.#contenedorJuego.clientWidth;
        const altoContenedor = this.#contenedorJuego.clientHeight;

        // posicion X aleatoria, restamos 30 para que no se salga por la derecha
        this.#posicionX = Math.random() * (anchoContenedor - 30);

        // posicion Y aleatoria pero solo en la zona que el personaje puede alcanzar
        // empieza en 180 para que no aparezca muy arriba y le restamos 40 abajo para que no quede pegado al suelo
        this.#posicionY = 180 + Math.random() * (altoContenedor - 180 - 40);

        // colocamos el libro en su posicion con css
        this.#elementoLibro.style.left = this.#posicionX + 'px';
        this.#elementoLibro.style.top = this.#posicionY + 'px';

        // usamos un emoji de libro como "grafico", asi no hace falta ninguna imagen
        this.#elementoLibro.textContent = "📖";

        // centramos el emoji dentro del div con flexbox
        this.#elementoLibro.style.display = "flex";
        this.#elementoLibro.style.justifyContent = "center";
        this.#elementoLibro.style.alignItems = "center";
        this.#elementoLibro.style.fontSize = "20px";
    }

    // devuelve la posicion y el tamaño del libro para poder detectar colisiones
    // el ancho y alto son fijos porque todos los libros miden lo mismo
    getBounds() {
        return {
            x: this.#posicionX,
            y: this.#posicionY,
            width: 30,   // ancho del libro en pixeles
            height: 35   // alto del libro en pixeles
        };
    }

    // elimina el libro del html cuando el personaje lo recoge
    eliminar() {
        this.#elementoLibro.remove();
    }
}