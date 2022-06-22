var horas = 0;
var minutos = 0;
var segundos = 0;
var cronometro;
function inicio(){
    cronometro = setInterval(() =>{
        horario(); 
    }, 1000);
}
function pause(){
    clearInterval(cronometro);  
}
function limpar(){
    clearInterval(cronometro)
    horas=0;
    minutos=0;
    segundos=0;
    document.getElementById("cronometro").innerHTML = '00:00:00';
}
function horario(){
    segundos++;
    if(segundos==60){
        segundos=0;
        minutos++;
    }
    if (minutos==60){
        minutos=0;
        horas++;
    }
    var format = 
    (horas < 10 ? "0" + horas : horas)+ ":" +
    (minutos < 10 ? "0" + minutos : minutos)+ ":" +
    (segundos < 10 ? "0" + segundos : segundos);
document.getElementById("cronometro").innerHTML = format;
}
