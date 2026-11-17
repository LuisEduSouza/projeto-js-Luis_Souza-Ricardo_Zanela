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
    {id: 5, nome: 'Dom Casmurro', autor: 'Machado de Assis', categoria: 'Romance',
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
