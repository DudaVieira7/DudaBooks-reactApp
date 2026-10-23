const fs = require('fs')

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function deletaFavoritoPorId(id) {
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))
    const filtrados = favoritos.filter(livro => livro.id !== id)
    fs.writeFileSync('favoritos.json', JSON.stringify(filtrados))
    return filtrados
}

function novoLivroFavorito(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))
    const livroInserido = livros.find(livro => livro.id === id)

    if (!livroInserido) {
        throw new Error('Livro não encontrado!')
    }

    const novaListaFavoritos = [...favoritos, livroInserido] // copia os favoritos e adiciona o novo livro
    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    novoLivroFavorito,
}