
let listaContactos = [

];
function agregarContacto(nombreApellido) {
  listaContactos.push(nombreApellido);
}
function borrarContacto(nombreApellido) {
  const indice = listaContactos.indexOf(nombreApellido);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}
function imprimirContactos() {
  console.log("lista-contactos:");
  listaContactos.forEach(contacto => console.log(contacto));
}

const ulElement = document.getElementById("lista-contactos");
agregarContacto("Juan Pérez");
agregarContacto("María López");
agregarContacto("Carlos Gómez");


listaContactos.forEach(contacto => {
  const liElement = document.createElement("li");
  liElement.textContent = contacto;
  ulElement.appendChild(liElement);
});
imprimirContactos();
borrarContacto("Sara Sofia");
ulElement.innerHTML = ""; 

listaContactos.forEach(contacto => {
  const liElement = document.createElement("li");
  liElement.textContent = contacto;
  ulElement.appendChild(liElement);
});
