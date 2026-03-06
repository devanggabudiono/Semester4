import numpy as np
import matplotlib.pyplot as plt


#parameter gelombang
A=1.0 #amplitudo
f=1.0 # frekuensi Hz
omega=2*np.pi*f
phi=0 # fase awal

#waktu
t = np.linspace(0,2,1000)

#persamaan gelombang

y= A*np.sin(omega*t+phi)

#plot
plt.figure(figsize=(8,4))
plt.plot(t,y)
plt.xlabel("Waktu(s)")
plt.ylabel("Amplitudo")
plt.title(r"$y(t)=A\sin(\omega t + \varphi)$")
plt.grid(True)

plt.savefig("satu_gelombang_sinus.png",dpi=300,bbox_inches="tight")
plt.show()
