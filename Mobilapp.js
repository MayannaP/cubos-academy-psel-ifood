function solucao(tempo, distancia) {
  let custo = 0; 
  if (tempo < 5) {
    custo = 600;
  } else if (tempo <60) {
    custo = (100*tempo) + (50*distancia);
  } else { 
    if (distancia <100) {
      custo = 200*distancia;
    } else {
      custo = 150*distancia;
    }
  }    
  console.log(custo)
}