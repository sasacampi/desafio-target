let numero = prompt("Digite um número para verificar se pertence à sequência de Fibonacci:");
let fibA = 0;
let fibB = 1;
let fibC = fibA + fibB;
let pertence = false;

while (fibC <= numero) {
  if (fibC === numero) {
    pertence = true;
    break;
  }
  fibA = fibB;
  fibB = fibC;
  fibC = fibA + fibB;
}

if (pertence) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
