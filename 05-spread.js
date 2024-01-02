const user = {
  firstName: "Carlos",
  lastName: "Lima",
  age: 24,
  instagram: "@duca_liima",
  skills: [
    "Front-end Development",
    "back-end Development",
    "Mobile Development",
    "UI/UX",
  ],
  active: false,
};

//Spread tem ideia de (espalhar) operator

//Existe formas de alterar a propiedade active: true
// A primeira é passando um user.active: true

// A outra forma é usando o Object.assig(user, { firstName: "Duca" } )
// O assign serve para fazer merge de dois objetos
// Imutabilidade é um dos principios do REACT QUE MEANS NUNCA MUDAR UM DADO.

//Diferente do rest os spread não precisa colocar no final e sim em qualquer lugar os ... e nome

//Agora seguindo os conceitos de Spread operator

const updatedUser = {
  ...user,

  skills: [...user.skills, "Marketing"],

  active: true,
};

console.log({ user });
console.log({ updatedUser });
