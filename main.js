/* 
//Tabla multiplicar del 5
let table = 5;
let max = 10;


    for(let i = 0; i <= max; i++){

        let text = table + " x " + i + " = " + (table*i);
        document.write("<p>" + text + "</p>");
    } 
    */


    /* 
    //Operación con dos valores
    var num1 = prompt("Introduzca numero 1");
    num1=parseInt(num1);

    var num2 = prompt("Introduzca numero 2");
    num2=parseInt(num2);

    /* //Otra forma de pasarlo a entero es con Number;
    Number(num1); */

    /* //Para imprimir el resultado en un elemento seleccionado por su id
    document.getElementById("num1").innerText(Number(num1)); */

    /*var resultado = num1 + num2;

    document.write('<p>'+num1+' + '+num2+' = '+resultado+'</p>'); 
    */

   let contador = 0;
   
    function comprobar(){ 
       event.preventDefault();
        
        let numAleatorio = Math.floor(Math.random() * 11); 

        let num = document.getElementById("numIntroducido").value; 
        Number(num);

        if(num < 1 || num > 10){
            alert("Número introducido incorrecto");
        } 
        else if(num == numAleatorio){
            alert("Ha acertado, número de intentos " +contador+ ".");
        } 
        else {
            alert("Ha fallado"); 
            contador++;
        }     
     } 

    