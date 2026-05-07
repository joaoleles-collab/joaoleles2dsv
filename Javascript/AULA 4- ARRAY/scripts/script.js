

// <div class="produto">
//                 <img src="https://images.tcdn.com.br/img/img_prod/1106817/pirulito_coresmel_twister_lollipop_600g_com_25_unidades_20845_1_57fb8db3209215351a86b8f32243dfcd.jpg" alt="">
//                 <h2>PIRULITO TWISTER</h2>
//                 <p>R$ 20,00</p>
//                 <button type="button">COMPRAR</button>
//             </div>

function aula() {
    // variável<- vetor de [1..3] de caractere
    var filmes = [
        "Interestelar",
        "Meninas Malvadas",
        "Diabo veste prada 2",
    ];

    console.log(filmes);
    console.log(filmes[1]);
    console.log("Um filme que está estourado é", filmes[2]);

    // PUSH Adiciona no último
    filmes.push("As branquelas");
    console.log(filmes);

    // UNSHIFT Adiciona no primeiro
    filmes.unshift("Homem-Aranha 1 ");
    console.log(filmes);

    // POP Exclui o último
    filmes.pop();
    console.log(filmes);

    // SHIFT Exclui o primeiro
    filmes.shift();
    console.log(filmes);

    // splice (índice, quantos quer sobrescrever, dados)
    filmes.splice(1, 1,);
    console.log(filmes);

    filmes.splice(1, 1, "Diabo veste prada 1");
    console.log(filmes);

    filmes.splice(1, 0, "Kill Bill vol 1 e 2");
    console.log(filmes);

    var filmesCopia = filmes.slice();
    console.log(filmesCopia);

    for (var i = 0; i < filmes.length; i++) {
        console.log(filmes[i]);
    }

    filmes.map(cadafilme => {
        console.log(cadafilme);
    });
}

var doces = [
    ['PIRULITO TWISTER', 'https://images.tcdn.com.br/img/img_prod/1106817/pirulito_coresmel_twister_lollipop_600g_com_25_unidades_20845_1_57fb8db3209215351a86b8f32243dfcd.jpg', 9.99],

    ['OURO BRANCO', 'https://www.lojatudoemum.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/o/bombom_ouro_branco.png', 1.99],

    ['BALA 7 BELO', 'https://jadoces.com.br/wp-content/uploads/2022/08/produto-7belo-bala-framboesa-un.jpg', 0.50]

];

doces.map(cadaDoce => {
    document.getElementById("produtos").innerHTML += `
     <div class="produto">
                <img src="${cadaDoce[1]}" alt="Pirulito">
               <h2>${cadaDoce[0]}</h2>
                <p> R$${cadaDoce[2]}</p>
               <button type="button">COMPRAR</button>
         </div>
    `
});