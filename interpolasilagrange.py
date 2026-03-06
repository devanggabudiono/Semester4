
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.path import Path
import pandas as pd


# Data
x = np.array([0.00, 0.25, 0.50])
f = np.array([0.9162, 0.8109, 0.6931])
verts = [
    (0., -0.5),
    (-0.5, 0.3),
    (-0.2, 0.8),
    (0., 0.5),
    (0.2, 0.8),
    (0.5, 0.3),
    (0., -0.5),
]

codes = [
    Path.MOVETO,
    Path.CURVE3,
    Path.CURVE3,
    Path.CURVE3,
    Path.CURVE3,
    Path.CURVE3,
    Path.CURVE3,
]

heart = Path(verts, codes)
# Fungsi g2 (sesuai rumus eksplisit Lagrange)
def g2(T):
    hasil = (
        f[0] * ((T - x[1]) * (T - x[2])) / ((x[0] - x[1]) * (x[0] - x[2])) +
        f[1] * ((T - x[0]) * (T - x[2])) / ((x[1] - x[0]) * (x[1] - x[2])) +
        f[2] * ((T - x[0]) * (T - x[1])) / ((x[2] - x[0]) * (x[2] - x[1]))
    )
    return hasil
T = np.linspace(0,1,1000)
pd.DataFrame({'T': T, 'g2(T)': g2(T)}).head()
print("T\t\tg2(T)")
for t in T[::100]:  # Menampilkan setiap 100 nilai untuk kejelasan
    print("{0:6.2f}\t{1:8.6f}".format(t, g2(t)))
# Contoh evaluasi
nilai = 0.30
plt.figure(figsize=(6, 6))
print("g2({0:6.2f}) = {1:8.6f}".format(nilai, g2(nilai)))
plt.plot(T, g2(T), '--',color = 'm' ,label = 'Interpolasi 3 Titik')
plt.scatter(x, f,color= 'pink',marker=heart,s=1000)
plt.title("Interpolasi Lagrange (3 Titik)")
plt.legend()
plt.grid()
plt.show()