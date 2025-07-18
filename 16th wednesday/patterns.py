import array


print("right_half_pyramid")
for i in range(1,5):
    print("*"*i)
print()
print("left half pyramid")
for i in range(5,0,-1):
    print("*"*(i-1))
for i in range(5,0,-1):
    print("*"*(i-1))
print("full pyramid")

print("inverted right half pyramid")
for i in range(5,0,-1):
    print("*"*i)
print("inverted left half pyramid")
for i in range(1,5):
    print("*"*(i-1))
print("inverted full pyramid")
for i in range(5,0,-1):
    print("*"*(2*i-1))
for i in range(1,5):
    print("2"*5)


n = 5  
for i in range(n):
    print(" " * (n - i - 1), end="")
    print("*" * (2 * i + 1))