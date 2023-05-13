// const multiplicar = (x,y) => console.log(x * y);
// const somar = (x,y) => console.log(x + y);
// const diminuir = (x,y) => console.log(x - y) ;
// const dividir = (x,y) => console.log(x / y );

const analiseEmprestimo = (salBruto, valPrest) => {
    if(!isNaN(salBruto) && !isNaN(valPrest)){
        const porcentagemPrest = (valPrest * 100) / salBruto;
        if(porcentagemPrest <= 30){
            alert(`O emprétimo pode ser concedido!`)
        }
        else{
            alert(`O empréstimo não pode ser concedido!`)
        }
    }
    else{
        analiseEmprestimo(
            Number(prompt(`Digite o salário bruto em número!`)),
            Number(prompt(`Digite o valor da prestacao em número!`))
        )
    }
}


analiseEmprestimo(
    Number(prompt(`Digite seu salário bruto:`)),
    Number(prompt(`Digite o valor da prestação:`))
)




