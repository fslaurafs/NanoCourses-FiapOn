# Ep03 - UTILIZANDO DICIONÁRIOS EM PACOTES

from Cap4.Ep03_funcoes import *

usuarios = {}

opcao = perguntar()

while opcao == "I" or opcao == "P" or opcao == "E" or opcao == "L":
    if opcao == "I":
        inserir(usuarios)

    if opcao == "P":
        pesquisar(usuarios, input("Qual login deseja pesquisar? "))

    if opcao == "E":
        excluir(usuarios, input("Qual login deseja excluir? "))

    if opcao == "L":
        listar(usuarios)

    opcao = perguntar()
