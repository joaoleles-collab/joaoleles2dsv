let produtos= ['Teclado', 'Mouse', 'Monitor', 'Fone de ouvido', 'Gabinete']
console.log('Primeiro produto:',produtos[0])
console.log('Ultimo produto:',produtos[4])

// Substituição de produto
produtos[4] = 'WebCam'
console.log('Produto adicionado:', produtos[4] )

console.log('Lista de produtos:', produtos)

console.log("")

console.log("n\ - Lista de produtos diponíveis - ")
for(let i=0; i<produtos.length; i++){
    console.log('produto disponível:', produtos[i])
}

