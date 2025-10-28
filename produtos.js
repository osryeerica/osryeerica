const produtos = [
    {
        nome: "notebook",
        preco: 5000,
        emEstoque: false
    }, 
    {
        nome: "SSD",
        preco: 400,
        emEstoque: true
    },
    {
        nome: "teclado",
        preco: 100,
        emEstoque: true
    },
];

const nomes = produtos.map(p => p.nome);

const precoDoTrump = produtos.map(p => ({
    nome: p.nome, 
    precoDoTrump: p.preco * 1.4
}));

console.log(precoDoTrump);
