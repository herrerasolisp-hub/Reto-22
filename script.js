let precioOriginalGlobal = 0;
let descuentoGlobal = 0;

const inputPrecio = document.getElementById('inputPrecio');
const mensajeError = document.getElementById('mensajeError');
const botonesDescuento = document.querySelectorAll('.btn-descuento');
const spanPrecioFinal = document.getElementById('spanPrecioFinal');
const spanPago3 = document.getElementById('pago3');
const spanPago6 = document.getElementById('pago6');
const spanPago9 = document.getElementById('pago9');

const validarPrecio = function(valor) {
    const numero = Number(valor);
    if (isNaN(numero) || numero <= 0) {
        return false;
    }
    return true;
};

function calcularPrecioConDescuento(precio, porcentajeDescuento) {
    let montoDescuento = (precio * porcentajeDescuento) / 100; 
    let precioFinal = precio - montoDescuento;
    return precioFinal;
}

const calcularPagosMensuales = function(montoTotal, meses) {
    let pagoMensual = montoTotal / meses;
    return pagoMensual.toFixed(2);
};

botonesDescuento.forEach(boton => {
    boton.addEventListener('click', () => {
        let valorIngresado = inputPrecio.value;

        if (!validarPrecio(valorIngresado)) {
            mensajeError.classList.remove('error-hidden');
            mensajeError.classList.add('error-visible');
            spanPrecioFinal.textContent = "$0.00";
            spanPago3.textContent = "$0.00";
            spanPago6.textContent = "$0.00";
            spanPago9.textContent = "$0.00";
            return;
        }

        mensajeError.classList.remove('error-visible');
        mensajeError.classList.add('error-hidden');

        precioOriginalGlobal = Number(valorIngresado);
        descuentoGlobal = Number(boton.getAttribute('data-descuento'));

        let precioFinal = calcularPrecioConDescuento(precioOriginalGlobal, descuentoGlobal);
        spanPrecioFinal.textContent = `$${precioFinal.toFixed(2)}`;

        spanPago3.textContent = `$${calcularPagosMensuales(precioFinal, 3)}`;
        spanPago6.textContent = `$${calcularPagosMensuales(precioFinal, 6)}`;
        spanPago9.textContent = `$${calcularPagosMensuales(precioFinal, 9)}`;
    });
});