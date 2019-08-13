// Armazenando uma funcao em uma variavel
// Funcao anônima
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(20, 30))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir = a => console.log(a)
imprimir('JavaScript')