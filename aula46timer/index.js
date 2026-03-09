// @ts-nocheck
function mostrarHora() {
   let data = new Date();

   return data.toLocaleTimeString('pt-BR', {
      hour12: false
   });
}
console.log(mostrarHora());

const timer = setInterval(function () {
   console.log(mostrarHora());
}, 1000);

setTimeout(function() {
   clearInterval(timer);
}, 10000);
setTimeout(function() {
   console.log('ola mundo')
}, 5000);
// function funcaoInterval() {
//    console.log(mostrarHora ());
// }
// setInterval(funcaoInterval, 1000)