const pessoas = [
    { nome: 'João', idade: 35 },
    { nome: 'Maria', idade: 33 },
    { nome: 'José', idade: 32 },
]

console.log(pessoas.find(pessoa => pessoa.nome == "João"));//arrow function

const joao = pessoas.find(pessoa => pessoa.nome == "João")

console.log(joao.idade)