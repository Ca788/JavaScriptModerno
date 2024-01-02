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
};

//Rest operator é utilizado para retornar o resto dos meus elementos e para utilizar basta adicionar ... e o nome no meu caso ...RestoUser e ..restoSkills.
// A regra é que o rest tem que ser sempre o ultimo elemento da desestruturação.
const { firstName, skills, ...RestoUser } = user;
const [primary, ...restoSkills] = skills;

console.log(RestoUser);
