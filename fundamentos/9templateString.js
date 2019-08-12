const nome = 'Rebeca'
const concatecacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatecacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)