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

const MAYORIA_DE_EDAD = 17;

function esMayorDeEdad (persona) {
    return persona.edad > MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad (persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);}
        else{
            console.log(`${persona.nombre} es menor de edad`);
        }
    }