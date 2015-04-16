#LAR2
#ESERCIZIO 1 Modello lar

#Geometria
#vertici
V=[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]]
#celle
FV=[[0,1,3],[1,2,4],[1,3,4],[2,4,5]]
#faccette
EV=[[0,1],[0,3],[1,2],[1,3],[1,4],[2,4],[2,5],[3,4],[4,5]]

VIEW(STRUCT(MKPOLS((V,FV))))
VIEW(STRUCT(MKPOLS((V,EV))))
VIEW(EXPLODE(1.2,1.2,1)(MKPOLS((V,FV))))
VIEW(EXPLODE(1.2,1.2,1)(MKPOLS((V,EV))))

#Topologia
csrFV = csrCreate(FV)
csrEV = csrCreate(EV)
print csr2DenseMatrix(csrFV)
print csr2DenseMatrix(csrEV)

#ESERCIZIO 2 Estrazione di faccette
#Modificare la funzione in modo che le faccette estratte siano coerentemente orientate
def larSimplexFacets(simplices):
	out=[]
	d=len(simplices[0])
	for simplex in simplices:
		out+=[simplex[0:k]+simplex[k+1:d] for k in range(d)]
	#per ogni faccetta, se la sua posizione esponente di -1 è negativa, inverto l'ordine degli elementi nella facccetta
	for k in range(len(out)):
		if ((-1)**k)==-1:
			out[k]=inverti(out[k])
	out=sorted(out)
	return [facet for k,facet in enumerate(out[:-1]) if out[k]!=out[k+1]]+[out[-1]]

#funzione di appoggio che inverte gli elementi di una lista
def inverti(lista):
	out=[]
	for k in range(len(lista)):
		out.append(lista[len(lista)-k-1])
	return out

print larSimplexFacets([[0,1,2]])
print larSimplexFacets([[0,1,2,3]])

#ESERCIZIO 3 Estrusione
#Creo un modello lar
V=[[0,0],[1,0],[0,1]] #tre vertici
FV=[[0,1,2]] #una cella, triangolo
#per estrusione di un triangolo ottengo 3 tetraedri
model=larExtrude1((V,FV),[1])
VIEW(EXPLODE(1,1,1.2)(MKPOLS(model)))

#Estrusione di 6 triangoli
V=[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]]
FV=[[0,1,3],[1,2,4],[2,4,5],[3,4,6],[4,6,7],[5,7,8]]
model=larExtrude1((V,FV),[5])
VIEW(EXPLODE(1,1,1.2)(MKPOLS(model)))

#Aranova
V=[[0,0],[1,0],[0,1],[1,1],[.5,1.5]]
FV=[[0,1,2],[1,2,3],[2,3,4]]
model=larExtrude1((V,FV),[2])
VIEW(STRUCT(MKPOLS(model)))
