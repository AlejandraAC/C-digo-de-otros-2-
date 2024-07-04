const formulario = document.querySelector("form") /* Se cambia const a const */ /* Se quita el # porque form no es un id, es un tipo de selector */

formulario.onsubmit = function (e) {

  e.preventDefault(); /* Se cambia .prevent a .preventDefault() para prevenir el comportamiento por defecto del formulario */

  const n = formulario.elements[0];   /* Se cambian todas las variables siguientes declaradas con var a const  */
  const edadElement = formulario.elements[1]; /* Se modifica la variable e a edadElement para evitar conflictos con el evento e */
  const na = formulario.elements[2];

  const nombre = n.value;
  const edad = parseInt(edadElement.value); // Se asegura de convertir la edad a número usando parseInt()

  const i = na.selectedIndex
  let nacionalidad = na.options[i].value // Se cambia 'const' a 'let' para permitir la reasignación
  console.log(nombre, edad)
  console.log(nacionalidad)

  // Validación de nombre y edad
  if (nombre.length === 0) {
    n.classList.add("error")
  } else {
    n.classList.remove("error"); // Se elimina la clase de error si el nombre es válido
  }

  if (edad < 18 || edad > 120) {
    edadElement.classList.add("error")
  } else {
    edadElement.classList.remove("error"); // Se elimina la clase de error si la edad es válida
  }

    // Verifica que el nombre no esté vacío y la edad esté dentro del rango permitido, se acomodan los rengloes
  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad) // Llama a la función agregarInvitado si las validaciones son exitosas
  }
}

// Creación del botón para eliminar invitados
const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

// Función para agregar un invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {

  /* Se sustituyen los else if por un switch case */
  switch (nacionalidad) {
    case "ar":
      nacionalidad = "Argentina";
      break;
    case "mx":
      nacionalidad = "Mexicana";
      break;
    case "vnzl":
      nacionalidad = "Venezolana";
      break;
    case "per":
      nacionalidad = "Peruana";
      break;
    default:
      // En caso de que no se encuentre la nacionalidad
      nacionalidad = "Desconocida";
  }

  const lista = document.getElementById("lista-de-invitados")
  
  // Creación del elemento de lista para el invitado
  const elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")  // Se cambia added por add
  lista.appendChild(elementoLista)

  // Función para crear elementos de lista con descripción y valor
  /* Se comenta un bloque repetido:
  const spanNombre = document.createElement("span")
  const inputNombre = document.createElement("input")
  const espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio) */

  function crearElemento(descripcion, valor) {
    const spanNombre = document.createElement("span");
    const inputNombre = document.createElement("input");
    const espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  // Crear elementos para Nombre, Edad y Nacionalidad
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  // Botón para eliminar el invitado actual
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  const corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    /* botonBorrar.parentNode.remove() */
    elementoLista.remove(); // Elimina el elemento de lista al hacer clic en el botón de eliminar
    
  }
}