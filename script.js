function calcularNumeros() {
    let inPrimeiroNum = document.getElementById('inPrimeiroNum')
    let inSegundoNum = document.getElementById('inSegundoNum')
    let inOperacao = document.getElementById('inOperacao')
    let outSaida = document.getElementById('outSaida')

    let primeiroNum = Number(inPrimeiroNum.value)
    let segundoNum = Number(inSegundoNum.value)
    let operacao = inOperacao.value
    
    switch (operacao) {
        case "+":
            outSaida.innerHTML = `${primeiroNum} + ${segundoNum} = ${primeiroNum + segundoNum}`
            break;
        case "-":
            outSaida.innerHTML = `${primeiroNum} - ${segundoNum} = ${primeiroNum - segundoNum}`
            break;
        case "*":
            outSaida.innerHTML = `${primeiroNum} x ${segundoNum} = ${primeiroNum * segundoNum}`
            break;
        case "/":
            outSaida.innerHTML = `${primeiroNum} / ${segundoNum} = ${primeiroNum / segundoNum}`
            break;
        default:
            outSaida.innerHTML = `Operação Inválida.`
            break;
  }
}
let btCalcular  = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularNumeros)