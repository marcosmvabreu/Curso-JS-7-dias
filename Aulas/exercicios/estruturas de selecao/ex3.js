const classificaNadador = (idade) => {
    if(!isNaN(idade)){      
        if(idade >= 5 && idade <= 7){
            alert(`Categoria: Infantil A`)
        }
        else if(idade >= 8 && idade <= 10){
            alert(`Categoria: Infantil B`)
        }
        else if(idade >= 11 && idade <= 13){
            alert(`Categoria: Juvenil A`)
        }
        else if(idade >= 14 && idade <= 17){
            alert(`Categoria: Juvenil B`)
        }
        else if(idade > 17){
            alert(`Categoria: Adulto`)
        }
        else{
            alert('Sem categoria disponíve para menores de 5 anos!')
        }

    }
    else{
        classificaNadador(Number(prompt(`Digite uma idade válida!`)))
    }
}

classificaNadador(Number(prompt(`Digite a idade do nadador:`)))