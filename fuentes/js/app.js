import ControladorLibreria from '../controladores/ControladorLibreria.js';

document.addEventListener('DOMContentLoaded', () => {
    const controlador = new ControladorLibreria();
    window.mostrarVista = controlador.mostrarVista.bind(controlador);
    window.mostrarVista('vistaFormulario');
});