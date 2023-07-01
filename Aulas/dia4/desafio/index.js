$(document).ready(function () {
    $("button").click(()=> {
        const num1 = Number($('#numero1').val());
        const num2 = Number($('#numero2').val());
        const operation = $('input[name="operacao"]:checked').val();
        const result = $('#resultado');

        if (operation == "somar") {
            result.text(num1 + num2);
        }
        else if (operation == "diminuir") {
            result.text(num1 - num2);
        }
        else if (operation == "multiplicar") {
            result.text(num1 * num2);
        }
        else if (operation == "dividir") {
            result.text(num1 / num2);
        }
    })
});