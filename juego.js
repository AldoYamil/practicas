var score=0;
for(i=1; score<=3; score++){
alert("Elige");
playerone = prompt("tijeras:0\npapel:1\npiedra:2");
function pcopcion(minimo, maximo){
var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
return numero;
}
var tijeras = 0;
var papel = 1;
var piedra = 2;
const opciones=["tijeras", "papel", "piedra"];
var playerone;
var computadora = pcopcion(0,2);
alert("playerone escogio"+ opciones[playerone]);
alert("computadora escogio"+ opciones[computadora]);
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
alert("player one gano " + score + " partidas y computadora gano " + score + " partidas")}