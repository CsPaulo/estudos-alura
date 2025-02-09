function tocaSom(idAudio) {
  document.querySelector(id).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
while (contador < listaDeTeclas.length) {
  listaDeTeclas[contador].onlick = tocaSom;
  contador++;
}
