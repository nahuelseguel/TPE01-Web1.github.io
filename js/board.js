// guarda el valor de la fecha y lo muestra en la tabla
function colocarMesIngresado () {
    
    let cuerpoTabla = document.getElementById("tabla1").getElementsByTagName('tbody')[0];
    
    let filaMes = cuerpoTabla.insertRow();
    cuerpoTabla.deleteRow(0);
    let celda = filaMes.insertCell(0);
    let travelDateFrom = document.getElementById("mes").value;
    celda.innerHTML = travelDateFrom;
    
}

let botonMes = document.getElementById("boton-mes");
botonMes.addEventListener("click", function(event) {
    event.preventDefault();
    colocarMesIngresado();
  });

  // alternar a visible los elementos de la tabla

  document.querySelector("#boton-mes").addEventListener("click", function alternarAVisible() {
    
    document.querySelector("tr").classList.toggle("oculto");
});
    
  
  