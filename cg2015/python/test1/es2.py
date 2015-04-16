# ESERCIZI LAR1

#Esercizio 1 Disegna un 1,2,3 simplesso

#un uno-simplesso è il join, combinazione convessa cioè affine e positiva, di due punti affinemente indipendenti cioè non coincidenti
simpl1 = JOIN(AA(MK)([[.5,0],[.5,.5]]))
#un due-simplesso è il join di tre punti affinemente indipendenti
simpl2 = JOIN(AA(MK)([[0,0],[1,0],[.5,.5]]))
#un tre-simplesso è il join di quattro punti affinemente indipendenti nello spazio tridimensionale
simpl3 = JOIN(AA(MK)([[0,0,0],[1,0,0],[0,1,0],[0,0,1]]))
VIEW(simpl1)
VIEW(simpl2)
VIEW(simpl3)

#ottengo un ottagono come combinazione convessa di 8 punti
ottagono = JOIN(AA(MK)([[0,.5],[.5,0],[1,0],[1.5,.5],[1.5,1],[1,1.5],[.5,1.5],[0,1]]))
VIEW(ottagono)

#MAP è una primitiva pyplasm che applica una funzione ad un complesso simpliciale per ottenere un nuovo complesso simpliciale, facendo quindi un'operazione di mappatura simpliciale. Usare MAP per costruire una circonferenza, un disco e poi una sfera

#circonferenza
def dominio(n): return INTERVALS(2*PI)(n)
def circonferenza(p): return [COS(p[0]),SIN(p[0])]
VIEW(MAP(circonferenza)(dominio(32)))

#disco
def disco(p):
	u,v=p
	return [v*COS(u),v*SIN(u)]
def dominio(n):
	n1,n2=n
	return PROD([INTERVALS(2*PI)(n1),INTERVALS(1)(n2)])
VIEW(SKELETON(1)(MAP(disco)(dominio([32,1]))))







