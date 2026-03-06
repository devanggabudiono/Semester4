import matplotlib
matplotlib.use("TkAgg")

import matplotlib.pyplot as plt
import numpy as np

t = np.linspace(0, 10, 100)
df1 = np.sin(t)

plt.plot(t, df1, label="dataplot in neovim")
plt.legend()
plt.show()
