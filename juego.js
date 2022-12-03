var score=0;//esta linea es una variable que se va a encargar de cargar los puntos
//esta linea es un ciclo for donde indico que quiero que se repita hasta que gane 3 puntos
for(i=1; score<=3; score++){
alert("Elige"); //esta linea me presenta el primer mensaje donde me dice que eliga un numero para empezar a jugar
playerone = prompt("tijeras:0\npapel:1\npiedra:2");   //esta linea pu esta pidiendo que ingrese un numero para jugar
function pcopcion(minimo, maximo){ //esta funcion genera un numero aleatorio entre el o y el 2 para que la computadora pueda jugar
var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
return numero;
}
    // las siguientes 3 lineas son variables en las que declaro la opciones de juego y le asigno un valor a cada una para poder elegir
var tijeras = 0;
var papel = 1;
var piedra = 2;
    //esla linea es una constante que me da opciones y que nunca van a cambiar en este juego
const opciones=["tijeras", "papel", "piedra"];
    //estas variables son donde declaro como voy a jugar y como va a jugar la computadora
var playerone;
var computadora = pcopcion(0,2);
    //las dos lineas sigientes me mostraran un mensaje en el que me diran que opcion escogi para jugar y que opcion escogio la computadora para jugar
alert("playerone escogio"+ opciones[playerone]);
alert("computadora escogio"+ opciones[computadora]);
    //de la linea 22 hasta la 61 es todo un gran if donde se muestra lo que quiero que pase en caso de que yo escoga cualquier opcion y la computadora escoga otra y si gano me suma un punto y si escogo un numero que no esta
    //entoces me marca el mensage mal elegido.
if(playerone == tijeras){
    if(computadora == tijeras){
        alert("Empataron")
    }
    else if(computadora == papel){
        alert("Ganaste =)")
       score ++;
    }
    else if(computadora == piedra){
        alert("Perdiste =(")
    }
}
else if(playerone == papel){
    if(computadora == tijeras){
        alert("Perdiste =(")
    }
    else if(computadora == papel){
        alert("Empate")
    }
    else if(computadora == piedra){
        alert("Ganaste =)")
        score ++;
    }
}
else if(playerone == piedra){
    if(computadora == tijeras){
        alert("Ganaste =)")
        score ++;
    }
    else if(computadora == papel){
        alert("Perdiste =(")
    }
    else if(computadora == piedra){
        alert("Empate")
    }
}
else{
    alert("MAL ELEGIDO")}
    //esta linea me aparecera un mensaje donde se estaran contando los puntos y cada vez que gane 3 puntos el juego terminara
alert("player one gano " + score + " partidas y computadora gano " + score + " partidas")}
