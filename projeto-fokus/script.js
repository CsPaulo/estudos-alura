const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');
const musicaFocoInput = document.querySelector('#alternar-musica');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const iniciarOuPausarBtIcon = document.querySelector('#start-pause img');
const Timer = document.querySelector('#timer');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('/sons/play.wav');
const audioPause = new Audio('/sons/pause.mp3');
const audioBeep = new Audio('/sons/beep.mp3');
musica.loop = true;

let tempoDecorridoEmSegundos = 1500;
let intervalorId = null;

musicaFocoInput.addEventListener('change', () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});
focoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 1500;
  alterarContexto('foco');
  focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 300;
  alterarContexto('descanso-curto');
  curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 900;
  alterarContexto('descanso-longo');
  longoBt.classList.add('active');
});

function alterarContexto(contexto) {
  mostrarTimer();
  botoes.forEach((botao) => {
    botao.classList.remove('active');
  });
  html.setAttribute('data-contexto', contexto);
  banner.setAttribute('src', `/imagens/${contexto}.png`);
  switch (contexto) {
    case 'foco':
      titulo.innerHTML = `Otimize sua produtividade,<br />
          <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;
    case 'descanso-curto':
      titulo.innerHTML = `Que tal dar uma respirada,<br />
          <strong class="app__title-strong">faça uma pausa curta.</strong>`;
      break;
    case 'descanso-longo':
      titulo.innerHTML = `Hora de voltar à superfície,<br />
          <strong class="app__title-strong">faça uma pausa longa.</strong>`;
      break;
    default:
      break;
  }
}

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    audioBeep.play();
    zerar();
    return;
  }
  tempoDecorridoEmSegundos--;
  mostrarTimer();
};

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
  if (intervalorId) {
    audioPause.play();
    zerar();
    return;
  }
  audioPlay.play();
  intervalorId = setInterval(contagemRegressiva, 1000);
  iniciarOuPausarBt.textContent = 'Pausar';
  iniciarOuPausarBtIcon.src = '/imagens/pause.png';
}

function zerar() {
  clearInterval(intervalorId);
  iniciarOuPausarBt.textContent = 'Começar';
  iniciarOuPausarBtIcon.src = '/imagens/play_arrow.png';
  intervalorId = null;
  if (tempoDecorridoEmSegundos === 0) {
    tempoDecorridoEmSegundos = 5;
  }
}

function mostrarTimer() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString('pt-BR', {
    minute: '2-digit',
    second: '2-digit',
  });
  Timer.innerHTML = `${tempoFormatado}`;
}

mostrarTimer();
