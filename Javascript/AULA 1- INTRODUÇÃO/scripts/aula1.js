// Resposta no console
console.log("Olá mundo!");
// caixas de diálogo
alert("chama na catchanga");
prompt("Qual é o seu nome?");
confirm("Você faria um pix para seu colega?");

// acessa documento, busca o elemento com id selecionado
// inner= dentro
document.getElementById("resposta").innerText="<h1>QUE LEGAL</h1>"
document.getElementById("resposta").innerHTML= "<h1>QUE LEGAL</h1>"

// string - caractere
var nome = "João";
// boolean logico(true ou false)
var ligado = true;

// number- número
// para quebrados- float()
// para inteiros- int()
var idade = 15;
var dinheiro = 170.08;
// array - lista, vetor
var listaCompras = []

console.log(typeof(nome));
console.log(typeof(ligado));
console.log(typeof(idade));
console.log(typeof(dinheiro));
console.log(typeof(listaCompras));