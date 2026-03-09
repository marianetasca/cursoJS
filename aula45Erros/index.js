// @ts-nocheck
try {
   // é executado quando nao ha erros
} catch (e) {
   // é executada quando ha erros
} finally {
   // sempre
}

try {
   console.log('abri um arquivo');
   console.log('manipulei o arquivo');
   console.log('fechei o arquivo');
} catch (e) {
   console.log('tratando o erro');
} finally {
   console.log('FINALLY: eu sempre sou executado');
}
//////////////
function retornaHora(data) {
   if (!(data instanceof Date)) {
      throw new Error('esperando instancia de date');
   }

   if (!data) {
      data = new Date();
   }

   return data.toLocateTimeString('pt-BR', {
      hour: '2-digite',
      minute: '2-digite',
      second: '2-digite',
      hour12: false
   })
}
try {
   const data = new Date('01-01-1970 12:58:12');
   const hora = retornaHora();
   console.log(hora);
} catch (error) {
   
} finally {
   console.log('tenha um bom dia')
}