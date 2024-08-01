
const txtop1 = document.getElementById("op1");
const txtoperador = document.getElementById("operador");
const txtop2 = document.getElementById("op2");
const botonCalcular = document.getElementById("calcular");
const presultado = document.getElementById("resultado")

function calcular() {


    const operador = txtoperador.value
    const op1 = parseFloat(txtop1.value)
    const op2 = parseFloat(txtop2.value)




    if ( ( operador == "+" || operador == "-" || operador == "*" || operador == "/" )&& !isNaN (op1)) && !isNaN (op2) {
        let resultado;
        switch (operador) {
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;

        }
        presultado.style = "colorblack"
        presultado.innerText = "=" + resultado
    }

    else {
        presultado.innerText = "calculo posible"
    }

}

