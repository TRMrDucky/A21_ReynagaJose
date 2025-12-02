const txtFirstName = document.getElementById("first-name");
const labelFirstName = document.getElementById("label-first-name");

const error = document.getElementById("error");

const txtApellido = document.getElementById("last-name");
const labelApellido = document.getElementById("label-last-name");

const txtEmail = document.getElementById("email");
const labelEmail = document.getElementById("label-email");

const REGEX_LETRAS="/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]*$/";

//Nombre
function resaltarLabelNombre() {
  labelFirstName.style.color = "red";
}
function resetLabelNombre() {
  labelFirstName.style.color = "black";
}

//Apellido
function resaltarLabelApellido() {
  labelApellido.style.color = "red";
}
function resetLabelApellido() {
  labelApellido.style.color = "black";
}

//Email
function resaltarLabelEmail() {
  labelEmail.style.color = "red";
}
function resetLabelEmail() {
  labelEmail.style.color = "black";
}

function verificarNombre() {
  const nombre = txtFirstName.value;
    if (nombre === "" || nombre === null) {
        error.textContent="El campo de nombre no puede estar vacío";
    } 
    else if(!REGEX_LETRAS.test(nombre)) { 
        error.textContent="El campo de nombre solo puede contener letras y espacios";
    }else{
        error.textContent="";
    }
}

document.addEventListener("DOMContentLoaded", () => {
  txtFirstName.addEventListener("input", resaltarLabelNombre);
  txtFirstName.addEventListener("change", resetLabelNombre);
  txtFirstName.addEventListener("input", verificarNombre);

  txtApellido.addEventListener("input", resaltarLabelApellido);
  txtApellido.addEventListener("change", resetLabelApellido);

  txtEmail.addEventListener("input", resaltarLabelEmail);
  txtEmail.addEventListener("change", resetLabelEmail);
});
