// Array donde se guardan los libros
const libros = [];

// Para saber si estamos editando un libro o creando uno nuevo
let indiceEditar = -1;

// ==============================
// VISTAS
// ==============================

// Muestra la vista indicada y oculta las demás
function mostrarVista(vistaId) {
  document.getElementById("vistaFormulario").style.display = "none";
  document.getElementById("vistaHistorial").style.display  = "none";
  document.getElementById("vistaJuego").style.display      = "none";

  document.getElementById(vistaId).style.display = "block";
}

// Al cargar la página se muestra el formulario por defecto
mostrarVista("vistaFormulario");

// ==============================
// CREAR / ACTUALIZAR
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

  // Si estamos editando machacamos el libro, si no lo añadimos
  if (indiceEditar == -1) {
    libros.push(libro);
  } else {
    libros[indiceEditar] = libro;
    indiceEditar = -1;
  }

  // Limpiar el formulario
  document.getElementById("formLibro").reset();

  // Cambiar a la vista del historial
  mostrarVista("vistaHistorial");

  // Volver a pintar todo el historial
  renderizarLibros();

});

// ==============================
// LISTAR
// ==============================

// Vuelve a pintar todos los libros del array
function renderizarLibros() {

  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  if (libros.length == 0) {
    document.getElementById("vacio").style.display = "block";
    return;
  }

  document.getElementById("vacio").style.display = "none";

  for (let i = 0; i < libros.length; i++) {
    mostrarLibro(libros[i], i);
  }
}

// Muestra un libro como una tarjeta en el historial
function mostrarLibro(libro, indice) {

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

  // ==============================
  // BOTONES (EDITAR / ELIMINAR)
  // ==============================

  const btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";
  btnEditar.onclick = function() {
    editarLibro(indice);
  };
  tarjeta.appendChild(btnEditar);

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.style.backgroundColor = "#e74c3c";
  btnEliminar.style.color = "white";
  btnEliminar.onclick = function() {
    eliminarLibro(indice);
  };
  tarjeta.appendChild(btnEliminar);

  // Añadir la tarjeta al contenedor del historial
  document.getElementById("contenedor").appendChild(tarjeta);
}

// ==============================
// ELIMINAR
// ==============================

function eliminarLibro(indice) {
  const confirmado = confirm("¿Seguro que quieres eliminar \"" + libros[indice].titulo + "\"?");
  if (confirmado) {
    libros.splice(indice, 1);
    renderizarLibros();
  }
}

// ==============================
// EDITAR
// ==============================

function editarLibro(indice) {

  const libro = libros[indice];

  // Rellenar los campos de texto
  document.getElementById("titulo").value      = libro.titulo;
  document.getElementById("autor").value       = libro.autor;
  document.getElementById("fecha").value       = libro.fecha;
  document.getElementById("categoria").value   = libro.categoria;
  document.getElementById("descripcion").value = libro.descripcion;

  // Marcar el radio del idioma
  const radios = document.querySelectorAll("input[name='idioma']");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].value == libro.idioma) {
      radios[i].checked = true;
    } else {
      radios[i].checked = false;
    }
  }

  // Marcar los checkboxes de disponibilidad
  document.getElementById("chkFisico").checked  = libro.disponibilidad.includes("Físico");
  document.getElementById("chkDigital").checked = libro.disponibilidad.includes("Digital");
  document.getElementById("chkAudio").checked   = libro.disponibilidad.includes("Audiolibro");

  // Guardar el índice para saber que estamos editando
  indiceEditar = indice;

  mostrarVista("vistaFormulario");
}