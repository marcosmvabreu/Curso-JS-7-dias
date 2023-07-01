//Localizando itens em uma Array primitiva
const num3 = [1, 2, 3, 4]

console.log(num3.indexOf(3)); //retorna o indice onde o numero passado como parametro está está no array
console.log(num3.indexOf(100)); //retorna -1 quando o numero passado como parametro não está no array
console.log(num3.includes(3)); //retorna true se o numero existir e false se o numero não existir

console.log('-----------------------------')

//Localizando itens em uma Array de referencia
const pessoas = [
    { nome: 'João', idade: 35 },
    { nome: 'Maria', idade: 33 },
    { nome: 'José', idade: 32 },
]

//O inlcude não funciona, tem que usar o find, e o find é executado com uma funcao
console.log(pessoas.find(function(pessoa){ 
    return pessoa.nome == "Maria"
}));
//o .find retorna o objeto correspondente
console.log(pessoas.find(pessoa => pessoa.nome == "Maria"));//arrow function

