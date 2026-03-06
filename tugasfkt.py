import numpy as np
import matplotlib.pyplot as plt

# Waktu
t = np.linspace(0, 3, 1500)

# Parameter
A1, f1 = 1.0, 1.0
A2, f2 = 0.7, 2.0
A3, f3 = 0.4, 3.0

# Frekuensi sudut
w1 = 2*np.pi*f1
w2 = 2*np.pi*f2
w3 = 2*np.pi*f3

# Gelombang
y1 = A1 * np.sin(w1*t)
y2 = A2 * np.sin(w2*t)
y3 = A3 * np.sin(w3*t)

# ===== SATU FIGURE =====
plt.figure(figsize=(9,4))

plt.plot(t, y1, label="A=1, f=1 Hz")
plt.plot(t, y2, label="A=0.7, f=2 Hz")
plt.plot(t, y3, label="A=0.4, f=3 Hz")

plt.xlabel("Waktu (s)")
plt.ylabel("Amplitudo")
plt.title("Tiga Gelombang Sinus dalam Satu Figure")
plt.legend()
plt.grid(True)

plt.show()

