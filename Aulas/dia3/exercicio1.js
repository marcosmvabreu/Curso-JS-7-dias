// Exercício de busca em array de objetos:
// Crie uma função que receba um array de objetos, onde cada objeto representa um livro com as propriedades
// "título", "autor" e "ano de publicação". A função deve receber um parâmetro para buscar e retornar todos 
// os livros que contêm a string de busca no título.

const colecaoLivros = [
    {
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      anoPublicacao: 1954
    },

    {
      titulo: "O Hobbit",
      autor: "J.R.R. Tolkien",
      anoPublicacao: 1937
    },

    {
      titulo: "Dom Quixote",
      autor: "Miguel de Cervantes",
      anoPublicacao: 1605
    }
];

function pesquisaTitulo(colecaoLivros, busca){
    for (let i of colecaoLivros){
        if(i.titulo.includes(busca)){
            console.log(i)
        }
    }
}

pesquisaTitulo(colecaoLivros,'Dom')

