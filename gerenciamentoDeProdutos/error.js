const prompt = require('prompt-sync')();

function mensagemError(produtos) {
    const id = prompt('Insira o id do produto: ');
    let index = -1;

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id.toString() === id.trim()) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log('Produto não encontrado.');
    }
    return index;
};

module.exports = { mensagemError };