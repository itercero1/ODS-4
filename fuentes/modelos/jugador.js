// jugador.js — Modelo de datos (POC)
// Gestiona los jugadores usando localStorage como base de datos.

class Jugador {
  constructor(nombre, email, nivel, puntuacion) {
    this.id          = Date.now().toString();
    this.nombre      = nombre;
    this.email       = email;
    this.nivel       = nivel;
    this.puntuacion  = Number(puntuacion) || 0;
  }
}

class ModeloJugador {
  constructor() {
    this.clave = "quizedu_jugadores";
  }

  // CREATE
  crear(nombre, email, nivel, puntuacion) {
    const lista   = this.obtenerTodos();
    const jugador = new Jugador(nombre, email, nivel, puntuacion);
    lista.push(jugador);
    this._guardar(lista);
    return jugador;
  }

  // READ — todos
  obtenerTodos() {
    const datos = localStorage.getItem(this.clave);
    return datos ? JSON.parse(datos) : [];
  }

  // READ — uno por id
  obtenerPorId(id) {
    return this.obtenerTodos().find(j => j.id === id) || null;
  }

  // READ — con filtros de búsqueda
  buscar(texto, nivel) {
    let lista = this.obtenerTodos();
    if (texto) {
      const t = texto.toLowerCase();
      lista = lista.filter(j =>
        j.nombre.toLowerCase().includes(t) ||
        j.email.toLowerCase().includes(t)
      );
    }
    if (nivel && nivel !== "todos") {
      lista = lista.filter(j => j.nivel === nivel);
    }
    return lista;
  }

  // UPDATE
  actualizar(id, nombre, email, nivel, puntuacion) {
    const lista = this.obtenerTodos();
    const pos   = lista.findIndex(j => j.id === id);
    if (pos === -1) return false;
    lista[pos] = { id, nombre, email, nivel, puntuacion: Number(puntuacion) || 0 };
    this._guardar(lista);
    return true;
  }

  // DELETE
  eliminar(id) {
    const lista = this.obtenerTodos().filter(j => j.id !== id);
    this._guardar(lista);
  }

  _guardar(lista) {
    localStorage.setItem(this.clave, JSON.stringify(lista));
  }
}
