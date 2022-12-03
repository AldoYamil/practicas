var sacha ={
    nombre: "Sacha",
    apellido: "Smith",
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirprofesiones(persona){
        console.log(`${persona.nombre} no es:`);


if(persona.cocinero === false) {
    console.log("Cocinero")
   }

   if(persona.cantante === false) {
    console.log("Canatnte")
   }

   if(persona.dj === false) {
    console.log("DJ")
   }

   if(persona.guitarrista === false) {
    console.log("Guitarrista")
   }
}

imprimirprofesiones(sacha);