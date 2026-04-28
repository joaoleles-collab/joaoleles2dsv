function ex1() {
    var nPessoas = document.getElementById("nPessoas").value;
    var valor = document.querySelector("#valor").value;

    var Total = valor / nPessoas
    alert(`O valor da conta para cada é R$${Total}`);
}

document.querySelector("#btnEx2").addEventListener("click", ex2);

function ex2() {
    var numero = Number(document.getElementById("numero").value);
    alert(`O número ${numero}, antecessor ${numero - 1}, sucessor ${numero + 1}`);
}