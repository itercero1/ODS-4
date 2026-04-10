// app.js — Controlador CRUD (POC)

const modelo   = new ModeloJugador();
let editandoId = null;

document.addEventListener("DOMContentLoaded", () => renderTabla());

// CREATE / UPDATE
function guardar() {
  const nombre = document.getElementById("nombre").value.trim();
  const email  = document.getElementById("email").value.trim();
  const nivel      = document.getElementById("nivel").value;
  const puntuacion = document.getElementById("puntuacion").value;

  if (!nombre) { toast("El nombre es obligatorio.", true); return; }
  if (!email)  { toast("El email es obligatorio.", true);  return; }

  if (editandoId) {
    modelo.actualizar(editandoId, nombre, email, nivel, puntuacion);
    toast("Jugador actualizado.");
  } else {
    modelo.crear(nombre, email, nivel, puntuacion);
    toast("Jugador creado.");
  }

  cancelar();
  renderTabla();
}

// READ
function renderTabla() {
  const lista = modelo.obtenerTodos();
  const tbody = document.getElementById("tbody");

  if (lista.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="vacio">Sin jugadores. Añade uno arriba.</td></tr>`;
    return;
  }

  tbody.innerHTML = lista.map(j => `
    <tr>
      <td>${esc(j.nombre)}</td>
      <td>${esc(j.email)}</td>
      <td>${j.nivel}</td>
      <td>${j.puntuacion}</td>
      <td class="acciones">
        <button class="btn-editar" onclick="cargarEdicion('${j.id}')">Editar</button>
        <button class="btn-borrar" onclick="eliminar('${j.id}')">Borrar</button>
      </td>
    </tr>
  `).join("");
}

// UPDATE — carga datos en el formulario
function cargarEdicion(id) {
  const j = modelo.obtenerPorId(id);
  if (!j) return;
  editandoId = id;
  document.getElementById("nombre").value     = j.nombre;
  document.getElementById("email").value      = j.email;
  document.getElementById("nivel").value      = j.nivel;
  document.getElementById("puntuacion").value = j.puntuacion;
  document.getElementById("formTitulo").textContent = "Editar jugador";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// DELETE
function eliminar(id) {
  if (!confirm("¿Eliminar este jugador?")) return;
  modelo.eliminar(id);
  toast("Jugador eliminado.");
  renderTabla();
}

function cancelar() {
  editandoId = null;
  document.getElementById("nombre").value     = "";
  document.getElementById("email").value      = "";
  document.getElementById("nivel").value      = "principiante";
  document.getElementById("puntuacion").value = "0";
  document.getElementById("formTitulo").textContent = "Añadir jugador";
}

function toast(msg, error = false) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = "toast " + (error ? "toast-error" : "toast-ok") + " show";
  setTimeout(() => t.classList.remove("show"), 2400);
}

function esc(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
