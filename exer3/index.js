console.log("Acho Que Ta Tudo Certo")
const inputValor1 = document.getElementById("valor1");
const inputValor2 = document.getElementById("valor2");
const inputResultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btn1");
const radios = document.querySelectorAll('input[name="conta"]');
const soma = document.getElementById("soma");
const subtracao = document.getElementById("subtracao");
const multiplicacao = document.getElementById("multiplicacao");
const divisao = document.getElementById("divisao");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function() {
 
    const valor1 = parseFloat(inputValor1.value);
    const valor2 = parseFloat(inputValor2.value);

    let resultado = 0;
    radios.forEach(function(radio) {
        if (radio.checked) {
            if (radio.id === "soma") {
                resultado = valor1 + valor2;
            } else if (radio.id === "subtracao") {
                resultado = valor1 - valor2;
            } else if (radio.id === "multiplicacao") {
                resultado = valor1 * valor2;
            } else if (radio.id === "divisao") {
                if (valor2 !== 0) {
                    resultado = valor1 / valor2;
                } else {
                    alert("Não é possível dividir por zero!");
                }
            }
        }
    });

    
    inputResultado.value = resultado;
});
