import math

def area(radius):
    pi = math.pi
    a = pow(radius,2)*pi
    return a

def perimeter(radius):
    pi = math.pi
    p = radius*2*pi
    return p


print("Area: "+str(area(10)))
print("P: "+str(perimeter(14)))