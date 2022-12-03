var aldo = {
  nombre: 'ALDO',
  apellido: 'ALVAREZ',
  edad: 17,
  peso: 100
}

const Incremento = 0.2;
const Subir = aldo => aldo.peso += Incremento;
const Bajar = aldo => aldo.peso -= Incremento;

console.log(`Yo  ${aldo.nombre} peso ${aldo.peso}kg`)

var i = 1;
while (i <=  365) {

  var ramdom = Math.random();

  if (ramdom <= 0.25) {

      Subir(aldo);

  } 
  else if (ramdom <= 0.5) {

      Bajar(aldo);
  }
  i++;
}

console.log(`Yo ${aldo.nombre} al finalizarel año peso ${aldo.peso.toFixed(2)}kg`)