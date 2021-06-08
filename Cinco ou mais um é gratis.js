function solucao(precos) {
  let custo = 0;
  if (precos.length < 5) {
    for(let i = 0; i<precos.length; i++){
      custo = custo + precos[i];
    }
    } else { 
      let menor = precos[0];
      for (let i = 0; i<precos.length; i++){
        if (precos[i] < menor) {
          menor = precos[i]
        }
      }
      for(let i = 0; i<precos.length; i++){
        custo = custo + precos[i]; 
      }
      custo = custo - menor;  
    }
  console.log(custo)   
}