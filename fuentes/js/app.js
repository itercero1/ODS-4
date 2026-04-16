// Array donde se guardan los libros
const libros = [];

// Para saber si estamos editando (-1 = nuevo libro)
let indiceEditar = -1;


// ==============================
// VISTAS
// ==============================

function mostrarVista(vistaId) {
  document.querySelector("#vistaFormulario").style.display = "none";
  document.querySelector("#vistaHistorial").style.display  = "none";
  document.querySelector("#vistaJuego").style.display      = "none";

  document.querySelector("#" + vistaId).style.display = "block";
}

mostrarVista("vistaFormulario");


// ==============================
// CREAR / ACTUALIZAR
// ==============================

document.querySelector("#formLibro").addEventListener("submit", function(evento) {

  evento.preventDefault();

  const titulo      = document.querySelector("#titulo").value;
  const autor       = document.querySelector("#autor").value;
  const fecha       = document.querySelector("#fecha").value;
  const categoria   = document.querySelector("#categoria").value;
  const descripcion = document.querySelector("#descripcion").value;

  // Radio: idioma
  let idioma = "";
  const radioMarcado = document.querySelector("input[name='idioma']:checked");
  if (radioMarcado != null) {
    idioma = radioMarcado.value;
  }

  // Checkboxes: disponibilidad
  let disponibilidad = "";
  if (document.querySelector("#chkFisico").checked)  disponibilidad += "Físico ";
  if (document.querySelector("#chkDigital").checked) disponibilidad += "Digital ";
  if (document.querySelector("#chkAudio").checked)   disponibilidad += "Audiolibro ";

  // Validación
  if (titulo == "") {
    alert("El título es obligatorio.");
    return;
  }
  if (autor == "") {
    alert("El autor es obligatorio.");
    return;
  }

  const libro = { titulo, autor, fecha, categoria, idioma, disponibilidad, descripcion };

  if (indiceEditar == -1) {
    libros.push(libro);
  } else {
    libros[indiceEditar] = libro;
    indiceEditar = -1;
  }

  document.querySelector("#formLibro").reset();
  mostrarVista("vistaHistorial");
  renderizarLibros();

});


// ==============================
// LISTAR
// ==============================

function renderizarLibros() {

  const contenedor = document.querySelector("#contenedor");
  contenedor.innerHTML = "";

  if (libros.length == 0) {
    document.querySelector("#vacio").style.display = "block";
    return;
  }

  document.querySelector("#vacio").style.display = "none";

  for (let i = 0; i < libros.length; i++) {
    mostrarLibro(libros[i], i);
  }
}

function mostrarLibro(libro, indice) {

  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  tarjeta.innerHTML =
    "<p>Título: "        + libro.titulo        + "</p>" +
    "<p>Autor: "         + libro.autor         + "</p>" +
    "<p>Fecha: "         + libro.fecha         + "</p>" +
    "<p>Categoría: "     + libro.categoria     + "</p>" +
    "<p>Idioma: "        + libro.idioma        + "</p>" +
    "<p>Disponible en: " + libro.disponibilidad + "</p>" +
    "<p>Descripción: "   + libro.descripcion   + "</p>";

  const btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";
  btnEditar.onclick = function() { editarLibro(indice); };
  tarjeta.appendChild(btnEditar);

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "btnEliminar";
  btnEliminar.onclick = function() { eliminarLibro(indice); };
  tarjeta.appendChild(btnEliminar);

  document.querySelector("#contenedor").appendChild(tarjeta);
}


// ==============================
// ELIMINAR
// ==============================

function eliminarLibro(indice) {
  if (confirm("¿Seguro que quieres eliminar \"" + libros[indice].titulo + "\"?")) {
    libros.splice(indice, 1);
    renderizarLibros();
  }
}


// ==============================
// EDITAR
// ==============================

function editarLibro(indice) {

  const libro = libros[indice];

  document.querySelector("#titulo").value      = libro.titulo;
  document.querySelector("#autor").value       = libro.autor;
  document.querySelector("#fecha").value       = libro.fecha;
  document.querySelector("#categoria").value   = libro.categoria;
  document.querySelector("#descripcion").value = libro.descripcion;

  // Marcar el radio del idioma
  const radios = document.querySelectorAll("input[name='idioma']");
  for (let i = 0; i < radios.length; i++) {
    radios[i].checked = (radios[i].value == libro.idioma);
  }

  // Marcar los checkboxes
  document.querySelector("#chkFisico").checked  = libro.disponibilidad.includes("Físico");
  document.querySelector("#chkDigital").checked = libro.disponibilidad.includes("Digital");
  document.querySelector("#chkAudio").checked   = libro.disponibilidad.includes("Audiolibro");

  indiceEditar = indice;
  mostrarVista("vistaFormulario");
}