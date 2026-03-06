import numpy as np
import matplotlib.pyplot as plt


t=np.linspace(0,3,1000)
y=np.cos(4*t+22) 

plt.figure(figsize=(8,4))
plt.plot(t,y)
plt.xlabel("X")
plt.ylabel("Y")
plt.title(r"$y(x)=\cos (4 \cdot t+22)$")
plt.grid(True)

plt.savefig("mynamagua.png",dpi=300,bbox_inches="tight")
plt.show()


