const readline = require('readline-sync');

let num1 = Number(readline.question("Digite o primeiro número: "));
let num2 = Number(readline.question("Digite o segundo número: "));

let operacao = readline.question("Digite a operação desejada (+, -, *, /): ");

let resultado;

if (operacao === "+") {
    resultado = num1 + num2;
    console.log(`O resultado de ${num1} + ${num2} é ${resultado}`);
} else if (operacao === "-") {
    resultado = num1 - num2;
    console.log(`O resultado de ${num1} - ${num2} é ${resultado}`);
} else if (operacao === "*") {
    resultado = num1 * num2;
    console.log(`O resultado de ${num1} * ${num2} é ${resultado}`);
} else if (operacao === "/") {
    if (num2 === 0) {
        console.log("Erro: divisão por zero não é permitida!");
    } else {
        resultado = num1 / num2;
        console.log(`O resultado de ${num1} / ${num2} é ${resultado}`);
    }
} else {
    console.log("Operação inválida! Use +, -, * ou /");
}
