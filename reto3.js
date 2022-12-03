var sacha ={
    nombre: "Sacha",
    apellido: "Smith",
    edad: 16,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}
function imprimir_Profesiones(persona){
        console.log(`${persona.nombre} es:`);
if(persona.edad > 18) {
    console.log("mayor de edad")
   }
else {
    console.log("menor de edad")
   }
}
imprimir_Profesiones(sacha);