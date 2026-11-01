// Sistema de Evaluación de Usuarios y Gestión de Descuentos

// Entrada de datos
const nombre = prompt("¿Cuál es tu nombre completo?");
const edad = prompt("¿Cuál es tu edad?");

// Validación
if (isNaN(edad) || edad === "") {
  alert("La edad ingresada no es válida. Recarga la página e inténtalo de nuevo.");
} else {
  // Texto a número
  const edadVal = Number(edad);

  const esVip = confirm("¿Tienes una membresía VIP activa?");

  // Ternarios anidados
  const beneficio = edad < 18
    ? "Descuento Juvenil (30%)"
    : esVip
      ? "Descuento VIP (20%)"
      : "Sin descuento";

  // Resultado
  alert("Usuario: " + nombre + "\nEdad: " + edadVal + "\nBeneficio: " + beneficio);
}
