# Manual de Usuario
## Proyecto ODS-4 – Educación de Calidad

**Autores:** Alejandro, Iván y Alberto
**Curso:** 1º DAW
**Versión:** 1.0

---

## Índice

1. [Introducción](#introducción)
2. [Requisitos para usar la aplicación](#requisitos-para-usar-la-aplicación)
3. [Cómo acceder a la aplicación](#cómo-acceder-a-la-aplicación)
4. [Pantalla principal y navegación](#pantalla-principal-y-navegación)
5. [Añadir un libro](#añadir-un-libro)
6. [Ver el historial de libros](#ver-el-historial-de-libros)
7. [Editar un libro](#editar-un-libro)
8. [Eliminar un libro](#eliminar-un-libro)
9. [El minijuego](#el-minijuego)
10. [Preguntas frecuentes](#preguntas-frecuentes)

---

## 1. Introducción

ODS-4 es una aplicación web relacionada con el Objetivo de Desarrollo Sostenible número 4: **Educación de Calidad**. Permite gestionar una librería personal donde puedes registrar libros con sus datos, consultarlos en cualquier momento y disfrutar de un pequeño minijuego educativo.

---

## 2. Requisitos para usar la aplicación

Para usar ODS-4 no necesitas instalar nada. Solo necesitas:

- Un ordenador con conexión a internet (o acceder al archivo local).
- Un navegador web moderno: Google Chrome, Firefox, Edge o Safari.
- Tener activado JavaScript en el navegador (viene activado por defecto).

---

## 3. Cómo acceder a la aplicación

Abre el archivo `index.html` con tu navegador. Puedes hacerlo haciendo doble clic sobre el archivo o arrastrándolo a la ventana del navegador.

Si la aplicación está subida a un servidor, simplemente accede a la URL que te hayan proporcionado.

---

## 4. Pantalla principal y navegación

Al abrir la aplicación verás tres botones en la parte superior:

| Botón | Qué hace |
|---|---|
| **Formulario** | Lleva al formulario para añadir o editar libros |
| **Historial** | Muestra todos los libros guardados |
| **Juego** | Abre el minijuego |

Haz clic en cualquiera de ellos para cambiar de sección. Solo se muestra una sección a la vez.

---

## 5. Añadir un libro

1. Haz clic en el botón **Formulario**.
2. Rellena los campos:
   - **Título** *(obligatorio)*: nombre del libro.
   - **Autor** *(obligatorio)*: nombre del autor o autores.
   - **Fecha**: fecha de publicación.
   - **Categoría**: selecciona una categoría del desplegable.
   - **Idioma**: marca el idioma del libro con el botón de opción correspondiente.
   - **Disponibilidad**: marca una o varias opciones (Físico, Digital, Audiolibro).
   - **Descripción**: escribe una breve descripción del libro.
3. Haz clic en **Guardar**. Aparecerá un mensaje confirmando que el libro se ha guardado correctamente.

> **Nota:** Si dejas el título o el autor en blanco, la aplicación te avisará y no guardará el libro hasta que los rellenes.

---

## 6. Ver el historial de libros

Haz clic en el botón **Historial**. Verás una lista con todos los libros que has guardado. Cada libro aparece en una tarjeta con toda su información.

Si aún no has añadido ningún libro, aparecerá un mensaje indicando que la lista está vacía.

---

## 7. Editar un libro

1. Ve al **Historial**.
2. Busca el libro que quieres modificar y haz clic en su botón **Editar**.
3. El formulario se abrirá automáticamente con los datos del libro cargados.
4. Modifica los campos que necesites y haz clic en **Guardar**.

Los cambios se aplicarán sobre el libro original, no se creará uno nuevo.

---

## 8. Eliminar un libro

1. Ve al **Historial**.
2. Haz clic en el botón **Eliminar** del libro que quieras borrar.
3. Aparecerá una ventana preguntándote si estás seguro.
4. Confirma para eliminar el libro definitivamente.

> **Atención:** Esta acción no se puede deshacer. Una vez eliminado el libro, no se puede recuperar.

---

## 9. El minijuego

Haz clic en el botón **Juego** para acceder al minijuego.

**Objetivo:** mover al personaje por la pantalla para recoger 10 libros y completar el nivel.

**Controles:**

| Tecla | Acción |
|---|---|
| `A` | Mover a la izquierda |
| `D` | Mover a la derecha |
| `W` o `Espacio` | Saltar |

**Reglas:**
- Hay 5 libros en pantalla en todo momento. Cuando recoges uno, aparece otro en un lugar aleatorio.
- Al llegar a 10 libros recogidos, ganarás la partida y aparecerá un mensaje de felicitación.
- El juego se pausa automáticamente si cambias de sección.

---

## 10. Preguntas frecuentes

**¿Se guardan los libros si cierro el navegador?**
No. Los datos se guardan en memoria mientras la página está abierta. Si cierras o recargas el navegador, los libros se borran.

**¿Puedo marcar más de una disponibilidad a la vez?**
Sí. Puedes marcar Físico, Digital y Audiolibro a la vez si el libro está disponible en varios formatos.

**El personaje del juego no se mueve, ¿qué hago?**
Asegúrate de hacer clic dentro del área del juego primero para que el navegador enfoque esa zona, y luego prueba a pulsar las teclas.

**¿Puedo usar el juego en el móvil?**
El minijuego está diseñado para usarse con teclado, por lo que no está adaptado para dispositivos táctiles.