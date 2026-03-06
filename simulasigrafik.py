import numpy as np
import matplotlib.pyplot as plt

# Persamaan diferensial kompleks
def f(z):
    return 1j * z

# Parameter
h = 0.01
t_end =ir0
N = int(t_end / h)

# Array solusi
z = np.zeros(N, dtype=complex)
z[0] = 1 + 0j  # kondisi awal

# Euler Method
for n in range(N-1):
    z[n+1] = z[n] + h * f(z[n])

# Plot lintasan di bidang kompleks
plt.figure()
plt.plot(z.real, z.imag)
plt.gca().set_aspect('equal')
plt.xlabel("Real")
plt.ylabel("Imaginary")
plt.title("Euler Simulation of e^{it}")

plt.show()
