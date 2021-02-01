# Ep03 - APLICAÇÃO CLIENTE COM TCP

from socket import *

servidor = "127.0.0.1"  # localhost, 192.168.0.1, 10.0.0.1
porta = 43210

msg = bytes(input("Digite algo: "), 'utf-8')

object_socket = socket(AF_INET, SOCK_STREAM)
object_socket.connect((servidor, porta))
object_socket.send(msg)

resposta = object_socket.recv(1024)
print("Recebemos: ", resposta)

object_socket.close()
