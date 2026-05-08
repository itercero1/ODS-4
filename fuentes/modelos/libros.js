// clase que representa un libro de la libreria
// es un modelo, solo guarda los datos, no hace nada mas
export default class Libro {

    // el constructor recibe todos los datos del libro y los guarda como atributos
    constructor(titulo, autor, fecha, categoria, idioma, disponibilidad, descripcion) {
        this.titulo = titulo;
        this.autor = autor;
        this.fecha = fecha;
        this.categoria = categoria;
        this.idioma = idioma;
        this.disponibilidad = disponibilidad;
        this.descripcion = descripcion;
    }
}