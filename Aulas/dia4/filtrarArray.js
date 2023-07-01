const tempBrazil = [25, 22, 20, -2];

const tempsNegatives = tempBrazil.filter(value => value <= 0);
// O método filter() é uma função de array em JavaScript que cria um novo array com todos os elementos que passam em um teste implementado por uma função
console.log(tempsNegatives)