# Ep01 - ARQUIVOS PRA QUÊ MESMO?
# Ep02 - HORA DA LEITURA

""" TIPOS:
w (write): cria novo arquivo;
r (read): lê arquivo;
a (append): insere outra linha no arquivo sem apagar as anteriores;
x (exclusive): 'bloqueia' arquivo para não fazerem alterações"""

""" NESTE MÉTODO É NECESSÁRIO USAR O: .close()
arquivo = open("primeiro_arquivo.txt", "w")
arquivo.write("Meu primeiro arquivo! Ai que festa!")
arquivo.close()"""


"""# ESCRITA
# .close() NÃO É NECESSÁRIO NESTE MÉTODO:
with open("primeiro_arquivo.txt", "a") as arquivo:
    arquivo.write("\nSe vai entender!")"""

# LEITURA
with open("primeiro_arquivo.txt", "r") as arquivo:
    # conteudo = arquivo.read()  # trabalha tudo de uma vez só
    for linha in arquivo.readlines():  # trabalha linha a linha (quebra as linhas)
        print(linha)
