# ESERCIZI SU RICHIAMI DI ALGEBRA

#Esercizio 1
#Disegna 100 punti random nel quadrato [0,1]^2

point_list = [[rand(),rand()] for k in range(100)]
VIEW(STRUCT(AA(MK)(point_list)))

#Esercizio 2
#Disegna 1000 punti random nel disco di raggio unitario centrato nell'origine

points = [[2*PI*rand(),rand()] for k in range(1000)]
V = [[v*COS(u),v*SIN(u)] for u,v in points]
VIEW(STRUCT(AA(MK)(V)))

#Esercizio 3
#Disegna 1000 punti random sulla circonferenza di raggio unitario centrato nell'origine

points = [2*PI*rand() for k in range(1000)]
V = [[COS(u),SIN(u)] for u in points]
VIEW(STRUCT(AA(MK)(V)))
