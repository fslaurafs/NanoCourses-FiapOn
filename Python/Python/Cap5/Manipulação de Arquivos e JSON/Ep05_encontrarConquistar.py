# Ep05 - ENCONTRANDO E DIVIDINDO

texto = "Eu amo python!"
        #01234567890123
        #01234501234567 (slice)

print(texto.find("o"))
print(texto[texto.find("o")+1:].find("o"))  # slice
print(texto.split(" "))
