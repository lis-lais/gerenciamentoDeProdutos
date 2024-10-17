const prompt = require('prompt-sync')();
const { mostrarMenuBuscarProduto, menuOptionsBuscarProduto } = require('./menuBuscar.js');
const { mensagemError } = require('./error.js');

let produtos = [];

function novoProduto(callbacks) {
    const nome = prompt('Nome: ');
    const categoria = prompt('Categoria: ');
    const preco = prompt('Preço: ');
    const estoque = prompt('Estoque: ');

    const produto = {
        id: Date.now(),
        nome: nome.trim(),
        categoria: categoria.trim(),
        preco: preco.trim(),
        estoque: estoque.trim(),
    };

    callbacks(produto);
};

function adicionarProduto() {
    novoProduto((produto) => {
        let existe = false;
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].nome === produto.nome && produtos[i].categoria === produto.categoria) {
                existe = true;
                break;
            }
        }
        if (existe) {
            console.log('Este produto já está cadastrado!');
        } else {
            produtos.push(produto);
            console.log('Produto adicionado com sucesso!');
        }  
    });
};

function listarProdutos() {
    if (produtos.length === 0) {
        console.log('Nenhum produto cadastrado!');
        return;
    }

    console.log('Produtos Cadastrados:');
    console.log(produtos);
};

function atualizarProduto() { 
    
    listarProdutos();

    const index = mensagemError(produtos);
  
    if (index === -1) {
        return;
    }

    const produto = produtos[index];

    const novoNome = prompt(`Nome (atual: ${produto.nome}) `);
    const novaCategoria = prompt(`Categoria (atual: ${produto.categoria}) `);
    const novoPreco = prompt(`Preço (atual: ${produto.preco}) `);
    const novoEstoque = prompt(`Estoque (atual: ${produto.estoque})`);

    produtos[index] = {
        id: produto.id,
        nome: novoNome.trim() || produto.nome,
        categoria: novaCategoria.trim() || produto.categoria,
        preco: parseFloat(novoPreco. trim()) || produto.preco,
        estoque: parseInt(novoEstoque.trim()) || produto.estoque,
    };

    console.log('Produto atualizado com sucesso!');

};

function excluirProduto() {
    listarProdutos();

    const index = mensagemError(produtos); 

    if (index !== undefined) { // Verifica se um índice foi retornado
        produtos.splice(index, 1);
        console.log('Produto excluído com sucesso!');
    }
};

function buscarProduto() {
    listarProdutos();
    mostrarMenuBuscarProduto();

    const opcao = prompt('Digite a opção desejada: ').trim();
    
    if (opcao === null || opcao === '') { // Tratamento para entrada vazia ou cancelada
        console.log('Busca cancelada ou entrada inválida.');
        return;
    }

    const resultados = menuOptionsBuscarProduto(opcao, produtos);

    console.log('Produtos encontrados: ');
    if (resultados && resultados.length > 0) {
        resultados.forEach((produto, index) => {
            console.log(`${index + 1}. Nome:  ${produto.nome} - Categoria: ${produto.categoria} - Preço: ${produto.preco} - Estoque: ${produto.estoque}`);
        });
    } else {
        console.log('Nenhum produto encontrado.');
    }
}

module.exports = { 
    adicionarProduto, listarProdutos, atualizarProduto, excluirProduto, buscarProduto 
};