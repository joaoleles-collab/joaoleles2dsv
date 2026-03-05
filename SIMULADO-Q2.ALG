Algoritmo "SIMULADO-Q2"

Var
 V1: VETOR [1..15] DE INTEIRO
 V2: VETOR [1..15] DE INTEIRO
 i: inteiro
 i2: inteiro
Inicio

PARA i<- 1 ate 15 FACA
ESCREVAL ("ESCREVA O ", i, "° NÚMERO")
LEIA(V1[i])
FIMPARA
ESCREVAL ("___________________________________")


PARA i2<- 1 ATE 15 FACA
ESCREVAL ("ESCREVA O ", i2 , "° NÚMERO")
LEIA (V2[i2])
FIMPARA

PARA i<- 1 ATE 15 FACA
SE (V1[i]=V2[i2]) ENTAO
ESCREVAL ("OS MESMOS NÚMEROS SÃO ", V1[i], "E " , V2[i2], "NAS POSIÇÕES", i , " E ", i2)
FIMSE

FIMPARA

Fimalgoritmo
