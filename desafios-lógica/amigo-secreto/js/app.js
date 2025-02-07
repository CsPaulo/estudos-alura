let amigos = [];

function adicionar() {
  let nomeAmigo = document.getElementById('nome-amigo').value;
  let listaAmigos = document.getElementById('lista-amigos');
  nomeAmigo;
  if (nomeAmigo == '') {
    alert('Digite um nome para adicionar!');
    return;
  }
  if (amigos.includes(nomeAmigo)) {
    alert('Adicione um nome diferente!');
    return;
  }
  amigos.push(nomeAmigo);
  if (listaAmigos.textContent == '') {
    listaAmigos.textContent = nomeAmigo;
  } else {
    listaAmigos.textContent += ', ' + nomeAmigo;
  }
  document.getElementById('nome-amigo').value = '';
}

function sortear() {
  embaralha(amigos);
  let sorteio = document.getElementById('lista-sorteio');
  if (amigos.length < 4) {
    alert('Adicione pelo menos 4 amigos!');
    return;
  }
  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
    } else {
      sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
    }
  }
}
function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById('nome-amigo').textContent = '';
  document.getElementById('lista-amigos').textContent = '';
  document.getElementById('lista-sorteio').textContent = '';
}
