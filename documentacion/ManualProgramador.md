# Manual de Programador
## Proyecto ODS-4 – Educación de Calidad

**Autores:** Alejandro, Iván y Alberto
**Curso:** 1º DAW
**Versión:** 1.0

---

## Índice

1. [Descripción del proyecto](#descripción-del-proyecto)
2. [Tecnologías utilizadas](#tecnologías-utilizadas)
3. [Estructura de archivos](#estructura-de-archivos)
4. [Arquitectura MVC](#arquitectura-mvc)
5. [Descripción de cada clase](#descripción-de-cada-clase)
6. [Flujo de la aplicación](#flujo-de-la-aplicación)
7. [El minijuego: funcionamiento técnico](#el-minijuego-funcionamiento-técnico)
8. [Estilos CSS](#estilos-css)
9. [Cómo ampliar el proyecto](#cómo-ampliar-el-proyecto)

---

## 1. Descripción del proyecto

ODS-4 es una aplicación web de página única (SPA) desarrollada en JavaScript vanilla con módulos ES6. Permite gestionar una librería personal y cuenta con un minijuego de plataformas sencillo. El proyecto está enmarcado en el Objetivo de Desarrollo Sostenible número 4 (Educación de Calidad) de la ONU.

No utiliza ningún framework externo. Todo está desarrollado con HTML, CSS y JavaScript puro.

---

## 2. Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la página |
| CSS3 | Estilos, animaciones y diseño responsivo |
| JavaScript ES6+ | Lógica de la aplicación |
| Módulos ES6 (`import/export`) | Organización del código en clases |
| `setInterval` | Bucle principal del minijuego |

---

## 3. Estructura de archivos

```
proyecto/
├── index.html
├── css/
│   ├── Style.css          # Estilos principales
│   └── juego.css          # Estilos del minijuego
├── js/
│   ├── app.js             # Punto de entrada, inicializa el controlador
│   ├── controladores/
│   │   └── ControladorLibreria.js
│   ├── modelos/
│   │   ├── Libro.js
│   │   └── ModeloLibreria.js
│   └── juego/
│       ├── ControladorJuego.js
│       ├── Personaje.js
│       └── LibroJuego.js
└── img/
    ├── fondomario.jpg
    ├── fondoMario1.jpg
    └── MarioBros.png
```

---

## 4. Arquitectura MVC

El proyecto sigue el patrón **Modelo–Vista–Controlador (MVC)**:

- **Modelo:** contiene los datos y la lógica de negocio (`Libro.js`, `ModeloLibreria.js`).
- **Vista:** es el propio HTML. No existe una clase Vista separada; el modelo renderiza directamente sobre el DOM.
- **Controlador:** recibe los eventos del usuario y coordina el modelo (`ControladorLibreria.js`).

El minijuego tiene su propia mini-arquitectura interna con el mismo esquema: `ControladorJuego` coordina a `Personaje` y `LibroJuego`.

---

## 5. Descripción de cada clase

### `Libro`
Clase modelo simple. Solo almacena los datos de un libro como atributos públicos. No tiene métodos adicionales.

**Atributos:** `titulo`, `autor`, `fecha`, `categoria`, `idioma`, `disponibilidad`, `descripcion`.

---

### `ModeloLibreria`
Gestiona el array de libros y se encarga de renderizarlos en el DOM.

| Método | Descripción |
|---|---|
| `agregarLibro(libroData)` | Crea un objeto `Libro` y lo añade al array. Si `#indiceEditar !== -1`, sobreescribe en lugar de añadir. |
| `eliminarLibro(indice)` | Elimina el libro en la posición indicada tras confirmación del usuario. |
| `editarLibro(indice)` | Guarda el índice a editar y devuelve el libro para precargar el formulario. |
| `getLibros()` | Devuelve el array completo de libros. |
| `renderizarLibros()` | Vacia el contenedor y reconstruye todas las tarjetas desde cero. |
| `escaparHTML(texto)` | Sanitiza texto para evitar inyección de HTML. |

**Atributos privados:** `#libros` (array), `#indiceEditar` (número, -1 por defecto).

---

### `ControladorLibreria`
Punto de unión entre el formulario HTML y el modelo.

| Método | Descripción |
|---|---|
| `constructor()` | Instancia el modelo y el controlador del juego, y llama a `inicializarEventos()`. |
| `inicializarEventos()` | Añade el listener `submit` al formulario. |
| `manejarEnvioFormulario(evento)` | Recoge los datos del formulario, los valida y los envía al modelo. |
| `mostrarVista(vistaId)` | Oculta todas las vistas y muestra la indicada. Gestiona el inicio/parada del juego. |

**Atributos privados:** `#modelo`, `#controladorJuego`.

---

### `ControladorJuego`
Controla el bucle principal del minijuego y la detección de colisiones.

| Método | Descripción |
|---|---|
| `iniciar()` | Reinicia el estado, crea el personaje, genera 5 libros y arranca el `setInterval`. |
| `detener()` | Para el `setInterval` y elimina los listeners de teclado. |
| `#actualizarJuego()` | Se ejecuta cada 20ms. Mueve al personaje, actualiza la física y comprueba colisiones. |
| `#manejarKeyDown(evento)` | Marca la tecla como presionada y previene el scroll del navegador. |
| `#manejarKeyUp(evento)` | Marca la tecla como no presionada. |
| `#detectarColision(r1, r2)` | Algoritmo AABB: comprueba si dos rectángulos se solapan. |
| `actualizarPuntuacion()` | Actualiza el texto del marcador en el DOM. |

**Atributos privados:** `#contenedorJuego`, `#elementoPuntuacion`, `#personaje`, `#listaLibros`, `#puntos`, `#bucleJuego`, `#teclasPresionadas`.

---

### `Personaje`
Representa al jugador. Gestiona su posición, velocidad y física básica.

| Método | Descripción |
|---|---|
| `actualizar()` | Aplica gravedad, mueve el personaje y comprueba límites del contenedor. |
| `render()` | Actualiza el `style.left` y `style.top` del elemento HTML. |
| `setVelocidadX(v)` | Cambia la velocidad horizontal. |
| `saltar()` | Aplica velocidad negativa en Y si el personaje está en el suelo. |
| `getBounds()` | Devuelve `{x, y, width, height}` para la detección de colisiones. |
| `destruir()` | Elimina el elemento del DOM. |

**Atributos privados:** `#posicionX`, `#posicionY`, `#velocidadX`, `#velocidadY`, `#gravedad` (0.5), `#estaSaltando`.

---

### `LibroJuego`
Representa cada libro coleccionable del minijuego.

| Método | Descripción |
|---|---|
| `getBounds()` | Devuelve `{x, y, width: 30, height: 35}`. |
| `eliminar()` | Elimina el elemento del DOM. |

La posición se genera aleatoriamente en el constructor, dentro de los límites del contenedor y en una altura alcanzable por el personaje (entre `180px` y el suelo).

---

## 6. Flujo de la aplicación

```
index.html carga app.js
    └── DOMContentLoaded
        └── new ControladorLibreria()
            ├── new ModeloLibreria()
            ├── new ControladorJuego()
            ├── inicializarEventos()         ← listener en el formulario
            └── mostrarVista('vistaFormulario')

Usuario pulsa "Guardar"
    └── manejarEnvioFormulario()
        ├── recoge datos del formulario
        ├── valida título y autor
        └── modelo.agregarLibro(libro)
            └── renderizarLibros()           ← actualiza el DOM

Usuario pulsa "Historial"
    └── mostrarVista('vistaHistorial')
        └── modelo.renderizarLibros()

Usuario pulsa "Juego"
    └── mostrarVista('vistaJuego')
        └── controladorJuego.iniciar()
            └── setInterval(#actualizarJuego, 20ms)
```

---

## 7. El minijuego: funcionamiento técnico

### Bucle de juego
Se usa `setInterval` con un intervalo de 20ms (equivalente a ~50 FPS). Cada tick llama a `#actualizarJuego()`.

### Física del personaje
La gravedad se simula sumando una constante (`0.5`) a la velocidad vertical en cada tick. Cuando el personaje toca el suelo (`posY + 60 >= alturaContenedor`), la velocidad vertical se resetea a 0 y se permite volver a saltar.

### Detección de colisiones
Se usa el algoritmo **AABB (Axis-Aligned Bounding Box)**: dos rectángulos colisionan si se solapan en ambos ejes simultáneamente.

```javascript
r1.x < r2.x + r2.width  &&
r1.x + r1.width > r2.x  &&
r1.y < r2.y + r2.height &&
r1.y + r1.height > r2.y
```

### Gestión del array de libros
Se usa un `for` clásico en lugar de `forEach` porque se necesita modificar el array durante la iteración (`splice`). Tras eliminar un elemento se decrementa el índice para no saltarse el siguiente.

### Teclas
Se mantiene un objeto `#teclasPresionadas` que registra el estado de cada tecla en tiempo real. Esto permite detectar varias teclas simultáneamente, algo que no sería posible con eventos puntuales.

---

## 8. Estilos CSS

El proyecto tiene dos archivos CSS:

**`Style.css`** — estilos generales de la aplicación:
- Reset básico con `* { box-sizing: border-box; margin: 0; padding: 0; }`.
- Diseño oscuro con fondo de imagen y elementos semitransparentes.
- Paleta principal: azul oscuro (`rgba(15,20,50,...)`) y dorado (`#FFD700`).
- Animaciones: entrada de vistas (`aparecer`), brillo del título (`brilloTitulo`), cascada de tarjetas (`entrarTarjeta`), parpadeo del mensaje vacío (`parpadear`).

**`juego.css`** — estilos exclusivos del minijuego:
- El contenedor usa `position: relative` para que los elementos hijos con `position: absolute` se posicionen respecto a él.
- Los libros tienen animación de rotación y brillo en bucle (`girarLibro`, `brilloLibro`).
- La clase `.subio` en `#puntuacion` activa una animación de rebote — debe añadirse y eliminarse desde JavaScript.

---

## 9. Cómo ampliar el proyecto

**Añadir persistencia de datos:**
Los libros se pierden al recargar la página. Para guardarlos se podría usar `localStorage`:
```javascript
// Guardar
localStorage.setItem('libros', JSON.stringify(this.#libros));

// Recuperar en el constructor
const guardados = localStorage.getItem('libros');
if (guardados) this.#libros = JSON.parse(guardados);
```

**Añadir más niveles al juego:**
Se podría aumentar la dificultad incrementando la velocidad del personaje o añadiendo obstáculos. Bastaría con modificar las constantes de velocidad en `ControladorJuego` y `Personaje`.

**Añadir filtros al historial:**
El método `renderizarLibros()` en `ModeloLibreria` podría recibir un parámetro de filtro y usar `.filter()` sobre `#libros` antes de renderizar.

**Añadir validación más completa:**
Actualmente solo se validan título y autor. Se podría ampliar comprobando la fecha, la longitud mínima de la descripción, etc., dentro de `manejarEnvioFormulario()`.