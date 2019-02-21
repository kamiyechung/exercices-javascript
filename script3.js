let myfloor = Number(prompt("salut combien d'etages veux tu ?"));
let space = " ";
let design = "*"; //etoile c'est mieux :)
let i = 1;
let numberOf = myfloor;

while (i <= myfloor){
  var pyramid = space.repeat(numberOf-1)+design;
  design = "*" + design;
  console.log(pyramid);
 numberOf --;
 myfloor--;
}
