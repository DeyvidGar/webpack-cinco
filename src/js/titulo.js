import "../css/titulo.css";

export const createTitle = (mensaje) => {
    const h1 = document.createElement('H1');
    h1.textContent = `Hola mundossss, ${mensaje}`;
    document.body.appendChild(h1);
}