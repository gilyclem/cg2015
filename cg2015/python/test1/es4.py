#TRASFORMAZIONI AFFINI 3D - Bomarzo, casa pendente
casa1 = CUBOID([1,2,1])
casa2 = T([1,2,3])([.05,.05,.05])(CUBOID([0.9,0.9,0.9]))
casa3 = T([1,2,3])([.05,1,.05])(CUBOID([0.9,0.9,0.9]))
finestra1 = T([1,2])([.35,.35])(CUBOID([0.3,0.3,.05]))
finestra2 = T([1,2])([.35,1.1])(CUBOID([0.3,0.5,.05]))
finestrelato1 = STRUCT([finestra1,finestra2])
finestrelato2 = T(1)(.05)(R([1,3])(PI/2)(finestrelato1))
casa = STRUCT([casa1,casa2,casa3,finestrelato1,finestrelato2])

VIEW(SKELETON(1)(R([2,3])(-PI/18)(casa)))

