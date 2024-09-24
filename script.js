let operador1= document.getElementById('operador1');
let operador2= document.getElementById('operador2');
let resultado= document.getElementById('resultado');

function respuesta(valor){
    resultado.value = valor;
}

function sumar(){
    let numero1 = Number(operador1.value);
    let numero2 = Number(operador2.value);
    respuesta(numero1 + numero2);
}

function restar(){
    let numero1 = Number(operador1.value);
    let numero2 = Number(operador2.value);
    respuesta(numero1 - numero2);
}

function multiplicar(){
    let numero1 = Number(operador1.value);
    let numero2 = Number(operador2.value);
    respuesta(numero1 * numero2);
}

function dividir(){
    let numero1 = Number(operador1.value);
    let numero2 = Number(operador2.value);
    respuesta(numero1/numero2);
}

function potencia(){
    let numero1 = Number(operador1.value);
    let numero2 = Number(operador2.value);
    respuesta(numero1 ** numero2);
}

function valorAbsoluto(){
    //La función Math.abs() retorna el valor absoluto de un número
    //usamos el segundo valor par apoder realizar esta funcion
    let numero2 = Number(operador2.value);
    respuesta(Math.abs(numero2));
}

function aleatorio(){
    let minimo = Number(operador1.value);
    let maximo = Number(operador2.value);
    maximo = maximo + 1; //para que tome en cuenta al maximo..
    respuesta(Math.floor(Math.random() * (maximo - minimo) + minimo));//redondeamos de una para saber el valor como tal
}

function raiz(){
    //solo usamos el segundo espacio para la raiz
    let numero2 = Number(operador2.value);
    respuesta(Math.sqrt(numero2));
}

function round(){
    //un redondeo normal es decir, si hay un 9.5 redondea a 10 pero si hay un 9.4 redondea a 9
    let res = resultado.value;
    let valor = Math.round(Number(res));
    respuesta(valor);
}

function floor(){
    //floor que es piso, la funcion hace que se redondee para abajo
    let res = resultado.value;
    let valor = Math.floor(Number(res));
    respuesta(valor);
}

function ceil(){
    //como la palabra de ingles techo, esta funcion permite redondear para arriba
    let res = resultado.value;
    let valor = Math.ceil(Number(res));
    respuesta(valor);
}

