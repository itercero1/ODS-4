// Array donde se guardan los libros
const libros = [];

// ==============================
// CREAR
// ==============================

// Se ejecuta cuando el usuario hace clic en "Guardar libro"
document.getElementById("formLibro").addEventListener("submit", function(evento) {

  // Evita que la página se recargue
  evento.preventDefault();
  console.log("Formulario enviado");

  // Leer los valores del formulario
  const titulo      = document.getElementById("titulo").value;
  const autor       = document.getElementById("autor").value;
  const fecha       = document.getElementById("fecha").value;
  const categoria   = document.getElementById("categoria").value;
  const descripcion = document.getElementById("descripcion").value;
  console.log("Título leído:", titulo);
  console.log("Autor leído:", autor);
  console.log("Fecha leída:", fecha);
  console.log("Categoría leída:", categoria);
  console.log("Descripción leída:", descripcion);

  // Leer el radio seleccionado
  let idioma = "";
  const idiomaSeleccionado = document.querySelector("input[name='idioma']:checked");
  if (idiomaSeleccionado != null) {
    idioma = idiomaSeleccionado.value;
  }
  console.log("Idioma leído:", idioma);

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
  console.log("Disponibilidad leída:", disponibilidad);

  // Validación básica
  if (titulo == "") {
    console.log("Error: título vacío");
    alert("El título es obligatorio.");
    return;
  }
  if (autor == "") {
    console.log("Error: autor vacío");
    alert("El autor es obligatorio.");
    return;
  }
  console.log("Validación correcta");

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
  console.log("Objeto libro creado:", libro);

  // Guardar en el array
  libros.push(libro);
  console.log("Libro añadido al array");
  console.log("Array completo:", libros);

  // Mostrar el libro en pantalla
  mostrarLibro(libro);

  // Limpiar el formulario
  document.getElementById("formLibro").reset();
  console.log("Formulario limpiado");

});

// ==============================
// LISTAR
// ==============================

// Muestra un libro como una tarjeta en el HTML
function mostrarLibro(libro) {

  console.log("Ejecutando mostrarLibro con:", libro);

  // Ocultar el mensaje "No hay libros"
  document.getElementById("vacio").style.display = "none";
  console.log("Mensaje vacío ocultado");

  // Crear la tarjeta contenedora
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";
  console.log("Tarjeta creada");

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

  console.log("Párrafos añadidos a la tarjeta");

  // Añadir la tarjeta al contenedor de la lista
  document.getElementById("contenedor").appendChild(tarjeta);
  console.log("Tarjeta añadida a la página");

}