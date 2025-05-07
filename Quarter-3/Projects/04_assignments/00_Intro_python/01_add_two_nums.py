def main():
  print("Sum of four numbers: ");
  num1: str = input("Enter the first number: ");
  num1: int = int(num1)
  num2: str = input("Enter the second number: ");
  num2: int = int(num2)
  num3: str = input("Enter the third number: ");
  num3: int = int(num3)
  num4: str = input("Enter the fourth number: ");
  num4: int = int(num4);
  sum: int = num1 + num2 + num3 + num4;
  print(f"The addition of {num1}, {num2}, {num3} and {num4} is equals to {sum} ");


if __name__ == '__main__':
    main()