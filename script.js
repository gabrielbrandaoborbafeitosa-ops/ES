function executar() {
    let comando = document.getElementById('inputcomando').value ;
    let valor = document.getElementById('inputvalor').value ;
    let saida = document.getElementById('txtsaida')
    //procurar comando
if (comando == 'cowspeak'){
    saida.innerText = '🐮<|' + valor + '|' ;
} else if(comando == 'calc') {
    let calculo = Number(valor)
    saida.innerText = calculo ;
}  else if(comando == 'text') {
    saida.innerText = valor;
} else if(comando == 'open-window') {
    window.open(valor)
} else {
    saida.innerText = 'Spelling error: ' + valor + ': Command not found';
}
}
function explicar() {
    alert('digite o nome do comando onde está escrito "Comando" e o valor dele em "Valor".\nComandos:\ncomando: cowsapeak valor: (mensagem aqui)\ncomando: calc valor: (Cáuculo aqui) (ATENÇÃO coloque o sinal entre espaços, como 1 + 1, não 1+1)\ncomando: text valor: (texto aqui)\ncomando: open-window valor: (URL)')
}
