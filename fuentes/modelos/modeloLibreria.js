// importamos la clase Libro para poder crear objetos de tipo libro
import Libro from './libros.js';

// esta clase es el modelo, se encarga de guardar los libros y mostrarlos en pantalla
export default class ModeloLibreria {
    #libros;         // array donde guardamos todos los libros
    #indiceEditar;   // guarda la posicion del libro que se esta editando, -1 si no hay ninguno

    constructor() {
        this.#libros = [];       // empezamos con la lista vacia
        this.#indiceEditar = -1; // -1 significa que no estamos editando ningun libro
    }

    // añade un libro nuevo o sobreescribe uno existente si estamos en modo edicion
    agregarLibro(libroData) {
        // creamos un objeto Libro con los datos que nos llegan del formulario
        const libro = new Libro(
            libroData.titulo,
            libroData.autor,
            libroData.fecha,
            libroData.categoria,
            libroData.idioma,
            libroData.disponibilidad,
            libroData.descripcion
        );
        
        if (this.#indiceEditar === -1) {
            // si no estamos editando, añadimos el libro al final del array
            this.#libros.push(libro);
        } else {
            // si estamos editando, sustituimos el libro en la posicion guardada
            this.#libros[this.#indiceEditar] = libro;
            this.#indiceEditar = -1; // volvemos a modo "no editando"
        }
        
        // actualizamos la vista para que se vean los cambios
        this.renderizarLibros();
    }

    // elimina el libro de la posicion que le pasamos
    eliminarLibro(indice) {
        // preguntamos al usuario antes de borrar para evitar borrados accidentales
        if (confirm(`¿Seguro que quieres eliminar "${this.#libros[indice].titulo}"?`)) {
            this.#libros.splice(indice, 1); // quitamos el libro del array
            this.renderizarLibros();        // actualizamos la vista
        }
    }

    // marca un libro para editarlo y lo devuelve para rellenar el formulario
    editarLibro(indice) {
        this.#indiceEditar = indice;      // guardamos el indice para saber cual editar luego
        return this.#libros[indice];      // devolvemos el libro para que se carguen sus datos
    }

    // devuelve todos los libros (por si alguien los necesita desde fuera)
    getLibros() {
        return this.#libros;
    }

    // genera las tarjetas de los libros en el html
    renderizarLibros() {
        const contenedor = document.querySelector("#contenedor");
        if (!contenedor) return; // si no existe el contenedor no hacemos nada

        contenedor.innerHTML = ''; // vaciamos el contenedor antes de volver a pintarlo

        // si no hay libros mostramos el mensaje de lista vacia, si hay los escondemos
        const vacio = document.querySelector("#vacio");
        if (this.#libros.length === 0) {
            if (vacio) vacio.style.display = "block";
        } else {
            if (vacio) vacio.style.display = "none";
        }

        // recorremos todos los libros y creamos una tarjeta para cada uno
        this.#libros.forEach((libro, indice) => {
            // creamos el div de la tarjeta
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";

            // metemos el contenido de la tarjeta con template literals
            // usamos escaparHTML para evitar que alguien meta codigo html en los campos
            tarjeta.innerHTML = `
                <h3>${this.escaparHTML(libro.titulo)}</h3>
                <p><strong>Autor:</strong> ${this.escaparHTML(libro.autor)}</p>
                <p><strong>Fecha:</strong> ${libro.fecha || 'No especificada'}</p>
                <p><strong>Categoría:</strong> ${libro.categoria || 'No especificada'}</p>
                <p><strong>Idioma:</strong> ${libro.idioma || 'No especificado'}</p>
                <p><strong>Disponible en:</strong> ${libro.disponibilidad || 'No especificado'}</p>
                <p><strong>Descripción:</strong> ${this.escaparHTML(libro.descripcion || 'Sin descripción')}</p>
            `;

            // boton de editar: carga los datos del libro en el formulario
            const btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            btnEditar.onclick = () => {
                // obtenemos el libro a editar y guardamos su indice
                const libroAEditar = this.editarLibro(indice);

                // rellenamos los campos de texto del formulario con los datos del libro
                document.querySelector("#titulo").value = libroAEditar.titulo;
                document.querySelector("#autor").value = libroAEditar.autor;
                document.querySelector("#fecha").value = libroAEditar.fecha;
                document.querySelector("#categoria").value = libroAEditar.categoria;
                document.querySelector("#descripcion").value = libroAEditar.descripcion;

                // para los radio buttons hay que recorrerlos y marcar el que corresponde
                const radios = document.querySelectorAll("input[name='idioma']");
                radios.forEach(radio => {
                    radio.checked = (radio.value === libroAEditar.idioma);
                });

                // para los checkboxes comprobamos si el string de disponibilidad incluye cada opcion
                document.querySelector("#chkFisico").checked = libroAEditar.disponibilidad && libroAEditar.disponibilidad.includes("Físico");
                document.querySelector("#chkDigital").checked = libroAEditar.disponibilidad && libroAEditar.disponibilidad.includes("Digital");
                document.querySelector("#chkAudio").checked = libroAEditar.disponibilidad && libroAEditar.disponibilidad.includes("Audiolibro");

                // volvemos a la vista del formulario para que el usuario pueda editar
                if (window.mostrarVista) {
                    window.mostrarVista('vistaFormulario');
                }
            };
            tarjeta.appendChild(btnEditar);

            // boton de eliminar
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.className = "btnEliminar";
            btnEliminar.onclick = () => this.eliminarLibro(indice);
            tarjeta.appendChild(btnEliminar);

            // añadimos la tarjeta completa al contenedor
            contenedor.appendChild(tarjeta);
        });
    }

    // metodo para evitar que se ejecute codigo html que el usuario haya escrito en los campos
    // por ejemplo si alguien escribe <script>alert('hola')</script> en el titulo esto lo convierte en texto normal
    // el profe dijo que esto es importante por seguridad aunque en este proyecto tampoco hay mucho riesgo
    escaparHTML(texto) {
        if (!texto) return ''; // si no hay texto devolvemos vacio
        const div = document.createElement('div');
        div.textContent = texto;  // el navegador escapa el html automaticamente al usar textContent
        return div.innerHTML;     // devolvemos el html ya escapado
    }
}