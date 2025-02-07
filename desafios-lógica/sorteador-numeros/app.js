function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  if (!validarCampos()) {
    return;
  }
  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);
    if (quantidade > ate - de + 1) {
      alert('A quantidade de números a serem sorteados deve ser menor que a diferença entre os números!');
      return;
    } else {
      while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
      }
    }
    sorteados.push(numero);
  }

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class='texto__paragrafo'>Números sorteados: ${sorteados}</label>`;
  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarStatusBotao();
}

function validarCampos() {
  let quantidade = document.getElementById('quantidade').value;
  let de = document.getElementById('de').value;
  let ate = document.getElementById('ate').value;

  if (quantidade === '' || de === '' || ate === '') {
    alert('Preencha todos os campos!');
    return false;
  } else if (parseInt(de) >= parseInt(ate)) {
    alert('O campo "Até o número" deve ser maior que o campo "Do número"!');
    return false;
  }
  return true;
}
