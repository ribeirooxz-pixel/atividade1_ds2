function calculoTotal(preco, quantidade) {
  if (preco > 0 && quantidade > 0) 
  return preco * quantidade;
}
const resultadoTotal = calculoTotal(15, 2);
console.log("O valor total é:", resultadoTotal)
