document.addEventListener("DOMContentLoaded", function() {
  // Obtener el div por su ID
  let divElemento = document.getElementById("mi-div");

  // Obtener el botón por su ID
  let botonCambiar = document.getElementById("cambiar-div");

  // Agregar un evento al botón para cambiar el contenido del div
  botonCambiar.addEventListener("click", function() {
      // Cambiar el contenido del div
      divElemento.textContent = "Nuevo Contenido del Div";
      divElemento.style.backgroundColor = "yellow";
      divElemento.style.color = "red";
  });
});