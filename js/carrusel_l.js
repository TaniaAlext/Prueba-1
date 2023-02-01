const carrusel = document.querySelector(".carrusel-items-l");

//Da el scroll máximo
//ScrollWidth- Retorna bien la anchura en pixels del contenido de un elemento
//clienteWidth - Es la anchura interior de un elemento en pixels
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    //El scroll produce que el carrusel se mueve hacia la izquierda
    if (carrusel.scrollLeft === maxScrollLeft) {
        //a negativo
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
        //a positivo
      step = step * -1;
    }
  }, 1); //Cada 10 milisegundos
};

const stop = () => {
  clearInterval(intervalo);
};

//El cursor encima stop
carrusel.addEventListener("mouseover", () => {
  stop();
});

//El cursor sale avanza
carrusel.addEventListener("mouseout", () => {
  start();
});

start();