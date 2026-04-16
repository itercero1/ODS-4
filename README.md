# ODS 4 – Educación de Calidad

Proyecto web para gestionar libros educativos. Forma parte del trabajo sobre los Objetivos de Desarrollo Sostenible, concretamente el ODS 4, que busca garantizar una educación de calidad e inclusiva para todos.

La aplicación permite añadir libros con metadatos específicos (título, autor, nivel educativo, idioma y formato) y consultarlos en un historial interactivo. También incluye una sección de juego para fomentar el aprendizaje.

---

## 👥 Integrantes

- Iván
- Alberto
- Alejandro

---

## 🎯 Historias de Usuario

- **HU1 - Registro de recursos**: Como educador, quiero registrar libros detallando su nivel (Primaria, Secundaria, etc.) para organizar el material didáctico.
- **HU2 - Consulta de catálogo**: Como estudiante, quiero ver el historial de libros disponibles para elegir mi próxima lectura.
- **HU3 - Gestión de datos (CRUD)**: Como administrador, quiero editar o eliminar registros para mantener la calidad de la información.
- **HU4 - Gamificación**: Como usuario, quiero acceder a una sección de juego para aprender sobre el ODS 4 de forma interactiva.
- **HU5 - Usabilidad**: Como usuario, quiero navegar entre las diferentes secciones de la aplicación de forma rápida y sencilla.

---

## ✅ ¿Qué hay hecho?

- ✅ Formulario HTML completo con validaciones y campos dinámicos.
- ✅ Estilos personalizados con CSS (tema ODS 4).
- ✅ Arquitectura MVC: Controladores y modelos en JavaScript.
- ✅ Lógica para crear, listar y gestionar libros.
- ✅ Sistema de navegación entre Formulario, Historial y Juego.

---

## 📂 Estructura de carpetas

```
ODS-4/
├── documentacion/
│   └── Backlog.md
├── fuentes/
│   ├── controladores/
│   │   └── ControladorLibreria.js
│   ├── css/
│   │   └── Style.css
│   ├── js/
│   │   └── app.js
│   ├── modelos/
│   │   ├── libros.js
│   │   └── modeloLibreria.js
│   └── index.html
├── img/
└── README.md
```