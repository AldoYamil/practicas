var aldo = {
    nombre: "Aldo",
    apellido: "Alvarez",
    edad: 17
}

var daniel = {
    nombre: "Daniel",
    apellido: "Atlas",
    edad: 28
}

function imprimirNombreEnMayusculas(persona){
    apellido = persona.apellido.toUpperCase();
    console.log(apellido);
}

imprimirNombreEnMayusculas(aldo);
imprimirNombreEnMayusculas(daniel);