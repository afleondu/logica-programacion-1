let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

function mostrarResultados(numeros) {
    console.log(`De mayor a menor: ${numeros.join(", ")}`);
    console.log(`De menor a mayor: ${numeros.reverse().join(", ")}`);
}

if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales.");
} else {
    let numeros = [num1, num2, num3].sort((a, b) => b - a); // Ordenar de mayor a menor
    mostrarResultados(numeros);
}
