import pandas as pd #import read_csv

path = request.form['param']

df = pd.read_csv(path, names=['letter','number']) #letter and number can be changed to actual header names, was using them for testing
df.to_csv(path, index=False)
print(df)