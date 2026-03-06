
import matplotlib.pyplot as plt
import numpy as np

t= np.linspace(0,2*np.pi, 1000)


def f1(x):
    return np.sin(x)
def f2(x):
    return np.cos(x)

y1=f1(t)
y2=f2(t)

plt.figure(figsize=(8,8))
plt.plot(t,y1, label='sin(x)')
plt.plot (t,y2, label='cos(x)')
plt.title("Grafik sin cos")
plt.legend()
plt.grid(True)


plt.show()

