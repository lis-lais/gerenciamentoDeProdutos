const { mostrarMenu } = require('./menu');

const prompt = require('prompt-sync')();

function mostrarMenuBuscarProduto() {
    console.log(`
        --------Opção de Busca--------
        1. Por Nome
        2. Por Categoria
        3. Por Preço
        4. Por Estoque
        5. Voltar
    `);
};

function menuOptionsBuscarProduto(opcao, produtos) {
    let resultado = [];
    switch (opcao.trim()) {
        case '1':
            const nome = prompt('Digite o nome do produto: ').trim();
            resultado = produtos.filter((produto) => produto.nome.toLowerCase().includes(nome.toLowerCase()));
            break;
        case '2':
            const categoria = prompt('Digite a categoria do produto: ').trim();
            resultado = produtos.filter((produto) => produto.categoria === categoria);
            break;
        case '3':
            const preco = parseFloat(prompt('Digite o preço do produto: ').trim());
            resultado = produtos.filter((produto) => produto.preco === preco);
            break;
        case '4':
            const estoque = parseInt(prompt('Digite a quantidade de estoque do produto: ').trim());
            resultado = produtos.filter((produto) => produto.estoque === estoque);
            break;
        case '5':
            console.log('Busca cancelada.');
            console.log(mostrarMenu);
            return [];
        default:
            console.log('Opção inválida!');
            mostrarMenuBuscarProduto(); 
            return []; 
    }
    return resultado;
};

module.exports = { mostrarMenuBuscarProduto, menuOptionsBuscarProduto };