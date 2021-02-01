# Ep03 - PYTHON PARA COMUNICAR COM SENSORES

import serial
from serial.tools import list_ports

#lista as portas do arduino
for port in list_ports.comports():
    print("Dispositivo: {} - porta: {}".format(port.description, port.device))

conexao = serial.Serial('COM3', 115200)  # porta no linux: '/dev/ttyUSB0'

acao = input("<L> para Ligar \n<D> para Desligar \nEscolha: ").upper()

while acao == "L" or acao == "D":
    if acao == "L":
        conexao.write(b'1')

    else:
        conexao.write(b'0')

    acao = input("<L> para Ligar \n<D> para Desligar \nEscolha: ").upper()

conexao.close()

print("Conexão encerrada.")
