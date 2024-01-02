function sayHello(name){
    console.table(`Olá, ${name}`)
}

export {sayHello}


/* Nesse modelo estou fazendo desestruturação ao invés de usar export default como nos outro modulos
eu simplesmente passo export {sayHello} e dentro do meu index.js eu importo o modulo fazendo import { sayHello } from './sayHello.js';*/