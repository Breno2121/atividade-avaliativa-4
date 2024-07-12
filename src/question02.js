import leia, { question } from 'readline-sync'

var vetor = question("Digite uma palavra: ");
var vetoraux = [];
var c1 = 0;
var c2 = 0;

for (var i = 0; i < vetor.length; i++){
    vetor[i];
    c1++;
    }

for (var i = c1-1; i >= 0; i--){
    vetoraux.push(vetor[i]);
}

var invertida = vetoraux.join().replaceAll(",", "");

if (vetor === invertida){
    console.log("E PALINDROMOS!!!");
    }
