def main():
 side1: str = input("Enter the length of side 1: ")
 side1: float = int(side1);
 side2: str = input("Enter the length of side 2: ")
 side2: float = int(side2);
 side3: str = input("Enter the length of side 3: ")
 side3: float = int(side3);
 parimeter: float = side1 + side2 + side3;
 print(f"The parimeter of triangle is: {parimeter}");
if __name__ == "__main__":
  main();


# OR

'''
def main():
    # Get the 3 side lengths of the triangle
    side1: float = float(input("What is the length of side 1? "))
    side2: float = float(input("What is the length of side 2? "))
    side3: float = float(input("What is the length of side 3? "))

    # Print out the perimeter (sum of the sides) of the triangle, make sure to cast it to a str when concatenating!
    print("The perimeter of the triangle is " + str(side1 + side2 + side3))


# There is no need to edit code beyond this point

if __name__ == '__main__':
    main()


'''
