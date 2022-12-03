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
        console.log(`${persona.nombre} es:`);


if(persona.ingeniero === true) {
    console.log("Ingeniero")
   }

   if(persona.drone === true) {
    console.log("Drone")
   }
}

imprimirprofesiones(sacha);