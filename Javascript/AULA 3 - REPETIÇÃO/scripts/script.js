function aula() {
    // enquanto () faca...
    // para con ate con2 - i=interable
    var i = 0;

    while (i < 10) {
        console.log(i);
        i++
    }

    while (true) {
        var pergunta = confirm("repete?");
        if (pergunta == false) {
            break;
        }
    }

    for (var i; i < 100; i++) {
        document.querySelector('main').innerHTML += `
        <p> QUALQUER COISA </p>
        `;


    }

    // Faz e verifica (aceita false)
    do {
        console.log(i);
        i++
    } while (i < 10);
}

function produtos() {
    for (var i = 0; i < 12; i++) {
        document.getElementById("produtos").innerHTML += `
          <div class="produto">
                <img src="https://images.tcdn.com.br/img/img_prod/1106817/pirulito_coresmel_twister_lollipop_600g_com_25_unidades_20845_1_57fb8db3209215351a86b8f32243dfcd.jpg" alt="">
                <h2>PIRULITO TWISTER</h2>
                <p>R$ 20,00</p>
                <button type="button">COMPRAR</button>
            </div>
        `;
    }
}

produtos();
