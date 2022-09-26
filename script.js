
document.getElementById("generation").style.color = "grey";

function cambiarColor(){
// console.log("Hola!, sí funciona");
document.getElementById("generation").style.color = "pink";
}

function sumaDecimal(numero1,numero2,decimales){
    let decimales1 = numero1%1;
    let decimales2= numero2%1;

    let factor = 10**Math.max(decimales1,decimales2);
    
    return ((numero1*factor+numero2*factor)/factor).toFixed(decimales);

}

