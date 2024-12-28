function sortear(){
let quantidade =parseInt(document.getElementById('quantidade').value);
let de = parseInt(document.getElementById('de').value);
let ate = parseInt(document.getElementById('ate').value);
let sorteados = [];
let numero;

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }


    for (let index = 0; index < quantidade; index++) {
        numero  = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero  = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');
        }

        sorteados.push(numero);
    }
let resultado = document.getElementById('resultado');
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botaoReinicia = document.getElementById('btn-reiniciar');
        if(botaoReinicia.classList.contains('container__botao-desabilitado')){
            botaoReinicia.classList.remove('container__botao-desabilitado');
            botaoReinicia.classList.add('container__botao');
        }else{
            botaoReinicia.classList.remove('container__botao');
            botaoReinicia.classList.add('container__botao-desabilitado');
        }
}

function reiniciar(){
document.getElementById('quantidade').value='';
document.getElementById('de').value='';
document.getElementById('ate').value='';
document.getElementById('resultado').innerHTML= '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
alterarStatusBotao();
}