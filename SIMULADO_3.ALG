Algoritmo "SIMULADO_3"

Var
 NOME: VETOR [1..10]  DE CARACTERE
 i: inteiro
  nome_e: caractere
Inicio
 NOME[1]<- "VICTOR"
 NOME[2]<- "JOÃO"
 NOME[3]<- "PEDRO"
 NOME[4]<- "MAURO"
NOME[5]<- "AMANDA"
NOME[6]<- "ELEN"
NOME[7]<- "AUGUSTO"
NOME[8]<- "NEYMAR"
NOME[9]<- "LIONEL"
NOME[10]<- "LUIS"

ESCREVAL ("FALE UM NOME:")
LEIA (nome_e)
PARA i<- 1 ATE 10     FACA
SE (nome_e = NOME[i]) ENTAO
ESCREVAL ("ACHEI")

SENAO
ESCREVAL ("NÃO ACHEI")

FIMSE
FIMPARA
Fimalgoritmo