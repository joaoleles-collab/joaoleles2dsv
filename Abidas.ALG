Algoritmo "semnome"

Var
opcao : inteiro
valorTotal: real
cancelado: logico

Inicio

     enquanto (verdadeiro)  faca

     escreval("****************")
      escreval("*****ABIDAS*****")
      escreval("----------------")
      escreval("1) Tenis - R$ 150,00 ")
      escreval("2) Camiseta - R$ 350,00 ")

      escreval("3) Short - R$ 99,99 ")
      escreval("4) Blusa de frio - R$ 450,99")
      escreval("5) Conjunto - R$ 5000,50")
      escreval("6) FINALIZAR COMPRA")
      escreval("7) SAIR")
      leia(opcao)

      escolha(opcao)
         caso 1
         limpaTela
          valorTotal<- valorTotal + 150
          escreval("VALOR DA COMPRA: R$ " ,valorTotal)


         caso 2
         limpaTela
         valorTotal<- valorTotal + 350
          escreval("VALOR DA COMPRA: R$ " ,valorTotal)


         caso 3
         limpaTela
         valorTotal<- valorTotal + 99.99
          escreval("VALOR DA COMPRA: R$ " ,valorTotal)


         caso 4
         limpaTela
         valorTotal<- valorTotal + 450.99
          escreval("VALOR DA COMPRA: R$ " ,valorTotal)


         caso 5
         limpaTela
         valorTotal<- valorTotal + 5000.50
          escreval("VALOR DA COMPRA: R$ " ,valorTotal)


         caso 6
           escreval("SELECIONOU FINALIZAR")
           cancelado<- falso
           interrompa
         caso 7
           escreval("SELECIONOU SAIR")
           cancelado<- verdadeiro
           interrompa

         outrocaso
           escreval("Erro! Opção inválida")
      fimEscolha

      fimenquanto
      
      se (cancelado) entao
      escreval("pedido cancelado")
      senao ("VALOR FINAL R$" ,valorTotal)
      fimse

Fimalgoritmo