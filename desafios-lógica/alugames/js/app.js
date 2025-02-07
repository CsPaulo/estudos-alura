function alterarStatus(id) {
  let Jogo = document.getElementById(`game-${id}`);
  let botao = Jogo.querySelector('.dashboard__item__button');
  let img = Jogo.querySelector('.dashboard__item__img');

  if (botao.classList.contains('dashboard__item__button--return')) {
    if (confirm('Deseja realmente devolver o jogo?')) {
      botao.textContent = 'Alugar';
      botao.classList.remove('dashboard__item__button--return');
      img.classList.remove('dashboard__item__img--rented');
    }
  } else {
    botao.textContent = 'Devolver';
    botao.classList.add('dashboard__item__button--return');
    img.classList.add('dashboard__item__img--rented');
  }
  quantidadeAlugados();
}

function quantidadeAlugados() {
  let Jogo = document.querySelectorAll('.dashboard__item__img--rented');
  console.log(Jogo.length);
}
