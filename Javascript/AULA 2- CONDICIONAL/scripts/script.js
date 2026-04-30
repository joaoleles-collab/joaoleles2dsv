var Nome = "Caça Rato"
var Jogos = 100
var Gol = 0
var Finalização = 99


function mostrarpersonagem() {
    document.getElementById("ficha").innerHTML = `
    <img src="images/caça rato.jpg" id="icone" alt="">

    <h1 class="Caçarato"> 🐭${Nome} </h1>
    <p  class="Caçarato">🐀 ${Jogos} </p>
    <p  class="Caçarato"> ⚽${Gol}  </p>
    <p  class="Caçarato"> 🎯${Finalização}  </p>
    `;
}

document.getElementById("jogos").addEventListener("click", addJogos)
function addJogos() {
    // if verifica uma condição (se, senão)
    // igualdade ==
    var quantJogos = confirm("Deseja adicionar 1 jogo ou personalizar(CANCELAR)?");

    if (quantJogos) {
        Jogos++
    } else {
        Jogos = Number(prompt("Qual a qauntidade de jogos?"))
    }


    mostrarpersonagem()
};

document.getElementById("gol").addEventListener("click", addGol)
function addGol() {

    var quantGol = confirm("Deseja adicionar 1 Gol ou personalizar(CANCELAR)?");

    if (quantGol) {
        Gol++
    } else {
        Gol = Number(prompt("Qual a qauntidade de Gols?"))
    }

};

document.getElementById("finalização").addEventListener("click", addFinalização)
function addFinalização() {

    var Finalização = prompt(`Qual chuteira o ${Nome} está usando? (APENAS NIKE OU ADIDAS)`);
    // escolha (var)
    switch (Finalização) {
        case "NIKE":
            alert("CAÇA RATO ESTÁ USANDO NIKE! 99 DE FINALIZAÇÃO")
            break;


        case "ADIDAS":
        alert("CAÇA RATO ESTÁ USANDO ADIDAS! 99 DE FINALIZAÇÃO")
            break;

        default:
            alert("CHUTEIRA FORA DO GUARDA ROUPAS");
    };
};
mostrarpersonagem();


mostrarpersonagem();