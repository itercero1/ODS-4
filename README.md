# 📚 ODS 4 – Educación de Calidad

Proyecto web desarrollado en JavaScript siguiendo el patrón MVC (Modelo–Vista–Controlador), enfocado en el Objetivo de Desarrollo Sostenible número 4: **garantizar una educación inclusiva, equitativa y de calidad para todas las personas**.

La aplicación permite registrar libros educativos mediante un formulario interactivo, visualizar un historial de registros, editar o eliminar libros existentes y acceder a una sección de juego educativo relacionada con el ODS 4.

---

## 👥 Integrantes

| Nombre    |
| --------- |
| Iván      |
| Alberto   |
| Alejandro |

---

## 🎯 Objetivos del proyecto

* Gestionar libros educativos mediante operaciones CRUD.
* Aplicar el patrón de arquitectura MVC en JavaScript.
* Desarrollar una interfaz responsive y fácil de usar.
* Promover el aprendizaje sobre el ODS 4 mediante contenido interactivo.

---

## 🎯 Historias de Usuario

| ID  | Historia                                                                                                                                     | Criterios de aceptación                                                            |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| HU1 | Como **educador**, quiero registrar libros indicando título, autor, nivel educativo, idioma y formato, para organizar el material didáctico. | El formulario valida que los campos obligatorios estén completos antes de guardar. |
| HU2 | Como **estudiante**, quiero ver el historial de libros disponibles con todos sus datos, para elegir mi próxima lectura.                      | Los libros se muestran en tarjetas dinámicas con toda la información.              |
| HU3 | Como **administrador**, quiero editar o eliminar registros existentes, para mantener actualizada la información del catálogo.                | Cada tarjeta tiene botones de edición y eliminación con confirmación previa.       |
| HU4 | Como **usuario**, quiero acceder a una sección de juego interactivo, para aprender sobre el ODS 4 de forma entretenida.                      | Existe una vista de juego accesible desde la navegación principal.                 |
| HU5 | Como **usuario**, quiero navegar entre las secciones (Formulario, Historial y Juego) de forma rápida y sencilla.                             | Los botones de navegación cambian la vista activa sin recargar la página.          |

---

## 🔧 Tareas Técnicas

### Módulo: HTML

* [x] Crear estructura base del `index.html`
* [x] Formulario con distintos tipos de campos
* [x] Crear vistas para formulario, historial y juego
* [x] Implementar navegación entre vistas

### Módulo: CSS

* [x] Estilos globales y reset CSS
* [x] Diseño responsive con Flexbox
* [x] Temática visual inspirada en el ODS 4
* [x] Estilos para formularios, tarjetas y botones
* [x] Efectos hover y mejoras visuales

### Módulo: JavaScript – Modelo (`modeloLibreria.js`)

* [x] Gestión privada de libros
* [x] Agregar libros
* [x] Editar libros
* [x] Eliminar libros
* [x] Renderizar tarjetas dinámicamente
* [x] Sanitizar contenido HTML

### Módulo: JavaScript – Controlador (`ControladorLibreria.js`)

* [x] Inicializar eventos
* [x] Manejar envío del formulario
* [x] Validar datos
* [x] Controlar cambio de vistas

### Módulo: JavaScript – App (`app.js`)

* [x] Esperar `DOMContentLoaded`
* [x] Instanciar controlador
* [x] Exponer funciones globales necesarias

### Módulo: Modelo de datos (`libros.js`)

* [x] Clase `Libro`
* [x] Gestión de propiedades del libro

### Módulo: Juego (`vistaJuego`)

* [ ] Diseñar mecánica del juego
* [ ] Implementar lógica interactiva
* [ ] Añadir estilos y animaciones

---

## ✅ Estado actual del proyecto

| Funcionalidad               | Estado          |
| --------------------------- | --------------- |
| Registro de libros          | ✅ Completado    |
| Visualización del historial | ✅ Completado    |
| Edición de libros           | ✅ Completado    |
| Eliminación de libros       | ✅ Completado    |
| Navegación entre vistas     | ✅ Completado    |
| Diseño responsive           | ✅ Completado    |
| Juego educativo             | ⏳ En desarrollo |
| README completo             | ✅ Actualizado   |

---

## 🛠️ Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript ES6+
* Arquitectura MVC
* Flexbox
* Módulos ES (`import/export`)

---

## 📂 Estructura de carpetas

```bash
ODS-4/
├── documentacion/
│   └── Backlog.md
│
├── fuentes/
│   ├── controladores/
│   │   └── ControladorLibreria.js
│   │
│   ├── css/
│   │   ├── Style.css
│   │   └── juego.css
│   │
│   ├── js/
│   │   └── app.js
│   │
│   ├── modelos/
│   │   ├── libros.js
│   │   └── modeloLibreria.js
│   │
│   └── index.html
│
├── img/
│   ├── fondoMario.jpg
│   ├── fondoMario1.jpg
│   ├── MarioBros.png
│   └── MarioBros1.png
│
└── README.md
```

---

## 🚀 Cómo ejecutar el proyecto

1. Clona o descarga el repositorio.
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Ejecuta el proyecto usando la extensión **Live Server**.
4. Abre el archivo:

```text
fuentes/index.html
```

> ⚠️ El proyecto utiliza módulos ES (`import/export`), por lo que no funcionará correctamente si se abre directamente desde el navegador sin un servidor local.

---

## 🏗️ Arquitectura: Patrón MVC

```text
Vista (HTML + CSS)
        ↓
Controlador (ControladorLibreria.js)
        ↓
Modelo (modeloLibreria.js + libros.js)
```

### 📌 Modelo

Gestiona los datos de la aplicación y la lógica de negocio.

### 📌 Vista

Representa la interfaz gráfica y muestra la información al usuario.

### 📌 Controlador

Conecta la vista con el modelo y administra los eventos.

---

## 🎮 Próximas mejoras

* Implementar el minijuego educativo.
* Añadir almacenamiento persistente con LocalStorage.
* Incorporar filtros y búsqueda de libros.
* Mejorar accesibilidad y experiencia de usuario.
* Agregar autenticación de usuarios.

---

## 📌 Relación con los ODS

### ODS 4 – Educación de Calidad

Este proyecto busca fomentar el acceso a recursos educativos digitales y promover el aprendizaje mediante herramientas tecnológicas interactivas.

---

## 📄 Licencia

Proyecto desarrollado con fines educativos y académicos.
