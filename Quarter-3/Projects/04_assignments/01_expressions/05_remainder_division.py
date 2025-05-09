def main():
  print("Finding the result and remainder: ")
  num1: float = float(input("Enter the num1: "));
  num2:float = float(input("Enter the num2: "));
  result:float = num1/num2;
  remainder:float = num1%num2;
  print(f"result = {num1} / {num2} = {result}");
  print(f"remainder = {num1} % {num2} = {remainder}");

if __name__ == '__main__':
  main();