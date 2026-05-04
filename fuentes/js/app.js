import ControladorLibreria from '../controladores/controladorlibreria.js';

document.addEventListener('DOMContentLoaded', () => {
    const controlador = new ControladorLibreria();
    window.mostrarVista = controlador.mostrarVista.bind(controlador);
    window.mostrarVista('vistaFormulario');
});