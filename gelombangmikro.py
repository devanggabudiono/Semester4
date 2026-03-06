
# ============================================================
# PRAKTIKUM OPTIKA – GELOMBANG MIKRO
# MACHINE LEARNING SEDERHANA UNTUK ANALISIS DATA
# ============================================================

# ---------- IMPORT LIBRARY ----------
import numpy as np                      # untuk numerik & array
import pandas as pd                     # untuk data tabel
import matplotlib.pyplot as plt         # untuk visualisasi

from sklearn.model_selection import train_test_split  # split data
from sklearn.linear_model import LinearRegression     # model ML
from sklearn.metrics import mean_squared_error        # evaluasi

# ---------- 1. MEMBUAT DATA EKSPERIMEN (SIMULASI) ----------
np.random.seed(0)  # supaya hasil konsisten

sudut = np.linspace(0, 45, 50)        # sudut (derajat)
celah_7 = np.full(50, 7)                # celah 7 cm
celah_13 = np.full(50, 13)              # celah 13 cm

# fungsi intensitas (fisika-like, mirip difraksi)
def intensitas(theta, a):
    return (np.sinc(a * np.sin(np.radians(theta)) / 10))**2

# intensitas + noise eksperimen
I_7 = intensitas(sudut, 7) + 0.05*np.random.randn(50)
I_13 = intensitas(sudut, 13) + 0.05*np.random.randn(50)

# ---------- 2. MEMBUAT DATAFRAME ----------
df_7 = pd.DataFrame({
    "sudut": sudut,
    "celah": celah_7,
    "intensitas": I_7
})

df_13 = pd.DataFrame({
    "sudut": sudut,
    "celah": celah_13,
    "intensitas": I_13
})

df = pd.concat([df_7, df_13], ignore_index=True)  # gabung data

print("\nDATA PRAKTIKUM:")
print(df.head())

# ---------- 3. VISUALISASI DATA AWAL ----------
plt.scatter(df["sudut"], df["intensitas"], c=df["celah"])
plt.xlabel("Sudut (derajat)")
plt.ylabel("Intensitas")
plt.title("Data Praktikum Gelombang Mikro")
plt.colorbar(label="Lebar Celah (cm)")
plt.show()

# ---------- 4. MACHINE LEARNING ----------
X = df[["sudut", "celah"]]   # fitur (input ML)
y = df["intensitas"]        # target (output ML)

# pisahkan data latih dan uji
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# model regresi linear (ML paling dasar)
model = LinearRegression()
model.fit(X_train, y_train)  # proses belajar ML

# ---------- 5. PREDIKSI & EVALUASI ----------
y_pred = model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
print("\nMean Squared Error (MSE):", mse)

# ---------- 6. PLOT HASIL PREDIKSI ----------
plt.scatter(y_test, y_pred)
plt.xlabel("Intensitas Asli")
plt.ylabel("Prediksi ML")
plt.title("Evaluasi Model Machine Learning")
plt.plot([0,1],[0,1])  # garis ideal
plt.show()
