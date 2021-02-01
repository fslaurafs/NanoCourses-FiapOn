# Ep05 - LAÇOS E REPETIÇÕES: FOR

tabuada = int(input("Digite um número para exibir a tabuada: "))
print(f"Tabuada do número {tabuada}:")

for valor in range(0, 11, 1):  # inicio, fim, pulo
    print(str(tabuada) + " x " + str(valor) + " = " +str((tabuada*valor)))
