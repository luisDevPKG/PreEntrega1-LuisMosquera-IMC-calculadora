/*
Autor: Luis Fernando Mosquera Imbachi - 18/10/2023
Primera pre-entrega del curso de javascript
*/

// funcion para que los inputs solo reciban numeros
function soloNumeros(input){
    // elimino caracteres que no son numeros
    input.value = input.value.replace(/[^0-9.]/g, '');
}

//Defino un array vacio de resultados para calcular promedio mas adelante
let resultados = [];

// Funcion que calculara el Indice de masa corporal
function calcularIMC() {

    // Obtengo el valor del Peso:
    let peso = document.getElementById('peso').value;

    // Obtengo el valor de la estatura:
    let estatura = document.getElementById('estatura').value;

    // Valido que los campos NO puedan estár vacios
    if (peso == "" && estatura == ""){
        alert("No se puede realizar el calculo, por favor ingresa el peso y la estatura")
    } else if (peso == "") {
        alert("No se puede realizar el calculo, por favor ingresa el peso")
    } else if (estatura == "") {
        alert("No se puede realizar el calculo, por favor ingresa la estatura")
    } else {
        // convierto la entrada en un numero
        peso = parseFloat(peso);

        // convierto la entrada en un numero
        estatura = parseFloat(estatura);

        // valido que la estatura No sea cero porque la division sería infinita
        if (estatura !== 0.0){
            // defino la variable que va almacenar el resultado
            let resultado  = peso / (Math.pow(estatura, 2));
            // redondeo el valor de resultado a 2 decimales
            resultado = Number(resultado.toFixed(2));

            // comienzo a llenar el arreglo de resultados (creado al inicio)
            resultados.push(resultado);

            if (resultado > 30.0){
                alert(`El paciente presenta un IMC de ${resultado}, por lo que presenta OBESIDAD`);
            } else if (resultado > 25.0 && resultado < 29.9) {
                alert(`El paciente presenta un IMC de ${resultado}, por lo que presenta SOBREPESO`);
            } else if (resultado > 18.5 && resultado < 24.9){
                alert(`El paciente presenta un IMC de ${resultado}, por lo que presenta PESO NORMAL`);
            } else {
                alert(`El paciente presenta un IMC de ${resultado}, por lo que presenta DESNUTRICION`);
            }
        } else {
            alert("Por favor ingresa informacion correcta, la estatura no puede ser cero (0)")
        }
    }
    // limpio los inputs
    document.getElementById('peso').value = "";
    document.getElementById('estatura').value = "";
}

function calcularPromedio(){
    let suma = 0;
    // recorro el array de resultados para obtener cada elemento y sumarlo
    for (let i = 0; i < resultados.length; i++) {
        suma += resultados[i];
    }
    // Calculo el promedio
    let promedio = Number((suma / resultados.length).toFixed(2));
    alert(`El promedo de IMC de las consultas realizadas es ${promedio}`)
}

