// Função 1: recebe o ano de nascimento e devolve a idade 
function calcularIdade(anoNascimento) { 
    var anoAtual = 2025; 
    return anoAtual - anoNascimento; 
}
// Função 2: recebe a idade e devolve o preço do ingresso 
function definirPreco(idade) { 
    if (idade < 12) { 
        return 0;   // criança não paga 
    } 
    if (idade < 18) { 
        return 15;  // jovem paga metade 
    } 
    return 30;      // adulto paga inteiro 
} 
// Função 3: chamada pelo botão — usa as duas funções acima 
function calcular() { 
    var nome = document.getElementById('nome').value; 
    var ano  = Number(document.getElementById('ano').value); 
 
    if (nome === '' || ano === 0) { 
        alert('Preencha todos os campos!'); 
        return; 
    } 
 
    var idade = calcularIdade(ano); 
    var preco = definirPreco(idade); 
 
    document.getElementById('resultado').innerHTML = 
        '<div class="alert alert-success text-center">' + 
        '<h4>      ' + nome + '</h4>' + 
        '<p>Idade: ' + idade + ' anos</p>' + 
        '<p>Valor do ingresso: <strong>R$ ' + preco + ',00</strong></p>' + 
        '</div>'; 
} 