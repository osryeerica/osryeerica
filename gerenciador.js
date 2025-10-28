const readline = require('readline-sync');

function criarTarefa(id, nome) {
    return {
        id: id,
        nome: nome,
        concluida: false
    };
}


function exibirRelatorio(tarefas) {
    console.log("\n===== RELATÓRIO FINAL =====");

    const concluidas = tarefas.filter(t => t.concluida);
    const pendentes = tarefas.filter(t => !t.concluida);

    console.log("\n✅ Tarefas Concluídas:");
    if (concluidas.length > 0) {
        concluidas.forEach(t => console.log(`- (${t.id}) ${t.nome}`));
    } else {
        console.log("Nenhuma tarefa concluída.");
    }

    console.log("\n🕓 Tarefas Pendentes:");
    if (pendentes.length > 0) {
        pendentes.forEach(t => console.log(`- (${t.id}) ${t.nome}`));
    } else {
        console.log("Nenhuma tarefa pendente!");
    }
}

function main() {
    console.log("=== GERENCIADOR DE TAREFAS ===");

    let tarefas = [];

    try {
        
        const qtd = Number(readline.question("Quantas tarefas deseja adicionar inicialmente? "));

        if (isNaN(qtd) || qtd < 1) {
            console.log("❌ Entrada inválida. É necessário informar um número maior que zero.");
            return;
        }

        
        for (let i = 1; i <= qtd; i++) {
            const nome = readline.question(`Digite o nome da tarefa ${i}: `);
            tarefas.push(criarTarefa(i, nome));
        }

        
        while (true) {
            const novaTarefa = readline.question("\nDeseja adicionar mais uma tarefa? (Digite o nome ou pressione ENTER para pular): ");
            if (novaTarefa.trim() === "") break;
            const novoId = tarefas.length + 1;
            tarefas.push(criarTarefa(novoId, novaTarefa));
        }

       
        const idConcluir = Number(readline.question("\nDigite o ID da tarefa que deseja marcar como concluída: "));
        const tarefa = tarefas.find(t => t.id === idConcluir);

        if (tarefa) {
            tarefa.concluida = true;
            console.log(`✅ A tarefa "${tarefa.nome}" foi marcada como concluída.`);
        } else {
            console.log("❌ ID inválido. Nenhuma tarefa foi marcada como concluída.");
        }

    
        exibirRelatorio(tarefas);

    } catch (erro) {
        console.log("⚠️ Ocorreu um erro durante a execução do programa:", erro.message);
    }
}

main();
