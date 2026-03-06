import pandas as pd

# 1. Membuat data (biasanya ini dari CSV / eksperimen)
data = {
    "waktu_s": [0, 1, 2, 3, 4, 5],
    "suhu_K": [300, 301, 302, 303, 302, 301]
}

# 2. Membuat DataFrame
df = pd.DataFrame(data)

# 3. Menampilkan data
print("Data eksperimen:")
print(df)

# 4. Hitung rata-rata suhu
rata_suhu = df["suhu_K"].mean()

print("\nRata-rata suhu:")
print(rata_suhu)

# 5. Tambahkan kolom baru (deviasi dari rata-rata)
df["deviasi_suhu"] = df["suhu_K"] - rata_suhu

print("\nData setelah ditambah kolom deviasi:")
print(df)



