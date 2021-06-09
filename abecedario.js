function solucao(letra, palavras) {
let cont = 0;
for (let i = 0; i < palavras.length; i++){
  if (palavras[i][0] != letra) {
    cont++
  }
}
  console.log(cont);
}