const verificarNumero = (numero) => {
    if(!isNaN(numero)){
        const resto = numero % 2;
        if (resto === 0) {
            alert(`O número ${numero} é par!`);
        }
        else {
            alert(`O número ${numero} é impar!`);
        }
    }
    else{
        verificarNumero(Number(prompt(`Digite somente numeros!`)))
    }
}

verificarNumero(Number(prompt(`Digite um número:`)));