var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradientBody");
var boton = document.querySelector("button");


// Evento input: Cada vez que un valor de input cambia entonces
// se dispara el Evento

function setGradient(){

//con esta funcion cada vez que el input color cambia
//entonces mostramos en consola el nuevo valor("el input" type)
// color es la paleta de colores que nos sale en el html

 body.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";
 // con la siguiente linea se muestra en la pantalla siempre
 //que se cambia el inear-gradient(to right, valor 1, valor2);
 //donde valor1 y valor 2 cambian dinamicamente dependiendo
 // // del input de color 1 y color 2
 // Cualquiera de las dos siguientes lineas muestra en la pantalla
 // lo que se cambia como se explico arriba


 css.textContent = body.style.background + ";" ;

 // css.innerHTML = body.style.background ;

}


function getRandomColor() {

// se hace un for para que color comience con # y en cada iteracion se le agregue uno de los items de letters
// que se escoge de forma aleatoria(letters[] y en la mitad que serie el indice se hace un 
// random entre 0 y 15 que es el numero de simbolos que se difinieron), finalmente el numero
// resultante es # XXXXXX que es el color para numero uno y dos y finalmente se cambia el 
// background con estos colores aleatorios.
s
  var letters = '0123456789ABCDEF';
  var coloruno = '#';
  var colordos = '#';
  for (var i = 0; i < 6; i++) {
    coloruno += letters[Math.floor(Math.random() * 16)];
    // console.log(coloruno);
    colordos += letters[Math.floor(Math.random() * 16)];
    // console.log(colordos);
  }

  body.style.background = "linear-gradient(to right, "+ coloruno + ", " + colordos + ")";
  css.textContent = body.style.background + ";" ;
}


setGradient();

color1.addEventListener("input" , setGradient);

color2.addEventListener("input" , setGradient);

boton.addEventListener("click" , getRandomColor);