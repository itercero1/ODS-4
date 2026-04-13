// array de libros
var libros = [];

// para saber si estamos editando un libro o creando uno nuevo
var indiceEditar = -1;


// esta funcion muestra una vista y oculta las demas
function mostrarVista(cual) {
    document.getElementById("vistaFormulario").style.display = "none"
    document.getElementById("vistaHistorial").style.display = "none"
    document.getElementById("vistaJuego").style.display = "none"

    document.getElementById(cual).style.display = "block"
}

// al abrir la pagina mostramos el formulario
mostrarVista("vistaFormulario")



// cuando se pulsa guardar libro
document.getElementById("formLibro").addEventListener("submit", function(e) {

    e.preventDefault()

    // cogemos los valores
    var tit = document.getElementById("titulo").value
    var aut = document.getElementById("autor").value
    var fec = document.getElementById("fecha").value
    var cat = document.getElementById("categoria").value
    var des = document.getElementById("descripcion").value

    // miramos que radio esta marcado
    var idi = ""
    var radios = document.querySelectorAll("input[name='idioma']")
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            idi = radios[i].value
        }
    }

    // checkboxes
    var disp = ""
    if (document.getElementById("chkFisico").checked) {
        disp = disp + "Físico "
    }
    if (document.getElementById("chkDigital").checked) {
        disp = disp + "Digital "
    }
    if (document.getElementById("chkAudio").checked) {
        disp = disp + "Audiolibro "
    }

    // validar que no este vacio
    if (tit == "") {
        alert("El título es obligatorio.")
        return
    }
    if (aut == "") {
        alert("El autor es obligatorio.")
        return
    }

    // crear el objeto
    var libro = {
        titulo: tit,
        autor: aut,
        fecha: fec,
        categoria: cat,
        idioma: idi,
        disponibilidad: disp,
        descripcion: des
    }

    // si estamos editando machacamos el libro, si no lo añadimos
    if (indiceEditar == -1) {
        libros.push(libro)
    } else {
        libros[indiceEditar] = libro
        indiceEditar = -1
    }

    document.getElementById("formLibro").reset()

    mostrarVista("vistaHistorial")

    pintarLibros()

})


// pinta todos los libros del array en pantalla
function pintarLibros() {

    var contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = ""

    if (libros.length == 0) {
        document.getElementById("vacio").style.display = "block"
        return
    }

    document.getElementById("vacio").style.display = "none"

    for (var i = 0; i < libros.length; i++) {
        ponerLibro(libros[i], i)
    }
}


function ponerLibro(libro, indice) {

    var caja = document.createElement("div")
    caja.className = "tarjeta"

    // titulo
    var p1 = document.createElement("p")
    p1.textContent = "Título: " + libro.titulo
    caja.appendChild(p1)

    var p2 = document.createElement("p")
    p2.textContent = "Autor: " + libro.autor
    caja.appendChild(p2)

    var p3 = document.createElement("p")
    p3.textContent = "Fecha: " + libro.fecha
    caja.appendChild(p3)

    var p4 = document.createElement("p")
    p4.textContent = "Categoría: " + libro.categoria
    caja.appendChild(p4)

    var p5 = document.createElement("p")
    p5.textContent = "Idioma: " + libro.idioma
    caja.appendChild(p5)

    var p6 = document.createElement("p")
    p6.textContent = "Disponible en: " + libro.disponibilidad
    caja.appendChild(p6)

    var p7 = document.createElement("p")
    p7.textContent = "Descripción: " + libro.descripcion
    caja.appendChild(p7)

    // boton editar
    var btnE = document.createElement("button")
    btnE.textContent = "Editar"
    btnE.onclick = function() {
        editarLibro(indice)
    }
    caja.appendChild(btnE)

    // boton eliminar
    var btnX = document.createElement("button")
    btnX.textContent = "Eliminar"
    btnX.style.backgroundColor = "#e74c3c"
    btnX.style.color = "white"
    btnX.onclick = function() {
        borrarLibro(indice)
    }
    caja.appendChild(btnX)

    document.getElementById("contenedor").appendChild(caja)
}


// eliminar un libro con confirmacion
function borrarLibro(indice) {
    var ok = confirm("¿Seguro que quieres eliminar \"" + libros[indice].titulo + "\"?")
    if (ok) {
        libros.splice(indice, 1)
        pintarLibros()
    }
}


// editar: carga los datos en el formulario
function editarLibro(indice) {

    var l = libros[indice]

    document.getElementById("titulo").value = l.titulo
    document.getElementById("autor").value = l.autor
    document.getElementById("fecha").value = l.fecha
    document.getElementById("categoria").value = l.categoria
    document.getElementById("descripcion").value = l.descripcion

    // poner el radio correcto
    var radios = document.querySelectorAll("input[name='idioma']")
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value == l.idioma) {
            radios[i].checked = true
        } else {
            radios[i].checked = false
        }
    }

    // checkboxes
    document.getElementById("chkFisico").checked  = l.disponibilidad.includes("Físico")
    document.getElementById("chkDigital").checked = l.disponibilidad.includes("Digital")
    document.getElementById("chkAudio").checked   = l.disponibilidad.includes("Audiolibro")

    indiceEditar = indice

    mostrarVista("vistaFormulario")
}
