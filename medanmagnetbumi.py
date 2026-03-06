import numpy as np
import matplotlib.pyplot as plt

# Besar medan (contoh nilai)
hBE = 2.0   # medan magnet bumi horizontal
hBH = 1.5   # medan magnet Helmholtz

# Resultan
B = np.sqrt(hBE**2 + hBH**2)

# Sudut defleksi
alpha = np.arctan(hBH / hBE)

# Plot
plt.figure(figsize=(6,6))

# Vektor hB_E
plt.quiver(0, 0, hBE, 0, angles='xy', scale_units='xy', scale=1)
plt.text(hBE+0.05, 0, r'$hB_E$', fontsize=12)

# Vektor hB_H
plt.quiver(0, 0, 0, hBH, angles='xy', scale_units='xy', scale=1)
plt.text(0, hBH+0.05, r'$hB_H$', fontsize=12)

# Vektor resultan
plt.quiver(0, 0, hBE, hBH, angles='xy', scale_units='xy', scale=1, linestyle='dashed')
plt.text(hBE+0.05, hBH+0.05, r'$\vec{B}$', fontsize=12)

# Sudut alpha (busur)
theta = np.linspace(0, alpha, 100)
plt.plot(0.5*np.cos(theta), 0.5*np.sin(theta))
plt.text(0.55*np.cos(alpha/2), 0.55*np.sin(alpha/2), r'$\alpha$', fontsize=12)

# Setting axis
plt.xlim(0, 2.5)
plt.ylim(0, 2.5)
plt.xlabel("Arah Horizontal")
plt.ylabel("Arah Vertikal")
plt.title("Diagram Vektor Medan Magnet")

plt.grid(True)
plt.gca().set_aspect('equal')
plt.show()

