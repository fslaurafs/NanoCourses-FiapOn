# Ep03 - DICIONÁRIOS E ARQUIVOS

from Cap5.Ep03_funcoes import *

usuarios = {}

opcao = perguntar()

while opcao == "I" or opcao == "P" or opcao == "E" or opcao == "L":
    if opcao == "I":
        inserir(usuarios)

    opcao = perguntar()
