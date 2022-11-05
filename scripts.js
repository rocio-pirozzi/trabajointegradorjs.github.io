let botonCalcularTotal = document.getElementById('botonCalcularTotal');
botonCalcularTotal.onclick = calcularTotal;

function calcularTotal(){
  
  var precio = 200;

  var cantEntradas = parseInt(document.getElementById('cantidad').value);
  var categoria =(document.getElementById('categoria').value);

  var descuento; 
  
  switch (categoria) {
    case 'Estudiante':
     descuento = precio * 0.8;
      break;
    case 'Trainee':
    descuento = precio * 0.5; 
      break;
    case 'Junior':
    descuento = precio * 0.15; 
      break;
  }
 
  total = cantEntradas * (precio - descuento); 
 document.getElementById('importeTotal').innerHTML =
 'Total a Pagar: $' + total;
}

let botonBorrarTodo = document.getElementById('botonBorrarTodo');
botonBorrarTodo.onclick = borrarTodo;

function borrarTodo(){
  document.getElementById("compraEntradas").reset();
  
}



