function tratarErroELancar(erro) {
    console.log('Aconteceu um erro')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nume: 'Roberto' }
imprimirNomeGritado(obj)