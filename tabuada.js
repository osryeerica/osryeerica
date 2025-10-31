// Importa a biblioteca readline-sync, que nos permite capturar inputs do usuário de forma síncrona (o programa espera a resposta).
// A palavra-chave 'require' é como pedimos para o Node.js carregar um módulo (uma caixa de ferramentas).
// 'const readline' cria uma variável constante para armazenar a biblioteca que acabamos de importar.
const readline = require('readline-sync');

// 1. Pergunta um número ao usuário e armazena a resposta.
// O método '.question()' mostra a mensagem para o usuário e espera que ele digite algo e pressione Enter.
// IMPORTANTE: Toda resposta do usuário é sempre recebida como uma string (texto).
const numeroTexto = readline.question("Digite um numero para ver a tabuada: ");

// 2. Converte a resposta (que é texto) para o tipo Number (número).
// Para realizar cálculos matemáticos, precisamos garantir que estamos trabalhando com números, não com texto.
// A função 'Number()' tenta converter o valor que está dentro dos parênteses para um número.
const numero = Number(numeroTexto);

// Imprime um cabeçalho para a tabuada, usando o número que o usuário digitou.
console.log(`\nTabuada de ${numero}:\n`);

// 3. Usa um laço 'for' para gerar e exibir a tabuada daquele número, de 1 a 10.
// O 'for' é uma estrutura de repetição ideal para quando sabemos exatamente quantas vezes queremos repetir um bloco de código.
// Estrutura do for: for (inicialização; condição; incremento)
// - let i = 1;      -> Cria uma variável 'i' que começa com o valor 1. Ela servirá de contador.
// - i <= 10;        -> O laço continuará executando ENQUANTO esta condição for verdadeira (enquanto 'i' for menor ou igual a 10).
// - i++             -> Ao final de cada repetição (iteração), o valor de 'i' é aumentado em 1.
for (let i = 1; i <= 10; i++) {
    // Dentro do laço, este código será executado 10 vezes.
    // A cada vez, o valor de 'i' será diferente (1, 2, 3, ..., 10).
    // Usamos a `template string` (crases) para montar a linha da tabuada de forma legível.
    console.log(`${numero} x ${i} = ${numero * i}`);
}
