# Ep05 - FUNÇÕES E MODULARIZAÇÃO

def preencherInventario(lista):
    resp = "S"

    while resp == "S":
        equipamento = [input("Equipamento: "),
                       float(input("Valor: R$")),
                       int(input("Número Serial: ")),
                       input("Departamento: ")]
        lista.append(equipamento)

        resp = input("Digite \"S\" para continuar: ").upper()


def exibirInventario(lista):
    for elemento in lista:
        print("Nome.........: ", elemento[0])
        print("Valor........: R$", elemento[1])
        print("Serial.......: ", elemento[2])
        print("Departamento.: ", elemento[3])
        print("=" * 40)


def localizarPorNome(lista):
    busca = input("\nDigite o nome do equipamento que deseja buscar: ")
    for elemento in lista:
        if busca == elemento[0]:
            print("Valor....: R$", elemento[1])
            print("Serial...: ", elemento[2])
            print("=" * 40)


def depreciarPorNome(lista, porc):
    depreciacao = input("\nDigite o nome do equipamento que será depreciado: ")
    for elemento in lista:
        if depreciacao == elemento[0]:
            print("Valor antigo: R$", elemento[1])
            elemento[1] = elemento[1] * 0.9
            print("Novo valor: R$", elemento[1])
            print("=" * 40)


def excluirPorSerial(lista):
    serial = int(input("\nDigite o serial do equipamento que será excluído: "))
    for elemento in lista:
        if elemento[2] == serial:
            print("Valor....: R$", elemento[1])
            print("Serial...: ", elemento[2])
            lista.remove(elemento)
            print("=" * 40)
    return "\033[1;31mItens excluídos\033[m"


def resumirValores(lista):
    valores = []
    for elemento in lista:
        valores.append(elemento[1])
    if len(valores) > 0:
        print("O equipamento mais caro custa: R$", max(valores))
        print("O equipamento mais barato custa: R$", min(valores))
        # print("O total de equipamentos é de: ", sum(valores))
