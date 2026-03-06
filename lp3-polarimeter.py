
# ==========================================
# ANALISIS DATA POLARIMETER (REGRESI LINEAR)
# ==========================================

import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import linregress

# ------------------------------------------
# 1. DATA EKSPERIMEN
# ------------------------------------------

# Konsentrasi dalam %
c_percent = np.array([5, 10, 15, 20, 25])

# Ubah ke bentuk desimal jika mau (opsional)
c = c_percent / 100

# Sudut rotasi (derajat)
alpha = np.array([15, 20, 25, 30, 35])

# Panjang tabung (dm) — ubah sesuai alat kamu
l = 1.0

# ------------------------------------------
# 2. REGRESI LINEAR
# ------------------------------------------

slope, intercept, r_value, p_value, std_err = linregress(c, alpha)

R_squared = r_value**2

# Rotasi spesifik
alpha_spec = slope / l
alpha_spec_error = std_err / l

# ------------------------------------------
# 3. OUTPUT HASIL
# ------------------------------------------

print("=== HASIL REGRESI ===")
print(f"Gradien (m)              = {slope:.5f}")
print(f"Intersep (b)             = {intercept:.5f}")
print(f"R^2                      = {R_squared:.5f}")
print(f"Standar error gradien    = {std_err:.5f}")
print()
print("=== ROTASI SPESIFIK ===")
print(f"[alpha]                  = {alpha_spec:.5f} deg dm^-1 (g/mL)^-1")
print(f"Ketidakpastian           = {alpha_spec_error:.5f}")

# ------------------------------------------
# 4. PLOT GRAFIK
# ------------------------------------------

c_fit = np.linspace(min(c), max(c), 100)
alpha_fit = slope * c_fit + intercept

plt.scatter(c, alpha, label="Data Eksperimen")
plt.plot(c_fit, alpha_fit, label="Regresi Linear")
plt.xlabel("Konsentrasi (g/mL)")
plt.ylabel("Sudut Rotasi (derajat)")
plt.title("Hubungan Konsentrasi vs Sudut Rotasi")
plt.legend()
plt.grid(True)
plt.savefig("grafik_polarimeter.png", dpi=300)

plt.show()