var vetor = [];
var verde = 0;
var vermelho = 0;
var preto = 0;

vetor.push(Math.random() * 36);

for(var i = 0; i < vetor.length; i++){
    if(vetor[i] === 0){
        verde++;
    } else if(vetor[i] % 2 !== 0){
        vermelho++;
    } else{
        preto++;
    }
}

var pvermelho = ((vermelho / 100) * vermelho)
var ppreto = ((preto / 100) * preto)
if(pvermelho > 40 || ppreto > 40){
console.log("ESTA DADO ESTA VICIADO");
}else{
    console.log("Este dado ta bom...");
}

