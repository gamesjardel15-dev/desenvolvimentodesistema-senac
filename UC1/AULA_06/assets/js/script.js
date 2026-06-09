// números e operados
let v1 = 10
let v2 = 5

const tsoma = v1 + v2
const tmenos = v1 - v2
const tmultipli = v1 * v2
const tdivid = v1 / v2 
console.log("OPERAÇÕES")

let num = 0
num ++


let somabr = tsoma.toLocaleString("pt-br",
{ mininumFractionDigits: 2,
maximumFractionDigits: 2
});


console.log(`
CÁLCULO COM OPERADORES MATEMÁTICO

VALOR 1: ${v1} e VALOR 2: ${v2}
${num++}.RESULTADO SOMA: ${somabr}
${num++}.RESULTADO SUBSTRAÇÃO: ${tmenos}
${num++}.RESULTADO MULTIPLICAÇÃO: ${tmultipli}
${num++}.RESULTADO DIVISÃO: ${tdivid}
`)


let produto = "COMPUTADOR"
let valor = 2256.00
let desconto = 750.00
let valorfinal = valor - desconto

console.log(`
PRODUTO: ${produto}
VALOR: ${valor}
DESCONTO APLICADO: ${desconto}
VALOR FINAL ${valorfinal}
`)

console.log(`
PRODUTO PROMOCIONAL
-------------------
PRODUTO: ${produto}
VALOR: R$ ${valor}
DESCONTO APLICADO: ${desconto}
VALOR FINAL R$ ${valorfinal}`)

function FormatValor(valor) {
return valor.toLocaleString("pt-br",{
style:"currency",
currecy:"BRL"});
}
