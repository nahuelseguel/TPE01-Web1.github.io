
let botonMes = document.querySelector("#boton-mes");
botonMes.addEventListener("click", colocarMes);
let monthSelector = document.querySelector("#mes");
let tabla = document.querySelector("#tabla1");

function colocarMes(e) {
    e.preventDefault();
    colocarMesIngresado();
    alternarAVisible();
  }

// guarda el valor de la fecha y lo muestra en la tabla
function colocarMesIngresado () {
  let cuerpoTabla = document.getElementById("tabla1").getElementsByTagName('tbody')[0];
  
  let filaMes = cuerpoTabla.insertRow();
  cuerpoTabla.deleteRow(0);
  let celda = filaMes.insertCell(0);
  let travelDateFrom = document.getElementById("mes").value;
  celda.innerHTML = travelDateFrom;
}

function alternarAVisible() {
  if(mes.value==""){
  tabla.classList.add("oculto");
}
else {
  tabla.classList.toggle("oculto");

}


}


/*   // alternar a visible los elementos de la tabla

  document.querySelector("#boton-mes").addEventListener("click", 
    

});
    
  
   */