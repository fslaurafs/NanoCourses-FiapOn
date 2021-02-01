# Ep06 - INTRODUÇÃO AO FTP

from ftplib import *

ftp = FTP('ftp.ibiblio.org')
print(ftp.getwelcome())

ftp.quit()
