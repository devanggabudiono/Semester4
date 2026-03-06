
import numpy as np

# Matriks resistansi
A = np.array([
    [4 + 2, -2],
    [-2, 2 + 6]
])

# Vektor tegangan
V = np.array([10, 5])

# Menyelesaikan A I = V
I = np.linalg.solve(A, V)

print("I1 =", I[0], "A")
print("I2 =", I[1], "A")

