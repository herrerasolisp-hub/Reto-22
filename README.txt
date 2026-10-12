PROYECTO: Calculadora de Descuentos 2.0

PROPÓSITO DEL PROYECTO:
Crear una aplicación web interactiva y modularizada en JavaScript que permita calcular de forma dinámica el precio final de un producto aplicando distintos porcentajes de descuento (5%, 10% y 25%), además de calcular las mensualidades sin intereses a 3, 6 y 9 meses, integrando buenas prácticas de programación funcional y control de ámbito.

INSTRUCCIONES DE EJECUCIÓN Y ACCESO:

1. Visualización en línea (GitHub Pages):
   - Accede a la aplicación publicada en la web a través del enlace de GitHub Pages del repositorio:
     https://herrerasolisp-hub.github.io/Reto-Calculadora-Descuentos-2/

2. Clonación del código fuente (GitHub):
   - Clona el repositorio en tu máquina local ejecutando el siguiente comando en tu terminal:
     git clone https://github.com/herrerasolisp-hub/Reto-Calculadora-Descuentos-2.git
   - Abre la carpeta clonada en tu editor de código (por ejemplo, Visual Studio Code).
   - Utiliza la extensión "Live Server" para levantar el entorno de desarrollo local y abrir el archivo "index.html".

FUNCIONALIDADES PRINCIPALES EXPLICADAS CON EJEMPLOS:
- Validación dinámica de entradas: Si el usuario ingresa un texto inválido o un número menor o igual a cero, la aplicación muestra un mensaje de error y reinicia los marcadores.
- Cálculo automático de rebajas: Al hacer clic en un botón de descuento, se calcula la rebaja sobre el precio original.
  * Ejemplo: Si el precio es $400 y se selecciona el 10% de descuento, la aplicación calcula $40 de rebaja y muestra un precio final de $360.00.
- Opciones de pago diferido: Toma el precio final rebajado y lo divide equitativamente entre las opciones de 3, 6 y 9 meses sin intereses.
  * Ejemplo: Para un precio final de $360.00 a 3 meses, muestra un pago mensual de $120.00 / mes.

EXPLICACIÓN TÉCNICA:
- Declaración y expresión de funciones: 
  * Se utilizó una "declaración de función" (`function calcularPrecioConDescuento(...)`) para el cálculo matemático del descuento, aprovechando el concepto de hoisting.
  * Se implementaron "expresiones de función" (`const validarPrecio = function(...)` y `const calcularPagosMensuales = function(...)`) para la validación del formulario y el cálculo de mensualidades.
- Parámetros y valores retornados: Las funciones aceptan argumentos de entrada limpios a través de sus parámetros y devuelven explícitamente los resultados procesados (`return`) para actualizar los elementos del DOM.
- Gestión del scope (ámbito): Las variables globales (`precioOriginalGlobal`, `descuentoGlobal`) se reservan para guardar el estado activo de la interfaz, mientras que las variables locales (`let montoDescuento`, `let precioFinal`, `let pagoMensual`) resguardan los cálculos dentro del bloque de cada función para evitar interferencias.