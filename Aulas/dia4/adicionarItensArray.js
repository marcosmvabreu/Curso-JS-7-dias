// ADICIONANDO ITENS NO ARRAY
const num = [5, 6, 7]

num.push(10, 11, 12); //adiciona itens no fim do array
num.unshift(2, 3, 4); //adiciona itens no inicio do array
console.log(num)
num.splice(6, 0, 8, 9) //adiciona itens no meio do array, .splice(indiceInicio,indiceDelet,numAdd)
console.log(num)