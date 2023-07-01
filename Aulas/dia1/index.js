//TIPOS DE DADOS PRIMITIVOS
let itemName = "Pen" //String
let itemPrice = 4 //Number
let itemAvailable = true //Boolean
let itemColor = "BLue";
let category = "Escolar"


//TIPOS DE DADOS REFERENCIAIS

//Class
class Caneta {
    constructor(model, cor) {
        this.model = model;
        this.cor = cor;
        function(novaCor) {
            this.cor = novaCor;
        }
    }
}
const caneta1 = new Caneta("bic", "Azul");
caneta1.mudarCor("Vermelha");
console.log(caneta1.cor);

//Object
let pen = {
    itemName: "Pen",
    itemPrince: 3,
    itemAvailable: true,
    itemColor: "Red",
    mudarCor: (novaCor) => {
        this.itemColor = novaCor;
    }
}

pen.itemColor = "Blue"; //Acessando e mudando uma propriedade do objeto
console.log(pen.itemColor);

//Array
let pessoas = ["Marcos", "Beatriz", "Pedro", "Betina"];

//Function
function juntarPessoas(pessoa1, pessoa2) {
    return `As pessoas passadas nesta função são: ${pessoa1} e ${pessoa2}`
}
console.log(juntarPessoas(pessoas[0], pessoas[1]))