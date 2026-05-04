# ODS 4 – Educación de Calidad

Proyecto web para gestionar libros educativos, desarrollado como parte del trabajo sobre los Objetivos de Desarrollo Sostenible (ODS 4), que busca garantizar una educación de calidad, inclusiva y equitativa para todos.

La aplicación permite registrar libros con metadatos (título, autor, nivel educativo, idioma y formato), consultarlos en un historial interactivo con opciones de edición y eliminación, y acceder a una sección de juego para fomentar el aprendizaje sobre el ODS 4.

---

## 👥 Integrantes

| Nombre|
|--------|
| Iván |
| Alberto | 
| Alejandro |

---

## 🎯 Historias de Usuario

| ID | Historia | Criterios de aceptación |
|----|----------|------------------------|
| HU1 | Como **educador**, quiero registrar libros indicando título, autor, nivel educativo, idioma y formato, para organizar el material didáctico. | El formulario valida que título y autor sean obligatorios. Se muestra alerta si faltan. |
| HU2 | Como **estudiante**, quiero ver el historial de libros disponibles con todos sus datos, para elegir mi próxima lectura. | Los libros se muestran en tarjetas con toda la información. Si no hay libros, aparece un mensaje informativo. |
| HU3 | Como **administrador**, quiero editar o eliminar registros existentes, para mantener actualizada la información del catálogo. | Cada tarjeta tiene botón "Editar" (rellena el formulario) y "Eliminar" (pide confirmación antes de borrar). |
| HU4 | Como **usuario**, quiero acceder a una sección de juego interactivo, para aprender sobre el ODS 4 de forma entretenida. | Existe una vista de juego accesible desde la navegación. *(Pendiente de implementar el contenido del juego.)* |
| HU5 | Como **usuario**, quiero navegar entre las secciones (Formulario, Historial, Juego) con un solo clic, para usar la aplicación de forma rápida y sencilla. | Los tres botones de navegación cambian la vista activa ocultando las demás. |

---

## 🔧 Tareas Técnicas

### Módulo: HTML
- [x] Crear estructura base del `index.html`
- [x] Formulario con campos: `text`, `date`, `select`, `radio`, `checkbox`, `textarea`
- [x] Tres vistas en el mismo HTML: formulario, historial, juego
- [x] Sistema de navegación con botones y `onclick`

### Módulo: CSS
- [x] Estilos globales con reset (`* { box-sizing, margin, padding }`)
- [x] Diseño responsive con `max-width` centrado
- [x] Diseño temático ODS 4 (fondo, colores dorado/rojo)
- [x] Estilos para formulario, tarjetas, botones y navegación
- [x] Efecto hover en tarjetas y botones
- [x] Layout de dos columnas con flexbox (`.fila-doble`)

### Módulo: JavaScript – Modelo (`modeloLibreria.js`)
- [x] Clase `ModeloLibreria` con array privado `#libros`
- [x] Método `agregarLibro(libroData)` — crea o edita según `#indiceEditar`
- [x] Método `eliminarLibro(indice)` — con confirmación `confirm()`
- [x] Método `editarLibro(indice)` — devuelve el libro y guarda el índice
- [x] Método `renderizarLibros()` — genera tarjetas dinámicas en el DOM
- [x] Método `escaparHTML(texto)` — previene inyección de HTML

### Módulo: JavaScript – Controlador (`ControladorLibreria.js`)
- [x] Clase `ControladorLibreria` con instancia privada del modelo
- [x] Método `inicializarEventos()` — asocia el `submit` del formulario
- [x] Método `manejarEnvioFormulario(evento)` — recoge y valida campos
- [x] Método `mostrarVista(vistaId)` — controla la visibilidad de vistas

### Módulo: JavaScript – App (`app.js`)
- [x] Punto de entrada: espera `DOMContentLoaded`
- [x] Instancia el controlador
- [x] Expone `mostrarVista` globalmente para los `onclick` del HTML

### Módulo: Modelo de datos (`libros.js`)
- [x] Clase `Libro` con constructor de 7 parámetros
- [x] Propiedades: `titulo`, `autor`, `fecha`, `categoria`, `idioma`, `disponibilidad`, `descripcion`

### Módulo: Juego (`vistaJuego`)
- [ ] Diseñar la mecánica del juego (quiz, memoria, etc.)
- [ ] Implementar lógica del juego en JS
- [ ] Aplicar estilos a la vista del juego

---

## ✅ Estado actual del proyecto

| Funcionalidad | Estado |
|---------------|--------|
| Formulario HTML completo | ✅ Terminado |
| Estilos CSS temáticos | ✅ Terminado |
| Arquitectura MVC | ✅ Terminado |
| Crear libro (CREATE) | ✅ Terminado |
| Listar libros (READ) | ✅ Terminado |
| Editar libro (UPDATE) | ✅ Terminado |
| Eliminar libro (DELETE) | ✅ Terminado |
| Navegación entre vistas | ✅ Terminado |
| Sección de juego | ⏳ En Proceso |
| README completo | ⏳ En Proceso |

---

## 📂 Estructura de carpetas

```
ODS-4/
├── documentacion/
│   └── Backlog.md              # Registro de tareas por día
├── fuentes/
│   ├── controladores/
│   │   └── ControladorLibreria.js   # Gestiona eventos y coordina modelo-vista
│   ├── css/
│   │   └── Style.css               # Estilos principales (tema ODS 4)
│   ├── js/
│   │   └── app.js                  # Punto de entrada de la aplicación
│   ├── modelos/
│   │   ├── libros.js               # Clase Libro (entidad/modelo de datos)
│   │   └── modeloLibreria.js       # Lógica de negocio y renderizado
│   └── index.html                  # Estructura HTML y vistas
├── img/
│   └── fondomario.jpg              # Imagen de fondo
└── README.md                       # Documentación del proyecto
```

---

## 🚀 Cómo ejecutar el proyecto

1. Clona o descarga el repositorio.
2. Abre la carpeta `fuentes/` con un servidor local (p. ej. extensión **Live Server** en VS Code).
3. El archivo principal es `fuentes/index.html`.

> ⚠️ El proyecto usa módulos ES (`import/export`), por lo que **no funciona abriendo el HTML directamente** en el navegador sin servidor local.

---

## 🏗️ Arquitectura: Patrón MVC

```
Vista (index.html)
      ↕  eventos / DOM
Controlador (ControladorLibreria.js)
      ↕  llamadas a métodos
Modelo (ModeloLibreria.js + libros.js)
```

El **Modelo** gestiona los datos y el renderizado de tarjetas.  
El **Controlador** recoge los datos del formulario y decide qué vista mostrar.  
La **Vista** (HTML + CSS) presenta la información al usuario.