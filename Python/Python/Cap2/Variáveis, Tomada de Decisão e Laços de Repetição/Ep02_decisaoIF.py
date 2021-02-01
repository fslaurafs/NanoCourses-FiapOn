# Ep02 - TOMADA DE DECISÃO COM IF

nome = input("Digite o nome: ")
idade = int(input("Digite a idade: "))

if idade >= 65:
    print(f"O paciente {nome} \033[32mPOSSUI\033[m atendimento prioritário!")
else:
    print(f"O paciente {nome} \033[31mNÃO\033[m possui atendimento prioritário!")

print("\033[1;35mFIM\033[m")
