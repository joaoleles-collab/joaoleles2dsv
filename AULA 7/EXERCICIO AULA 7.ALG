Algoritmo "exercicio aula 7"
Var
mercadoria: vetor [1..3] de real
nomeMercadoria : vetor [1..3] de caractere
i: inteiro
valorTotal: Real
mediaTotal: real
//var q2
  numero:vetor[1..10] de inteiro

Inicio

  para i<- 1 ate 3  faca
  
  escreval ("Qual é a", i, "° mercadoria?")
  leia(nomeMercadoria[i])
  
  escreval ("____________________")
  
escreval ("qual o valor da",i, "°mercadoria?")
leia (mercadoria[i])
limpatela


fimpara

 valorTotal<- (mercadoria[1] + mercadoria[2] + mercadoria[3])
escreval("O valor total das mercadorias é:", valorTotal )

ESCREVAL ("--------------------------------------------")

mediaTotal<- valorTotal/ 3
escreval("A média das mercadorias é:", mediaTotal )

escreval ("")

// questão 2
i<- 1
escreval ("escreva dez números:")
enquanto (i <=10) faca

leia (numero[i])
 i<- i+1
fimenquanto

i<-10
escreval("ordem inversa:")
 enquanto (i>0) faca
 escreval (numero[i])
 i<-i-1
 
 fimenquanto


Fimalgoritmo