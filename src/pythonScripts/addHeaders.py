import pandas as pd #import read_csv
import sys, urllib

print("made it")

query_string = sys.stdin.read()
multiform = urllib.parse.parse_qs(query_string)
path = multiform["fileName"]

print(path)
df = pd.read_csv(path, names=['letter','number']) #letter and number can be changed to actual header names, was using them for testing
df.to_csv(path, index=False)
print(df) 
