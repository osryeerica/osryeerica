const { execSync } = require("child_process");
const readline = require("readline-sync");

//  Ajustei o terminal para UTF-8 automaticamente (somente Windows)
try {
  execSync("chcp 65001 > NUL", { stdio: "ignore" });
} catch (error) {
}

function sugerirAtividades(destino) {
  console.log(`\n--- Atividades sugeridas para ${destino} ---`);
  const dest = destino.toLowerCase().trim();

  if (dest === "praia") {
    console.log("- Nadar no mar 🌊");
    console.log("- Tomar sol ☀️");
    console.log("- Fazer um passeio de barco 🚤");
    console.log("- Comer frutos do mar 🦐");
  } else if (dest === "montanha") {
    console.log("- Fazer trilhas 🥾");
    console.log("- Acampar ⛺");
    console.log("- Observar a natureza 🌿");
    console.log("- Assistir ao pôr do sol 🌄");
  } else if (dest === "cidade") {
    console.log("- Visitar museus 🖼️");
    console.log("- Fazer compras 🛍️");
    console.log("- Experimentar comidas locais 🍽️");
    console.log("- Fazer um city tour 🏙️");
  } else {
    console.log("Destino não reconhecido. Escolha entre Praia, Montanha ou Cidade.");
  }
}

function verificarOrcamento(orcamento) {
  console.log("\n--- Análise do orçamento ---");

  if (isNaN(orcamento)) {
    console.log("Orçamento inválido.");
    return;
  }

  if (orcamento >= 5000) {
    console.log(`Seu orçamento de R$ ${orcamento.toFixed(2)} é alto e permite muitas atividades! 💰`);
  } else if (orcamento >= 2000) {
    console.log(`Seu orçamento de R$ ${orcamento.toFixed(2)} é bom, dá para aproveitar bastante! 👍`);
  } else {
    console.log(`Seu orçamento de R$ ${orcamento.toFixed(2)} é econômico, foque em atividades gratuitas. 💡`);
  }
}

function planejarViagem() {
  console.clear();
  console.log("--- Bem-vindo ao Assistente de Viagem! ---");

  const nome = readline.question("Qual é o seu nome? ");
  const destino = readline.question("Escolha seu destino (Praia, Montanha ou Cidade): ");
  const dias = parseInt(readline.question("Quantos dias pretende viajar? "));
  const orcamento = parseFloat(readline.question("Qual é o seu orçamento disponível (em R$)? "));

  if (isNaN(dias) || isNaN(orcamento)) {
    console.log("Erro: Você digitou um valor inválido para dias ou orçamento!");
    return;
  }

  console.log(`\nOlá, ${nome}! Aqui está o resumo do seu plano de viagem:`);
  console.log(`Destino escolhido: ${destino}`);
  console.log(`Duração: ${dias} dias`);
  console.log(`Orçamento: R$ ${orcamento.toFixed(2)}`);

  sugerirAtividades(destino);
  verificarOrcamento(orcamento);

  console.log(`\n--- Itinerário de ${dias} dias ---`);
  for (let i = 1; i <= dias; i++) {
    console.log(`Dia ${i} da sua viagem para ${destino}`);
  }

  console.log("\nBoa viagem!");
}

planejarViagem();
