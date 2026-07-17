function executar() {
    let comando = document.getElementById('inputcomando').value ;
    let valor = document.getElementById('inputvalor').value ;
    let saida = document.getElementById('txtsaida')
    //procurar comando
if (comando == 'cowspeak'){
    saida.innerText = '🐮<|' + valor + '|' ;
} else if(comando == 'text') {
    saida.innerText = valor;
} else if(comando == 'open-window') {
    window.open(valor)
} else if(comando == 'js') {
    if(confirm('ATENÇÃO\nNÃO use um JavaScript de uma fonte não confiável. Deseja executar?') == true) {
        eval(valor)
    }
} else {
    saida.innerText = 'Spelling error: ' + comando + ': Command not found';
}
}
function explicar() {
    alert('digite o nome do comando onde está escrito "Comando" e o valor dele em "Valor".\nComandos:\ncomando: cowsapeak valor: (mensagem aqui)\ncomando: text valor: (texto aqui)\ncomando: open-window valor: (URL)\nComando: js Valor: (JavaScript aqui)')
}
