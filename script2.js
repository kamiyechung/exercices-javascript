function Count() {
  
  let value = Number(prompt("De quel nombre veux-tu calculer la factorielle ?"));

  for (var i = value - 1; i > 0; i--) {
    value = value * i;
  }
  return value;
}
  
console.log(Count());
