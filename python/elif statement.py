#Grade Calculation
marks=int(input("enter your marks(out of 50): "))
if marks>40 and marks<=50:
    print("Grade A")
elif marks>30 and marks<=40:
    print("Grade B")
elif marks>20 and marks<=30:
    print("Grade C")
else:
    print("Failed")
