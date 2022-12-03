//en estas lineas estoy creando un objeto llamado aldo que muestra diferents datos 
var aldo = {
  nombre: 'ALDO',
  apellido: 'ALVAREZ',
  edad: 17,
  peso: 100
}
//en estas lineas estoy creando funcionezs de flecha donde indico lo que quiero que pase si dependiendo el numero que genere
const Incremento = 0.2;
const Subir = aldo => aldo.peso += Incremento;
const Bajar = aldo => aldo.peso -= Incremento;
const Igual = aldo => aldo.peso;
//aqui estoy pidiendo que se muestre en consola el sigiente mensaje con mi nombre y el peso del año
console.log(`Yo  ${aldo.nombre} peso ${aldo.peso}kg`)
//aqui estoy empezando un ciclo while donde le indico que inicie en uno y no pase de 365 por el numero de dias en un año
var i = 1;
while (i <=  365) {
//aqui estoy creando una nueva variable donde le estoy pidiendo que eliga un numero aleatorio
  var ramdom = Math.random();
//aqui le digo que si el numero esta entre 0 y 0.25 ejecute la funcion de subir de peso
  if (ramdom <= 0.25) {

      Subir(aldo);

  } 
  //aqui le digo que si el numero esta entre 0.26 y 0.5 ejecute la funcion de bajar de peso
  else if (ramdom <= 0.5) {

      Bajar(aldo);
  }
  //aqui le digo que si el numero esta entre 0.5 y 1 ejecute la funcion de que el peso quede igual
  else(random<=1){
    Igual(aldo);
  }
  i++;
}
//aqui estoy pidiendo que me aparesca en consola un mensaje con mi nombre y el nuevo peso al final del año
console.log(`Yo ${aldo.nombre} al finalizarel año peso ${aldo.peso.toFixed(2)}kg`)
