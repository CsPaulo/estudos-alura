function comprar() {
  let ingresso = document.getElementById('tipo-ingresso').value;
  let qtdCompra = parseInt(document.getElementById('qtd').value);

  if (qtdCompra <= 0) {
    alert('Quantidade inválida');
    return;
  }
  if (ingresso == 'pista') {
    comprarPista(qtdCompra);
  } else if (ingresso == 'superior') {
    comprarSuperior(qtdCompra);
  } else if (ingresso == 'inferior') {
    comprarInferior(qtdCompra);
  }
  document.getElementById('qtd').value = '';
}

function comprarPista(qtdCompra) {
  let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
  if (qtdCompra > qtdPista) {
    alert('Quantidade de ingressos indisponível');
  } else {
    qtdPista -= qtdCompra;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert('Compra realizada com sucesso');
  }
}

function comprarSuperior(qtdCompra) {
  let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
  if (qtdCompra > qtdSuperior) {
    alert('Quantidade de ingressos indisponível');
  } else {
    qtdSuperior -= qtdCompra;
    document.getElementById('qtd-superior').textContent = qtdSuperior;
    alert('Compra realizada com sucesso');
  }
}

function comprarInferior(qtdCompra) {
  let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
  if (qtdCompra > qtdInferior) {
    alert('Quantidade de ingressos indisponível');
  } else {
    qtdInferior -= qtdCompra;
    document.getElementById('qtd-inferior').textContent = qtdInferior;
    alert('Compra realizada com sucesso');
  }
}
