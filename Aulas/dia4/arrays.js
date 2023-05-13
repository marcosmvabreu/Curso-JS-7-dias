// ADICIONANDO ITENS NO ARRAY
const num = [5, 6, 7]

num.push(10, 11, 12); //adiciona itens no fim do array
num.unshift(2, 3, 4); //adiciona itens no inicio do array
console.log(num)
num.splice(6, 0, 8, 9) //adiciona itens no meio do array, .splice(indiceInicio,indiceDelet,numAdd)
console.log(num)

// REMOVENDO ITENS NO ARRAY
const num1 = [5, 6, 7, 8]
//const final = num.pop() //remove o ultimo item do array
//const final = num.shift() //remove o primeiro item do array
//const final = num.splice(2,1)
// console.log(num);
// console.log(final);

//ESVAZIANDO UM ARRAY
let num2 = [5, 6, 7, 8];
//num2.length = 0;
//num2 =[];
//num2.splice(0, num.length)

//Localizando itens em uma Array primitiva
console.log('-------------------')
const num3 = [1, 2, 3, 4]

console.log(num3.indexOf(3)); //retorna o indice onde o numero passado como parametro está está no array
console.log(num3.indexOf(100)); //retorna -1 quando o numero passado como parametro não está no array
console.log(num3.includes(3)); //retorna true se o numero existir e false se o numero não existir

console.log('-------------------')

//Localizando itens em uma Array de referencia
const pessoas = [
    { nome: 'João', idade: 35 },
    { nome: 'Maria', idade: 33 },
    { nome: 'José', idade: 32 },
]

console.log(pessoas.find(function(pessoa){ //o inlcude não funciona, tem que usar o find, e o find é executado com uma funcao
    return pessoa.nome == "Maria"
}));

console.log(pessoas.find(pessoa => pessoa.nome == "Maria"));//arrow function

console.log('-------------------')

//Concatenando arrays
