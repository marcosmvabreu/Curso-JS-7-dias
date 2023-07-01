const tempBrazil = [25, 22, 20];

const tempPositive = tempBrazil.every(value => value >= 0);
//every -> O método every() em JavaScript é uma função de array que verifica se todos os elementos de um array satisfazem uma determinada condição. 
console.log(tempPositive)