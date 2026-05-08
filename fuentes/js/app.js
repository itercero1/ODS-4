// importamos el controlador principal de la aplicacion
import ControladorLibreria from '../controladores/controladorlibreria.js';

// esperamos a que el html este completamente cargado antes de ejecutar nada
// si no ponemos esto a veces no encuentra los elementos del dom y da errores raros
document.addEventListener('DOMContentLoaded', () => {
    // creamos el controlador, esto llama al constructor y pone los eventos
    const controlador = new ControladorLibreria();

    // ponemos mostrarVista como funcion global para poder llamarla desde el html
    // el .bind(controlador) es para que el this dentro del metodo funcione bien
    // (sin esto el this se pierde y no funciona, nos paso en clase)
    window.mostrarVista = controlador.mostrarVista.bind(controlador);

    // mostramos la vista del formulario al arrancar la pagina
    window.mostrarVista('vistaFormulario');
});