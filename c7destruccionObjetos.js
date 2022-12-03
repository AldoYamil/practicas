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
    console.log(nombre.toUpperCase());


}

imprimirNombreEnMayusculas(aldo);
imprimirNombreEnMayusculas(daniel);

function birthday(persona){
    persona.edad = persona.edad+1;
}

function cumpleaños(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}