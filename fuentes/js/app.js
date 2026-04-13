// Array donde se guardan los libros
const libros = [];

// ==============================
// VISTAS
// ==============================

// Muestra la vista indicada y oculta la otra
function mostrarVista(vistaId) {
  document.getElementById("vistaFormulario").style.display = "none";
  document.getElementById("vistaHistorial").style.display  = "none";

  document.getElementById(vistaId).style.display = "block";
}

// Al cargar la página se muestra el formulario por defecto
mostrarVista("vistaFormulario");

// ==============================
// CREAR
// ==============================

// Se ejecuta cuando el usuario hace clic en "Guardar libro"
document.getElementById("formLibro").addEventListener("submit", function(evento) {

  // Evita que la página se recargue
  evento.preventDefault();

  // Leer los valores del formulario
  const titulo      = document.getElementById("titulo").value;
  const autor       = document.getElementById("autor").value;
  const fecha       = document.getElementById("fecha").value;
  const categoria   = document.getElementById("categoria").value;
  const descripcion = document.getElementById("descripcion").value;

  // Leer el radio seleccionado
  let idioma = "";
  const idiomaSeleccionado = document.querySelector("input[name='idioma']:checked");
  if (idiomaSeleccionado != null) {
    idioma = idiomaSeleccionado.value;
  }

  // Leer los checkboxes marcados
  let disponibilidad = "";
  if (document.getElementById("chkFisico").checked) {
    disponibilidad = disponibilidad + "Físico ";
  }
  if (document.getElementById("chkDigital").checked) {
    disponibilidad = disponibilidad + "Digital ";
  }
  if (document.getElementById("chkAudio").checked) {
    disponibilidad = disponibilidad + "Audiolibro ";
  }

  // Validación básica
  if (titulo == "") {
    alert("El título es obligatorio.");
    return;
  }
  if (autor == "") {
    alert("El autor es obligatorio.");
    return;
  }

  // Crear el objeto libro
  const libro = {
    titulo:         titulo,
    autor:          autor,
    fecha:          fecha,
    categoria:      categoria,
    idioma:         idioma,
    disponibilidad: disponibilidad,
    descripcion:    descripcion
  };

  // Guardar en el array
  libros.push(libro);

  // Mostrar el libro en el historial
  mostrarLibro(libro);

  // Limpiar el formulario
  document.getElementById("formLibro").reset();

  // Cambiar a la vista del historial para que el usuario vea el libro añadido
  mostrarVista("vistaHistorial");

});

// ==============================
// LISTAR
// ==============================

// Muestra un libro como una tarjeta en el historial
function mostrarLibro(libro) {

  // Ocultar el mensaje "No hay libros"
  document.getElementById("vacio").style.display = "none";

  // Crear la tarjeta contenedora
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  // Crear un párrafo por cada dato y añadirlo a la tarjeta
  const pTitulo = document.createElement("p");
  pTitulo.textContent = "Título: " + libro.titulo;
  tarjeta.appendChild(pTitulo);

  const pAutor = document.createElement("p");
  pAutor.textContent = "Autor: " + libro.autor;
  tarjeta.appendChild(pAutor);

  const pFecha = document.createElement("p");
  pFecha.textContent = "Fecha: " + libro.fecha;
  tarjeta.appendChild(pFecha);

  const pCategoria = document.createElement("p");
  pCategoria.textContent = "Categoría: " + libro.categoria;
  tarjeta.appendChild(pCategoria);

  const pIdioma = document.createElement("p");
  pIdioma.textContent = "Idioma: " + libro.idioma;
  tarjeta.appendChild(pIdioma);

  const pDisponibilidad = document.createElement("p");
  pDisponibilidad.textContent = "Disponible en: " + libro.disponibilidad;
  tarjeta.appendChild(pDisponibilidad);

  const pDescripcion = document.createElement("p");
  pDescripcion.textContent = "Descripción: " + libro.descripcion;
  tarjeta.appendChild(pDescripcion);

  // Añadir la tarjeta al contenedor del historial
  document.getElementById("contenedor").appendChild(tarjeta);

}
