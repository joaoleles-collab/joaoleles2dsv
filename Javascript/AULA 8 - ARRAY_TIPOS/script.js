// Exemplo 1: Declarando e Inicializando um Array vazio
console.log('\n---Exemplo 1: array vazio')
let meuArrayVazio = []
console.log(meuArrayVazio)

// Exemplo 2: Declarando arrays com elementos
console.log('\n-Exemplo2: Arrays com elementos')
let frutas = ['Maçã ', 'Banana', 'Laranja ', 'Uva' ]
let numeros = [10, 20, 30, 40, 50]
let misto = ['Texto', 123, true, null]
console.log('Frutas', frutas)
console.log('Números', numeros)
console.log('Misto', misto)

// Exemplo 3: Acessando elementos de um array
console.log('\n-Exemplo 3: Acessando elementos de um array')
console.log('Primeira Fruta:', frutas[0])
console.log('Terceiro Número: ', numeros[2])

// Exemplo 4: Modificando elementos de um array
console.log('\n-Exemplo 4: Modificando elementos')
frutas[1] = 'Pera'
console.log('Frutas modificadas', frutas)

// Exemplo 5: Tamanho do array
console.log('\n-Exemplo 5: Tamanho dos arrays')
console.log('Tamanho do Array de Frutas: ', frutas.length ,'Frutas')
console.log('Tamanho do Array de Números: ', numeros.length, 'Números')

// Exemplo 6: Adicionando elementos ao final (push)
console.log('\n-Exemplo 6: Adicionando elementos ao final (push) ')
frutas.push('Manga')
console.log(frutas)
console.log('Frutas após push:', frutas)