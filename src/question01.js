import leia, { question } from 'readline-sync'


var vetor = question("Digite um texto ou palavra: ");

var c1 = 0;

for (var i = 0; i < vetor.length; i++){
    vetor[i];
    if(vetor[i] === "a" || vetor[i] === "e" || vetor[i] === "i" || vetor[i] === "o" || vetor[i] === "u"){
    c1++;
    }
}

console.log(vetor)
console.log(c1)
