// SEM return - calcular mas perde o valor
function calcularSem(preco, desconto) {
    var total = preco - (preco * desconto/100);
}

function calcularCom(preco, desconto) {
    var total = preco - (preco * desconto/100);
    return total;
}

function testarSemReturn() {
    var resultado = calcularSem(100, 50);
    document.getElementById('resultado').innerHTML =
    '<div class="alert alert-danger">'+
    'Resultado: ' + resultado +
    '(undefined - a função não evolveu nada)</div>';
}

function testarComReturn() {
    var resultado = calcularCom(100, 50);
    document.getElementById('resultado').innerHTML =
    '<div class="alert alert-sucess">' +
    'Resultado: R$' + resultado +
    '(a função devolveu 50!</div>';
}