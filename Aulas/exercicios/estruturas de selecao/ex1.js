const verificarLetra = (letra) => {
    if (letra == "M" || letra == "m") {
        alert("Masculino!");
    }
    else if (letra == "F" || letra == "f") {
        alert("Feminino!");
    }
    else {
        const novaLetra = prompt(`Sexo inválio! Digite M ou F:`)
        verificarLetra(novaLetra)
    }
}

const letraDigitada = prompt(`Digite seu sexo, M ou F:`)
verificarLetra(letraDigitada);

