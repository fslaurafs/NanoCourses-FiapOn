# Ep01 - CONCEITUAÇÃO E TIPOS DE VARIÁVEIS

nome = input("Digite um funcionário: ")
empresa = input("Digite a instituição: ")
qtde_funcionarios = int(input("Digite a quantidade de funcionários: "))
mediaMensalidade = float(input("Digite a média da mensalidade: R$"))

print(nome + " trabalha na empresa " + empresa)
print("Possui: ", qtde_funcionarios, " funcionários.")
print("A média da mensalidade é de: R$" + str(mediaMensalidade))

print("\033[1;32m=============== Verifique os tipos de dados abaixo: ===============\033[m")
print("O tipo de dado da variável [nome] é: ", type(nome))
print("O tipo de dado da variável [empresa] é: ", type(empresa))
print("O tipo de dado da variável [qtde_funcionarios] é: ", type(qtde_funcionarios))
print("O tipo de dado da variável [mediaMensalidade] é: ", type(mediaMensalidade))
