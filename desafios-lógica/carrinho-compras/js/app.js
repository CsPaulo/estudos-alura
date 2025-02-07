let totalGeral;
limpar();

function adicionar() {
  let produto = document.getElementById('produto').value;
  let produtoNome = produto.split(' - ')[0];
  let produtoValor = produto.split('R$')[1];
  let quantidade = document.getElementById('quantidade').value;
  let lista = document.getElementById('lista-produtos');
  let subTotal = produtoValor * quantidade;
  totalGeral += subTotal;
  if (quantidade == 0 || quantidade == '' || quantidade == null || quantidade > 100 || quantidade < 0 || produto == null) {
    alert('Valor Inválido');
  } else {
    lista.innerHTML += `
      <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${subTotal}</span>
      </section>
    `;
  }

  let valorTotal = document.getElementById('valor-total');
  valorTotal.innerHTML = `R$${totalGeral}`;
  document.getElementById('quantidade').value = '';
}

function limpar() {
  document.getElementById('lista-produtos').innerHTML = '';
  totalGeral = 0;
  document.getElementById('valor-total').innerHTML = `R$${totalGeral}`;
}
