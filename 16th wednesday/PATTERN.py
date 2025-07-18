
def right_half_pyramid(n):
    """
    Creates a right-aligned half pyramid pattern
    Example for n=4:
       *
      **
     ***
    ****
    """
    for i in range(n):
        print(" " * (n-i-1) + "*" * (i+1))

def left_half_pyramid(n):
    """
    Creates a left-aligned half pyramid pattern
    Example for n=4:
    *
    **
    ***
    ****
    """
    for i in range(n):
        print("*" * (i+1))

def full_pyramid(n):
    """
    Creates a full pyramid pattern
    Example for n=4:
       *
      ***
     *****
    *******
    """
    for i in range(n):
        spaces = " " * (n-i-1)
        stars = "*" * (2*i + 1)
        print(spaces + stars)

def inverted_right_half_pyramid(n):
    """
    Creates an inverted right-aligned half pyramid pattern
    Example for n=4:
    ****
     ***
      **
       *
    """
    for i in range(n):
        print(" " * i + "*" * (n-i))

def inverted_left_half_pyramid(n):
    """
    Creates an inverted left-aligned half pyramid pattern
    Example for n=4:
    ****
    ***
    **
    *
    """
    for i in range(n):
        print("*" * (n-i))

def inverted_full_pyramid(n):
    """
    Creates an inverted full pyramid pattern
    Example for n=4:
    *******
     *****
      ***
       *
    """
    for i in range(n):
        spaces = " " * i
        stars = "*" * (2*(n-i) - 1)
        print(spaces + stars)

# Example usage:
if __name__ == "__main__":
    n = 4
    print("Right Half Pyramid:")
    right_half_pyramid(n)
    print("\nLeft Half Pyramid:")
    left_half_pyramid(n)
    print("\nFull Pyramid:")
    full_pyramid(n)
    print("\nInverted Right Half Pyramid:")
    inverted_right_half_pyramid(n)
    print("\nInverted Left Half Pyramid:")
    inverted_left_half_pyramid(n)
    print("\nInverted Full Pyramid:")
    inverted_full_pyramid(n)
