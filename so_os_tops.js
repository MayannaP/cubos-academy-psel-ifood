function solucao(produtos) {
  let total = 0; 
  let totalTop = 0;
  for (let roupa of produtos){
    total = total + roupa.preco;
      if (roupa.preco > 10000) { 
          totalTop = totalTop + roupa.preco;
      }
  }
  const percentual = totalTop/total;
  
  const output = {
      totalTop: totalTop,
      percentual: percentual
  }
  console.log(output)
}