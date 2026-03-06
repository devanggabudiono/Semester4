
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
a7= 7
a13= 13
lambda_ir = 850e-9
x1 = np.arange(0,90,5)
print(len(x1))
x1_rad = np.deg2rad(x1)
i7= np.array([6.6, 9, 10.2, 6.6,5.4,1.2,0.6,0,0,0,0,0,0,0,0,0,0,0])


i13= np.array([18.6, 11.4,9,4.8,3.6,1.8,0.12,0,0,0,0,0,0,0,0,0,0,0])


df = pd.DataFrame({'Angle (degrees)': x1, 'Current 7V (A)': i7, 'Current 13V (A)': i13}, index=np.arange(1, len(x1)+1))
max_7 = df.loc[df['Current 7V (A)'].idxmax()]
min_7 = df.loc[df['Current 7V (A)'].idxmin()]
max_13 = df.loc[df['Current 13V (A)'].idxmax()]
min_13 = df.loc[df['Current 13V (A)'].idxmin()]
print(df)
print("Max Current at 7V:")
print(max_7)
print("Min Current at 7V:")
print(min_7)
print("Max Current at 13V:")
print(max_13)
print("Min Current at 13V:")
print(min_13)
I0_7 = np.max(i7)
I0_13 = np.max(i13)
def fraunhofer_single_slit(theta, a, lam, I0):
    beta = (np.pi * a * np.sin(theta)) / lam

    # hindari pembagian nol
    beta = np.where(beta == 0, 1e-10, beta)

    return I0 * (np.sin(beta) / beta)**2
I_theory_7 = fraunhofer_single_slit(x1_rad, a7, lambda_ir, I0_7)
I_theory_13 = fraunhofer_single_slit(x1_rad, a13, lambda_ir, I0_13)
print(I_theory_7)
print(I_theory_13)
diff_7 = np.abs(i7 - I_theory_7)
mean_diff_7 = np.mean(diff_7)
diff_13 = np.abs(i13 - I_theory_13)
mean_diff13 = np.mean(diff_13)
print("Difference between experimental and theoretical values at 7V:")
print(mean_diff_7)
print("Difference between experimental and theoretical values at 13V:")
print(mean_diff13)
df_results = pd.DataFrame({
    'Angle (degrees)': x1,
    'Experimental Current 7V (A)': i7,
    'Theoretical Current 7V (A)': I_theory_7,
    'Difference 7V (A)': diff_7,
    'Experimental Current 13V (A)': i13,
    'Theoretical Current 13V (A)': I_theory_13,
    'Difference 13V (A)': diff_13
}, index=np.arange(1, len(x1)+1))
df_results.to_csv('results_gelombangmikro.csv', index=False)

plt.figure(figsize=(10,6))
plt.plot(df['Angle (degrees)'], df['Current 7V (A)'], marker='o', label='Current at 7V')
plt.plot(df['Angle (degrees)'], df['Current 13V (A)'], marker='s', label='Current at 13V')
# titik maksimum
plt.scatter(max_7['Angle (degrees)'], max_7['Current 7V (A)'], color='red', zorder=5, label='Max Current 7V')
plt.scatter(max_13['Angle (degrees)'], max_13['Current 13V (A)'], color='red', zorder=5, label='Max Current 13V')
# titik minimum
plt.scatter(min_7['Angle (degrees)'], min_7['Current 7V (A)'], color='blue', zorder=5, label='Min Current 7V')
plt.scatter(min_13['Angle (degrees)'], min_13['Current 13V (A)'], color='blue', zorder=5, label='Min Current 13V')
plt.plot(x1, I_theory_7, '-', label='Teori Fraunhofer 7 cm')
plt.plot(x1, I_theory_13, '--', label='Teori Fraunhofer 13 cm')
#perbedaan
plt.fill_between(x1, i7, I_theory_7, color='gray', alpha=0.3, label='Perbedaan 7V')
plt.fill_between(x1, i13, I_theory_13, color='yellow', alpha=0.3, label='Perbedaan 13V')
plt.xlabel('Angle (degrees)')
plt.ylabel('Current (A)')
plt.title('Current vs Angle for 7V and 13V')
plt.legend()
plt.grid(True)
plt.savefig('grafik_gelombangmikro.png', dpi=300, bbox_inches='tight')
plt.show()
# print(x1_rad)
# print(len(i7))
# print(len(i13))
# df=pd.DataFrame({'X': x_rad, 'Y': y}, index=np.arange(1, len(x)+1))
# print(df)
