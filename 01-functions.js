//Formas de escritas das funcões arrrow e funcões normais.
// Funcões normais possuem seus própios this (este)
// Enquanto funcões de Arrow tem o this (este) dentro do seu escopo.

function minhaFunction() {
  this.name = "Carlos";

  const minhaArrowFunction = () => {
    this.lastname = "Lima";
  };

  minhaArrowFunction();
}

console.log(new minhaFunction());
console.log(this);

//Aqui é apenas um conceito do operador rest... que traduzindo do português é resto.
function soma(...argumentos) {
  console.log(argumentos);
}

soma(1, 2, 3, 4, 5, 6, 7, "Carlos");
