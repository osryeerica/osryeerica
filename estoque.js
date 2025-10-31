// --- ESTADO INICIAL DO ESTOQUE ---
let estoqueCafeEmGramas = 100;
let estoqueLeiteEmMl = 1000;
let estoqueCopos = 20;

const clientesParaAtender = 15;

let consumoCafe = 10; 
const consumoLeite = 50;
const consumoCopos = 1;

let diaDaSemana = "Domingo"; 
if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
    consumoCafe = 20;
}

for (let cliente = 1; cliente <= clientesParaAtender; cliente++) {
    
    if (estoqueCafeEmGramas < consumoCafe) {
        console.log("Acabou o CAFÉ. Precisamos comprar mais!");
        break;
    } else if (estoqueLeiteEmMl < consumoLeite) {
        console.log("Acabou o LEITE. Precisamos comprar mais!");
        break;
    } else if (estoqueCopos < consumoCopos) {
        console.log("Acabaram os COPOS. Precisamos comprar mais!");
        break;
    } else {
    
        estoqueCafeEmGramas -= consumoCafe;
        estoqueLeiteEmMl -= consumoLeite;
        estoqueCopos -= consumoCopos;

        console.log(`Cliente ${cliente} atendido com sucesso!`);
    }
}

console.log("\n--- RELATÓRIO FINAL DO ESTOQUE ---");
console.log(`Café restante: ${estoqueCafeEmGramas}g`);
console.log(`Leite restante: ${estoqueLeiteEmMl}ml`);
console.log(`Copos restantes: ${estoqueCopos}`);
