import leia from 'readline-sync'



for (var i = 0; i < 1; i++) {
    var nome = leia.question("Digite o nome do jogador " + i + ": ");
        var c1 = leia.questionInt("Digite a quantos gols ele fez: ");
        var c2 = leia.questionInt("Digite a quantos passes certos: ");
        var c3 = leia.questionInt("Digite a quantos passes errados: ");
    
    var soma = ((c1 * 50) + (c2 * 10) + (c3 * -5));
   var somapontos = 0;
   var nomemaiorpont;

    if (soma === undefined || soma > somapontos) {
        somapontos = soma;
        nomemaiorpont = nome;
    }
}
if (somapontos < 50){
    console.log("PESSIMA PARTIDA.");
}else if (somapontos >= 50 && somapontos < 100){
    console.log("PARTIDA RUIM.");
}else if (somapontos >= 100 && somapontos < 150){
    console.log("FEZ O BASICO.");
}else if (somapontos >= 150 && somapontos < 200){
    console.log("FOI BEM NA PARTIDA.");
}else {
    console.log("JOGOU DEMAIS!!!");
}
console.log("Sua pontuação foi: " + somapontos + " Pontos.");
