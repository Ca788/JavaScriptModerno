const array = [
    { name: "iphone", price: 5000, quantity: 2 },
    { name: "MacBook Pro", price: 20000, quantity: 1 },
    { name: "Magic Mouse", price: 1001, quantity: 5 }
];
   
/* .find = Utilizado para realizar pesquisas dentro de um array. 
O find sempre retorna o primeiro elemento que é true, ou seja se tiver vários elementos em um array, o primeiro elemento dentro da condicional se true
será retornado. */

const find = array.find((product) =>  product.price > 1000)
// console.log({find})


/* .findIndex = Utilizado para retornar o index do objeto do array.*/

const findIndex = array.findIndex((product) =>  product.name === 'iphone')
//console.log({ findIndex })
//console.log('Produto', array[findIndex])

/* .some = Determina se a função de retorno de chamada especificada retorna true para qualquer elemento de uma matriz.
(O some retorna um booleano) de acordo com a regra, exemplo se um dos meus produtos tem um valor maior que 1000 o some percorre todos para 
trazer o resultado, se tiver retorna true e se não houver retorna false.*/

const some = array.some((product) => product.price < 1000)
//console.log({some})

/* .every = Semelhante ao some so que uma condição, ele verifica se todos comprem a regra.*/

const every = array.every((product) => product.price > 1000)
//console.log({every})


/* .map() =  É utilizado para iterar sobre cada elemento de um array e retorna um novo array contendo 
elementos modificados de acordo com uma função especificada. 
Ele não altera o array original, mas cria um novo com as modificações desejadas.  */
const map = array.map((product) => ({
    ...product,
    subtotal: product.quantity * product.price,
}))
//console.log({map})

/* .Filter = Ele cria um novo array com todos os elementos que passam por um teste 
(implementado por uma função) especificado na chamada do método. */
const filter = array.filter((product) => product.quantity >= 2);
//console.log(filter)

/* .Reduce = Util para transformar um array em um único valor. 
Ele executa uma função de callback em cada elemento do array, 
resultando em um único valor de retorno. */
const reduce = array.reduce((accumulator, product) => {
    return accumulator + (product.price * product.quantity)
}, 0)
//console.log({reduce})

