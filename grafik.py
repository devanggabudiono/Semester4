import numpy as np
import matplotlib.pyplot as plt

x = np.array([1,2,3,4,5])
y = np.array([5,4,3,2,1])

a = 0.5
b = 8

y_pred = a*x +b

mse = np.mean ((y_pred-y)**2)
print ("MSE:",mse)

plt.scatter(x,y, color="red", label = "data aseli")
plt.plot(x,y_pred, color="blue")
plt.xlabel("coba")
plt.ylabel("apayah")
plt.grid(True)
plt.savefig("grafik.png")
plt.show()
