var sacha ={
    nombre: "Sacha",
    apellido: "Smith",
    edad: 15,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

//const MAYORIA_DE_EDAD = 17;



function permitirAcceso (persona){
   if (!esMayorDeEdad(persona)){
       console.log(`acceso denegado`);}
   }

   const accesoEdad = persona => persona.edad; 
   function permitirAcceso(persona) { 
    if(accesoEdad (persona)) { 
        console.log('Acceso Denegado');
    }
}