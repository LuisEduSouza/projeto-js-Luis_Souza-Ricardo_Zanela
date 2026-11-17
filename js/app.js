// [R1] Dados do catálogo
const categorias = ['Romance', 'Ficção', 'Técnico', 'Fantasia'];

const livros = [
  { id: 1, nome: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', categoria: 'Romance',
    descricao: 'Um defunto autor narra a própria vida com ironia e humor ácido sobre a sociedade.',
    nota: 9.1, disponivel: true },
  { id: 2, nome: 'Fahrenheit 451', autor: 'Ray Bradbury', categoria: 'Ficção',
    descricao: 'Em um futuro onde livros são proibidos, bombeiros queimam bibliotecas inteiras.',
    nota: 8.6, disponivel: false },
  { id: 3, nome: 'Código Limpo', autor: 'Robert C. Martin', categoria: 'Técnico',
    descricao: 'Boas práticas para escrever código legível, simples e fácil de manter.',
    nota: 9.3, disponivel: true },
  { id: 4, nome: 'O Hobbit', autor: 'J. R. R. Tolkien', categoria: 'Fantasia',
    descricao: 'Bilbo Bolseiro parte numa aventura inesperada ao lado de anões e de um mago.',
    nota: 9.0, disponivel: true },
  { id: 5, nome: 'Dom Casmurro', autor: 'Machado de Assis', categoria: 'Romance',
    descricao: 'Bentinho relembra o amor por Capitu e a dúvida que transformou sua vida.',
    nota: 9.2, disponivel: true },
  { id: 6, nome: '1984', autor: 'George Orwell', categoria: 'Ficção',
    descricao: 'Num regime totalitário vigiado pelo Grande Irmão, Winston ousa pensar diferente.',
    nota: 9.4, disponivel: true },
  { id: 7, nome: 'O Programador Pragmático', autor: 'Andrew Hunt e David Thomas', categoria: 'Técnico',
    descricao: 'Dicas práticas para evoluir como desenvolvedor e resolver problemas reais de software.',
    nota: 8.9, disponivel: false },
  { id: 8, nome: 'A Sociedade do Anel', autor: 'J. R. R. Tolkien', categoria: 'Fantasia',
    descricao: 'Frodo recebe o Um Anel e inicia uma jornada para destruí-lo na Montanha da Perdição.',
    nota: 9.5, disponivel: true }
];

const catalogo = {
  nome: 'Biblioteca Virtual',
  itens: livros,
  adicionar: function (item) {
    this.itens.push(item);
  },
  proximoId: function () {
    let maior = 0;
    for (let i = 0; i < this.itens.length; i++) {
      if (this.itens[i].id > maior) {
        maior = this.itens[i].id;
      }
    }
    return maior + 1;
  }
};

// [R3] Preenche o <select> de categorias
function preencherCategorias() {
  const select = document.getElementById('filtro-categoria');
  for (let i = 0; i < categorias.length; i++) {
    const opcao = document.createElement('option');
    opcao.value = categorias[i];
    opcao.textContent = categorias[i];
    select.appendChild(opcao);
  }
}

// [R3] Filtro: busca + categoria juntas, sem filter
function filtrarItens() {
  const termo = document.getElementById('busca').value.toLowerCase();
  const categoria = document.getElementById('filtro-categoria').value;
  const resultado = [];

  for (let i = 0; i < catalogo.itens.length; i++) {
    const livro = catalogo.itens[i];

    const achouNome  = livro.nome.toLowerCase().indexOf(termo) !== -1;
    const achouAutor = livro.autor.toLowerCase().indexOf(termo) !== -1;
    const bateCategoria = (categoria === 'Todas') || (livro.categoria === categoria);

    if ((achouNome || achouAutor) && bateCategoria) {
      resultado.push(livro);
    }
  }
  return resultado;
}

// [R3] Redesenha tudo a cada mudança
function atualizarTela() {
  const lista = filtrarItens();
  renderizar(lista);       
  atualizarPainel(lista);  
}

// [R3]
const campoBusca = document.getElementById('busca');

campoBusca.addEventListener('input', atualizarTela);
document.getElementById('filtro-categoria').addEventListener('change', atualizarTela);

campoBusca.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    campoBusca.value = '';
    atualizarTela();
  }
});


// [R5]
function textoDoBotao(item) {
  return item.disponivel ? 'Emprestar' : 'Devolver';
}

function criarBotaoDisponibilidade(item, card) {
  const botao = document.createElement('button');
  botao.textContent = textoDoBotao(item);

  if (!item.disponivel) {
    card.classList.add('emprestado');   // estado inicial
  }

  botao.addEventListener('click', function () {
    item.disponivel = !item.disponivel;          // alterna o dado
    card.classList.toggle('emprestado');         // alterna o visual
    botao.textContent = textoDoBotao(item);      // muda o texto
    atualizarPainel(filtrarItens());             // atualiza o painel
  });

  return botao;
}

// Chamada inicial
preencherCategorias();
atualizarTela();
