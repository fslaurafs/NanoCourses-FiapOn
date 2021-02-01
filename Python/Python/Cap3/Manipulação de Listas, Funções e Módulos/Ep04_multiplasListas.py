# Ep04 - LISTA DENTRO DE LISTA E FUNÇÕES NUMÉRICAS

inventario = []
resposta = "S"

# adicionar item no inventário
while resposta == "S":
    equipamento = [input("Equipamento: "),
                   float(input("Valor: R$")),
                   int(input("Número Serial: ")),
                   input("Departamento: ")]
    inventario.append(equipamento)

    resposta = input("Digite \"S\" para continuar: ").upper()

# exibir dados do inventário
for elemento in inventario:
    print("Nome.........: ", elemento[0])
    print("Valor........: R$", elemento[1])
    print("Serial.......: ", elemento[2])
    print("Departamento.: ", elemento[3])
    print("=" * 40)

# localizar itens no inventário
busca = input("\nDigite o nome do equipamento que deseja buscar: ")
for elemento in inventario:
    if busca == elemento[0]:
        print("Valor....: R$", elemento[1])
        print("Serial...: ", elemento[2])
        print("=" * 40)

# alterar valor de um elemento de item no inventário
depreciacao = input("\nDigite o nome do equipamento que será depreciado: ")
for elemento in inventario:
    if depreciacao == elemento[0]:
        print("Valor antigo: R$", elemento[1])
        elemento[1] = elemento[1] * 0.9
        print("Novo valor: R$", elemento[1])
        print("=" * 40)

# excluir um item do inventário
serial = int(input("\nDigite o serial do equipamento que será excluído: "))
for elemento in inventario:
    if elemento[2] == serial:
        print("Valor....: R$", elemento[1])
        print("Serial...: ", elemento[2])
        inventario.remove(elemento)
        print("=" * 40)

# exibir dados do inventário
for elemento in inventario:
    print("Nome.........: ", elemento[0])
    print("Valor........: R$", elemento[1])
    print("Serial.......: ", elemento[2])
    print("Departamento.: ", elemento[3])
    print("=" * 40)

# resumo de valores do inventário
valores = []
for elemento in inventario:
    valores.append(elemento[1])
if len(valores) > 0:
    print("O equipamento mais caro custa: R$", max(valores))
    print("O equipamento mais barato custa: R$", min(valores))
    # print("O total de equipamentos é de: ", sum(valores))
