function tocaSom(idAudio) {
  const elemento = document.querySelector(idAudio).play();
  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  } else {
    console.log('Elemento não encontrado ou seletor inválido');
  }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  tecla.onclick = function () {
    tocaSom(`#som_${instrumento}`);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  };
}
