const user = {
  firstName: "Carlos",
  lastName: "Lima",
  full_name: "Nome completo",
  age: 24,
  instagram: "@duca_liima",
  skills: [
    "Front-end Development",
    "back-end Development",
    "Mobile Development",
    "UI/UX",
  ],
};

// Para fazer alteração no nome de uma propiedade que esteja sendo desestruturada é so adicionar : antes do nome e adicionar o novo (full_name: fullName).

//Destructuring

//Essa é uma das formas a para fazer destruturação de objetos,
//Usando {} e dentro passando as propiedades da função, que nesse caso é user;
const { firstName, age, skills, full_name: fullName } = user;

// A forma para desestruturar um arry é usadndo [] da mesma forma que o array é criado.
const [primary, secondary, tertiary, quaternary] = skills;

console.log(fullName);
