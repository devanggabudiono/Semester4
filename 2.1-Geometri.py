
import numpy as np
import matplotlib.pyplot as plt

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# titik sudut kubus
points = np.array([
    [0,0,0], [1,0,0], [1,1,0], [0,1,0],
    [0,0,1], [1,0,1], [1,1,1], [0,1,1]
])

# daftar pasangan titik yang membentuk rusuk
edges = [
    (0,1), (1,2), (2,3), (3,0),
    (4,5), (5,6), (6,7), (7,4),
    (0,4), (1,5), (2,6), (3,7)
]

# plot titik
ax.scatter(points[:,0], points[:,1], points[:,2])

# plot rusuk
for i, j in edges:
    ax.plot(
        [points[i,0], points[j,0]],
        [points[i,1], points[j,1]],
        [points[i,2], points[j,2]]
    )

ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')

plt.show()
