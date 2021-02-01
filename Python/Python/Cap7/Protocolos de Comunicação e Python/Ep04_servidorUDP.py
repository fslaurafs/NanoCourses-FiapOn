# Ep04 - APLICAÇÃO SERVIDORA COM UDP

from socket import *

servidor = "127.0.0.1"  # localhost, 192.168.0.1, 10.0.0.1
porta = 43210

obj_socket = socket(AF_INET, SOCK_DGRAM)
obj_socket.bind((servidor, porta))
print("Servidor pronto...")

while True:
    dados, origem = obj_socket.recvfrom(65535)  # "aplicação juiz"

    print("Origem..............: ", origem)
    print("Dados recebidos.....: ", dados.decode())  # decodificar para string

    resposta = input("Digite a resposta: ")
    obj_socket.sendto(resposta.encode(), origem)  # codificar para byte

obj_socket.close()
