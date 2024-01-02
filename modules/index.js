import { sayHello as novoNome } from './sayHello.js';
import User from './users.js'
import printPiramide from './Piramide.js'

novoNome('Carlos')
console.table(User)
console.log(printPiramide)


/* Para renomear o nome da importação fazendo desestruturação batas adicionar um as no meio da mesma o que acontece no 
import do sayHello import { sayHello as novoNome } from './sayHello.js'; */