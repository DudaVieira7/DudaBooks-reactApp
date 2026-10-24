const URL_FAVORITOS = 'http://localhost:3000/favoritos'

async function getFavoritos() {
    const resposta = await fetch(URL_FAVORITOS)
    return resposta.json()
}

async function postfavorito(id) {
    const resposta = await fetch(`${URL_FAVORITOS}/${id}`, { method: 'POST' })
    if (!resposta.ok) {
        throw new Error(await resposta.text())
    }
}

async function deleteFavorito(id) {
    const resposta = await fetch(`${URL_FAVORITOS}/${id}`, { method: 'DELETE' })
    if (!resposta.ok) {
        throw new Error(await resposta.text())
    }
}

export {
    getFavoritos,
    postfavorito,
    deleteFavorito
}