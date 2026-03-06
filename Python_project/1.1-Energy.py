
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd


def posisi_waktu(x0, v0,t, a):
  return x0+v0*t+0.5*a*t**2
def v(df):
  dx = df["position"].diff() # Corrected column name to "position"
  dt = df["time"].diff()
  return dx/dt

def energikinetik(m, v):
  return 0.5*m*v**2
def energipotensial(m, h, g=9.8): # Corrected parameter order
  return m*g*h
def energimekanik(K,V):
  return K+V
t = np.linspace(0,100,1000)
x = posisi_waktu(10, 0, t , -9.8) # Corrected function name

data = pd.DataFrame({"time": t,
                  "position": x})
                  
data.to_csv("Dataposisi.csv")
print(data)

data["velocity"] = v(data) # Corrected function name
m = 1 # Defined mass 'm'
data["K"] = energikinetik(m,data["velocity"])
data["U"] = energipotensial(m,data["position"])
data["E"] = energimekanik(data["K"],data["U"])

plt.plot(data["time"],data["K"],label = "Kinetic")
plt.plot(data["time"],data["U"],label = "potensial")
plt.plot(data["time"],data["E"],label = "Mekanik")

plt.xlabel("time")
plt.ylabel("Energy")
plt.legend()
plt.show()
