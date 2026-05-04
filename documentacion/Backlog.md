# Backlog – ODS 4 · Educación de Calidad

> Registro de tareas organizadas por día de trabajo.  
> **Equipo:** Iván · Alberto · Alejandro  
> **Nivel:** 1.º DAW  
> **Periodo:** 22 de abril – 16 de mayo de 2026

---

## 📋 Leyenda de estados

| Símbolo | Significado |
|---------|-------------|
| ✅ | Terminado |
| 🔄 | En proceso |
| ⏳ | Pendiente |
| ❌ | Bloqueado |

---

## Día 1 — 22 abr · Configuración inicial y estructura base

| ID | Tarea | Tipo | Quién | Estado |
|----|-------|------|-------|--------|
| T01 | Crear el repositorio en GitHub | Técnica | Iván | ✅ Terminado |
| T02 | Organizar la estructura de carpetas del proyecto | Técnica | Alberto | ✅ Terminado |
| T03 | Crear el formulario HTML con todos los campos (HU1) | HTML | Alejandro | ✅ Terminado |

---

## Día 2 — 25 abr · Estilos y lógica principal

| ID | Tarea | Tipo | Quién | Estado |
|----|-------|------|-------|--------|
| T04 | Aplicar estilos CSS: layout, colores y formulario (HU5) | CSS | Iván | ✅ Terminado |
| T05 | Implementar crear libro en JavaScript — `agregarLibro()` (HU1) | JS | Alberto | ✅ Terminado |
| T06 | Implementar listar libros en JavaScript — `renderizarLibros()` (HU2) | JS | Alejandro | ✅ Terminado |
| T07 | Redactar borrador del README | Documentación | Iván | ✅ Terminado |

---

## Día 3 — 29 abr · CRUD completo y navegación entre vistas

| ID | Tarea | Tipo | Quién | Estado |
|----|-------|------|-------|--------|
| T08 | Ajustes y mejoras del CSS (tarjetas, hover, responsive) | CSS | Iván y Alberto | ✅ Terminado |
| T09 | Crear las vistas: `vistaFormulario`, `vistaHistorial`, `vistaJuego` (HU5) | HTML/JS | Iván y Alejandro | ✅ Terminado |
| T10 | Completar el CRUD: `editarLibro()` y `eliminarLibro()` (HU3) | JS | Alejandro | ✅ Terminado |
| T11 | Avanzar el README: estructura, historias de usuario y estado | Documentación | Alberto | ✅ Terminado |

---

## Día 4 — 2 may · Diseño y estructura del juego

| ID | Tarea | Tipo | Quién | Estado |
|----|-------|------|-------|--------|
| T12 | Diseñar la mecánica del juego: personaje que recoge libros (HU4) | Diseño | | ✅ Terminado |
| T13 | Crear la carpeta `js/juego/` y los archivos del juego | Técnica |  | ✅ Terminado |
| T14 | Añadir el contenedor y el marcador de puntos en `index.html` (HU4) | HTML |  | ✅ Terminado |
| T15 | Crear `juego.css` con fondo `fondoMario1.jpg` y estilos del personaje | CSS |  | ✅ Terminado |

---

## Día 5 — 6 may · Implementación del juego – Modelos

| ID | Tarea | Tipo | Quién | Estado |
|----|-------|------|-------|--------|
| T16 | Crear la clase `Personaje` con campos privados `#x`, `#y`, `#vy` (HU4) | JS |  | ✅ Terminado |
| T17 | Implementar gravedad y colisión con el suelo en `Personaje.actualizar()` | JS |  | ✅ Terminado |
| T18 | Implementar método `saltar()` con control de `#isJumping` | JS |  | ✅ Terminado |
| T19 | Crear la clase `LibroJuego` con posición aleatoria y método `eliminar()` | JS |  | ✅ Terminado |
| T20 | Ajustar la altura de los libros para que sean alcanzables (HU4) | JS |  | ✅ Terminado |

---

## Día 6 — 9 may · Implementación del juego – Controlador

| ID | Tarea | Tipo | Quién | Estado |
|----|-------|------|-------|--------|
| T21 | Crear `ControladorJuego` con `setInterval` como bucle principal | JS |  | ✅ Terminado |
| T22 | Implementar movimiento WASD con objeto `#teclas` y eventos `keydown/keyup` | JS |  | ✅ Terminado |
| T23 | Corregir bug: `preventDefault()` en teclas de juego para evitar que el espacio reinicie la página | JS | Iván | ✅ Terminado |
| T24 | Implementar detección de colisiones con bucle `for` y `splice()` | JS |  | ✅ Terminado |
| T25 | Añadir condición de victoria al recoger 10 libros (HU4) | JS |  | ✅ Terminado |

---

## Día 7 — 13 may · Integración y pruebas

| ID | Tarea | Tipo | Quién | Estado |
|----|-------|------|-------|--------|
| T26 | Integrar `ControladorJuego` en `ControladorLibreria.mostrarVista()` | JS |  | ✅ Terminado |
| T27 | Usar imagen `MarioBros.png` como sprite del personaje en CSS | CSS |  | ✅ Terminado |
| T28 | Pruebas manuales: formulario, historial y juego completo | Testing |  | 🔄 En proceso |
| T29 | Corregir errores detectados en pruebas | Técnica |  | ⏳ Pendiente |

---

## Día 8 — 15 may · Documentación y cierre

| ID | Tarea | Tipo | Quién | Estado |
|----|-------|------|-------|--------|
| T30 | Actualizar el README con la sección del juego completada | Documentación |  | ⏳ Pendiente |
| T31 | Revisar y completar el `Backlog.md` con el estado final real | Documentación |  | ⏳ Pendiente |
| T32 | Actualizar estructura de carpetas en el README (incluir `js/juego/`) | Documentación |  | ⏳ Pendiente |
| T33 | Revisión final del código: comentarios y limpieza | Técnica |  | ⏳ Pendiente |

---

## Día 9 — 16 may · Entrega

| ID | Tarea | Tipo | Quién | Estado |
|----|-------|------|-------|--------|
| T34 | Subir versión final al repositorio GitHub | Técnica |  | ⏳ Pendiente |
---