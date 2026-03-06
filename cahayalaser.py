
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import linregress

# =====================================================
# PARAMETER
# =====================================================

m = 1
delta_x = 0.001      # ketelitian x (m) -> misal 0.1 cm
delta_L = 0.001      # ketelitian L (m) -> misal 0.1 cm

# =====================================================
# DATA (cm -> meter)
# =====================================================

data = {
    "100_garis_mm": {
        "x": np.array([1.5,2,2,2.3,2.5,2.6,3,3,3,3.5])/100,
        "L": np.array([24,28,30,35,37,39,43,46,48,50])/100,
        "d": 1/(100*1000)
    },
    "300_garis_mm": {
        "x": np.array([5,5.5,6,6.5,7,8,8.5,9,9.5,10])/100,
        "L": np.array([24,28,30,35,37,39,43,46,48,50])/100,
        "d": 1/(300*1000)
    },
    "600_garis_mm": {
        "x": np.array([10,11.5,12.5,14.8,15,17,17.8,18.5,19.5,20.5])/100,
        "L": np.array([24,28,30,35,37,39,43,46,48,50])/100,
        "d": 1/(600*1000)
    }
}

# =====================================================
# ANALISIS
# =====================================================

for key in data:
    
    x = data[key]["x"]
    L = data[key]["L"]
    d = data[key]["d"]
    
    # Variabel regresi sesuai metode
    X = L/d
    Y = x
    
    # Regresi linear y = a + bx
    slope, intercept, r_value, p_value, std_err = linregress(X, Y)
    
    lambda_reg = slope
    
    # Hitung lambda dari rumus eksak
    lambda_exp = d * (x/np.sqrt(L**2 + x**2)) / m
    lambda_mean = np.mean(lambda_exp)
    
    # Hitung ketidakpastian
    S_lambda = np.sqrt(
        ((d/L)*(2/3)*delta_x)**2 +
        ((x*d)/(L**2)*(2/3)*delta_L)**2
    )
    
    S_lambda_mean = np.mean(S_lambda)
    
    R_lambda = abs(S_lambda_mean/lambda_mean)*100
    
    # =================================================
    # PLOT
    # =================================================
    
    plt.figure(figsize=(8,6))
    
    plt.scatter(X, Y, s=60)
    plt.plot(X, intercept + slope*X)
    
    plt.xlabel("L/d")
    plt.ylabel("x (m)")
    plt.title(f"Regresi Linear - {key.replace('_',' ')}")
    
    plt.legend([
        f"y = {intercept:.2e} + {slope:.2e} x\n"
        f"λ (regresi) = {lambda_reg*1e9:.2f} nm\n"
        f"λ (mean) = {lambda_mean*1e9:.2f} nm\n"
        f"$R^2$ = {r_value**2:.4f}\n"
        f"Sλ = {S_lambda_mean*1e9:.2f} nm\n"
        f"Rλ = {R_lambda:.2f}%"
    ])
    
    plt.tight_layout()
    plt.savefig(f"Analisis_{key}.png", dpi=300)
    plt.show()
    
    # =================================================
    # PRINT HASIL
    # =================================================
    
    print("\n===================================================")
    print(f"HASIL UNTUK {key}")
    print("===================================================")
    print(f"a (intercept)         = {intercept:.4e}")
    print(f"λ (dari regresi)      = {lambda_reg*1e9:.2f} nm")
    print(f"λ (rata-rata eksak)   = {lambda_mean*1e9:.2f} nm")
    print(f"Sλ                    = {S_lambda_mean*1e9:.2f} nm")
    print(f"Rλ (%)                = {R_lambda:.2f}")
    print(f"R²                    = {r_value**2:.4f}")
