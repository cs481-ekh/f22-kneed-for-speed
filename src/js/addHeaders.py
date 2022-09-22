import pandas as pd #import read_csv

df = pd.read_csv('test.csv')
df.to_csv("test.csv", header=["Letter", "Number"], index=False)
print(df)

# df = read_csv('test.csv')
# df.columns = ['a', 'b']
# df.to_csv('test_2.csv')



# a,1
# b,2
# c,3
