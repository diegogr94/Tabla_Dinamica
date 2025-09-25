// EJERCICIO: TABLA DINAMICA EN EL DOM

// *Habilidades necesarias: Manejo del DOM, eventos, funciones.*

// Diseña una página web que inicialmente esté vacía (el body vacío), posteriormente, sólo con JavaScript realiza los siguientes puntos:

// - Añade una tabla vacía del contenido que prefieras, con un mínimo de 2 columnas.
// - Crea un botón para que cada vez que pulsemos, automáticamente se añada una fila a la tabla con datos aleatorios que tendrás previamente declarados.
// - El botón deberá ejecutar una función que realice esa tarea.
// - Se deberán usar arrays para guardar una serie de nombres y obtenerlos de ahí.

// Por ejemplo, una tabla con nombres de personas y sus edades (un array de nombres y que la edad sea aleatoria entre 0-100)

const nombres = ["diego", "ronic", "rebeca", "julia"];
const edad = ["30", "40", "50", "60"];

const miTabla = document.createElement("table");
miTabla.id = miTabla;


const titulo = document.createElement("tr");
const encabezado1 = document.createElement("th");
const encabezado2 = document.createElement("th");

encabezado1.innerText = "Nombre";
encabezado2.innerText = "Edad";

titulo.appendChild(encabezado1);
titulo.appendChild(encabezado2);

miTabla.appendChild(titulo);

document.body.appendChild(miTabla);


function crearFilas(){

    const nombreAleatorio = nombres [Math.floor(Math.random() * nombres.length)];
    const edadAleatoria = edad [Math.floor(Math.random() * edad.length)];


    const filaNueva = document.createElement("tr");
    const nuevaCelda1 = document.createElement("td");
    const nuevaCelda2 = document.createElement("td");
    
    nuevaCelda1.innerText = nombreAleatorio;
    nuevaCelda2.innerText = edadAleatoria;
    

    filaNueva.appendChild(nuevaCelda1);
    filaNueva.appendChild(nuevaCelda2);

    
    miTabla.appendChild(filaNueva)
    
}

const miBoton = document.createElement("button");

miBoton.innerText = "Nueva fila";

document.body.appendChild(miBoton);

miBoton.addEventListener("click", crearFilas);



