import Libro from './libros.js';

export default class ModeloLibreria {
    #libros;
    #indiceEditar;

    constructor() {
        this.#libros = [];
        this.#indiceEditar = -1;
    }

    agregarLibro(libroData) {
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
            this.#libros.push(libro);
        } else {
            this.#libros[this.#indiceEditar] = libro;
            this.#indiceEditar = -1;
        }
        
        this.renderizarLibros();
    }

    eliminarLibro(indice) {
        if (confirm(`¿Seguro que quieres eliminar "${this.#libros[indice].titulo}"?`)) {
            this.#libros.splice(indice, 1);
            this.renderizarLibros();
        }
    }

    editarLibro(indice) {
        this.#indiceEditar = indice;
        return this.#libros[indice];
    }

    getLibros() {
        return this.#libros;
    }

    renderizarLibros() {
        const contenedor = document.querySelector("#contenedor");
        if (!contenedor) return;
        
        contenedor.innerHTML = '';

        const vacio = document.querySelector("#vacio");
        if (this.#libros.length === 0) {
            if (vacio) vacio.style.display = "block";
        } else {
            if (vacio) vacio.style.display = "none";
        }

        this.#libros.forEach((libro, indice) => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";
            tarjeta.innerHTML = `
                <h3>${this.escaparHTML(libro.titulo)}</h3>
                <p><strong>Autor:</strong> ${this.escaparHTML(libro.autor)}</p>
                <p><strong>Fecha:</strong> ${libro.fecha || 'No especificada'}</p>
                <p><strong>Categoría:</strong> ${libro.categoria || 'No especificada'}</p>
                <p><strong>Idioma:</strong> ${libro.idioma || 'No especificado'}</p>
                <p><strong>Disponible en:</strong> ${libro.disponibilidad || 'No especificado'}</p>
                <p><strong>Descripción:</strong> ${this.escaparHTML(libro.descripcion || 'Sin descripción')}</p>
            `;

            const btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            btnEditar.onclick = () => {
                const libroAEditar = this.editarLibro(indice);
                document.querySelector("#titulo").value = libroAEditar.titulo;
                document.querySelector("#autor").value = libroAEditar.autor;
                document.querySelector("#fecha").value = libroAEditar.fecha;
                document.querySelector("#categoria").value = libroAEditar.categoria;
                document.querySelector("#descripcion").value = libroAEditar.descripcion;

                const radios = document.querySelectorAll("input[name='idioma']");
                radios.forEach(radio => {
                    radio.checked = (radio.value === libroAEditar.idioma);
                });

                document.querySelector("#chkFisico").checked = libroAEditar.disponibilidad && libroAEditar.disponibilidad.includes("Físico");
                document.querySelector("#chkDigital").checked = libroAEditar.disponibilidad && libroAEditar.disponibilidad.includes("Digital");
                document.querySelector("#chkAudio").checked = libroAEditar.disponibilidad && libroAEditar.disponibilidad.includes("Audiolibro");

                if (window.mostrarVista) {
                    window.mostrarVista('vistaFormulario');
                }
            };
            tarjeta.appendChild(btnEditar);

            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.className = "btnEliminar";
            btnEliminar.onclick = () => this.eliminarLibro(indice);
            tarjeta.appendChild(btnEliminar);

            contenedor.appendChild(tarjeta);
        });
    }

    escaparHTML(texto) {
        if (!texto) return '';
        const div = document.createElement('div');
        div.textContent = texto;
        return div.innerHTML;
    }
}