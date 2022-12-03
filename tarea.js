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
    var nombre = persona.nombre;
    var edad = persona.edad;
    var apellido = persona.apellido
    console.log("Hola me llamo "  + nombre + apellido + "y tengo" + edad + "años");
}

imprimirNombreEnMayusculas(aldo);
imprimirNombreEnMayusculas(daniel);