// REMOVENDO ITENS NO ARRAY
const num = [5, 6, 7, 8]

num.pop() //remove o ultimo item do array e retorna o numero removido
num.shift() //remove remove o primeiro item do array e retorna o numero removido
num.splice(1,1) //O primeiro parametro é o indice do item que quero remover,e o segundo é a quantidade que será removida
console.log(num)