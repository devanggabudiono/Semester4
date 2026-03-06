
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd



hbr = np.array([0.15, 0.10, 0.55, 0.50, 0.95])
alpha = np.array([10,20,30,40,50])

I = np.array([10, 20, 30, 40 ,50])
B = hbr * np.cos(np.deg2rad(hbr))

df1 = pd.DataFrame({
    "Hbr": hbr,
    "alpha": alpha,
    "Hbh": B
})
print(df1)

df = pd.DataFrame({
    "Arus(A)": I,
    "Medan(B)": B
})
df.index=df.index+1

a, b = np.polyfit(I,B,1)

print("kemiringan(a):",a)
print("Intersept (b):",b)

I_fit = np.linspace(min(I), max(I), 1000)
B_fit = a*I_fit+b
B_fit_data = a*I+b


df["B hasil fit (T)"] = B_fit_data
df["Residual (T)"] = B - B_fit_data
print(df)


plt.scatter(I,B, label=" Data eksperiment")
plt.plot(I_fit, B_fit, label="Regresi linear")
plt.title("Grafik HBH fungsi I")
plt.xlabel("Arus(A)")
plt.ylabel("Medan Magnet B")
plt.text(0.05,0.95,
    f"B= {a:.3f}I+{b:.3f}",
    transform=plt.gca().transAxes,
    fontsize=12
)
plt.legend()
plt.grid(True)
plt.show()