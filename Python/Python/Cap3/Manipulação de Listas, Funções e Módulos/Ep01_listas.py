# Ep01 - INTRODUÇÃO: VARIÁVEIS E LISTAS

inventario = []
resposta = "S"

while resposta == "S":
    inventario.append(input("Equipamento: "))
    inventario.append(input("Valor: R$"))
    inventario.append(input("Número Serial: "))
    inventario.append(input("Departamento: "))

    resposta = input("Digite \"S\" para continuar: ").upper()

for elemento in inventario:
    print(elemento)
