function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2
    const comprarTV50 = trab1 && trab2
    //  const comprarTV32 = !!(trab1 ^ trab2) // bitwise xor
    const comprarTV32 = trab1 != trab2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))