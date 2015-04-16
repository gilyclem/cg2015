#TRASFORMAZIONI 2D
#La macchina di mia moglie
#creo circonferenze
def dominio(n): return INTERVALS(2*PI)(n)
def circonferenza(p): return [COS(p[0]),SIN(p[0])]
cerchio = MAP(circonferenza)(dominio(32))

#funzione di shear
def shear(a): return MAT([[1,0,0],[0,1,a],[0,0,1]])

#creo la figura
scocca = POLYLINE([[0,0],[3.5,0],[3,1],[2,1],[1.5,0.5],[0.5,0.5],[0,0]])
ruota = S([1,2])([.25,.25])(cerchio)
ruotaA = T(1)(1)(ruota)
ruotaP = T(1)(3)(ruota)
macchina = STRUCT([scocca,ruotaA,ruotaP])

shear1 = shear(1.0/2)(macchina)
shear2 = shear(-1.0/2)(macchina)
 
complesso = STRUCT([shear1,T(1)(5)(macchina),T(1)(10)(shear2)])
VIEW(complesso)
