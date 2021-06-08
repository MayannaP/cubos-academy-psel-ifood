function solucao(largura, altura) {
  if (largura < altura) {
    console.log("RETRATO");
  } else if (largura === altura) { 
    console.log("QUADRADA");
  } else {
    console.log("PAISAGEM");
  }
}