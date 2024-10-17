const prompt = require('prompt-sync')();
const { adicionarProduto, listarProdutos, atualizarProduto, excluirProduto, buscarProduto } = require('./cadastrarProduto.js');

function mostrarMenu() {
    console.log(`
        --------Menu--------
        1. Adicionar Produto
        2. Listar Produtos
        3. Atualizar Produto
        4. Excluir Produto
        5. Buscar Produto
        6. Sair
    `);
};

function menuOptions(opcao) {
    switch (opcao.trim()) {
        case '1':
            adicionarProduto();
            break;
        case '2':
            listarProdutos();
            break;
        case '3':
            atualizarProduto();
            break;
        case '4':
            excluirProduto();
            break;
        case '5':
            buscarProduto();
            break;
        case '6':
            console.log('Saindo...');
            process.exit();
        default:
            console.log('Opção inválida!');
            mostrarMenu();
    }
};

function menuLoop() {
    while (true) {
        mostrarMenu();
        const opcao = prompt('Digite a opção desejada: ').trim();
        menuOptions(opcao);
    }
};

module.exports = {mostrarMenu, menuOptions, menuLoop};