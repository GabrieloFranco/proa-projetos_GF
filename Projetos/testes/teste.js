// Função que é chamada quando o botão é clicado
function exibirValorInput() {
    // Obtém a referência ao elemento input pelo seu id
    var onde_esta_o_valor = document.getElementById("meuInput");

    // Obtém o valor do input
    var valorInput = onde_esta_o_valor.value;

    // Obtém a referência ao elemento onde o resultado será exibido
    var resultadoElement = document.getElementById("resultado");

    // Exibe o valor do input no resultado
    resultadoElement.innerHTML = "Você digitou: " + valorInput;
}
