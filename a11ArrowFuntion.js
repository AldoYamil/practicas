//aqui estoy creando un objeto donde muestra los datos de sacha
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


//aqui estoy creando una funcion en la que le dijo que si la persona es mayor de edad me de acceso 
function permitirAcceso (persona){
   if (!esMayorDeEdad(persona)){
       console.log(`acceso consedido`);}
   }
//aqui estoy creando una funcion en la que le dijo que si la persona no es mayor de edad no me de acceso
   const accesoEdad = persona => persona.edad; 
   function permitirAcceso(persona) { 
    if(accesoEdad (persona)) { 
        console.log('Acceso Denegado');
    }
}
