alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
let chute;
let contador = 1;

while (numeroSecreto != chute){
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);
    if(numeroSecreto == chute){
        break;
    }
    else{
        if(chute > numeroSecreto){
            alert(`Número ${chute} é maior que o número secreto`);
        }else{
            alert(`Número ${chute} é menor que o número secreto`);
        }
    }
    contador++;
}

let tentativas = contador == 1 ? "tentativas" : "tentativa";
alert(`Acertou ${numeroSecreto} com ${contador} ${tentativas}`);