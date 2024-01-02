/* Promises geralmente são utilizadas quando estamos trabalhando com tarefas
muito pesadas, que podem demorar para ser realizadas, tipo uma consulta 
no banco de dados. ENTÃO PROMISES É UTILIZADA PARA CONTROLAR TAREFAS PESADAS
RETORNANDO ALGUMA MENSAGEM */

/* Esse é um simples código onde simula a utilização de uma promise,
qua aguarda 2 segundos para gerar a mensagem de sucecsso*/

/* Existem duas formas de pegar o resultado de uma promise, 
a primeira é usando o THEN e o CATH a segunda forma é usando
o async e await */
const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Sucesso");
    // reject("Error");
  }, 2000);
});

/* apiCall
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => {
    console.log(erro);
  });
*/

async function run() {
  try {
    const resposta = await apiCall;
    console.log(resposta);
  } catch (error) {
    console.log(error);
  }
}

run();

/* Qual a diferença em usar uma ou a outra: Se utilizamos o sintaxe do 
.then e .catch serve mais para envio de email depois que o usuário faz o cadastro sem a necessidade de saber se o email foi enviado ou não. 
.then e .catch  é mais indicado */


