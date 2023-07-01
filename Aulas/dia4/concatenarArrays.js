let numbers = [1,2,3,4]
let letters = ['a',',b','c']

let todos = numbers.concat(letters);
//Criar um novo array com [4,'a']
let metade = todos.slice(3,5) //o primeiro parametro é onde começa o novo array, e o segundo parametro é onde termina, sendo que este não é considerado.

console.log(metade)