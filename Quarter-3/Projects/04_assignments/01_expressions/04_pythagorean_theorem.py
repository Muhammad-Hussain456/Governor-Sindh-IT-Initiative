import math
def main():
  base: float = float(input("Enter the length of base: "));
  perperdicular: float = float(input("Enter the length of perperdicular: "))
  hypotenuse:float = round(math.sqrt(base**2 + perperdicular**2),2);
  print(f" Right angle triangle with: \n base = {base} \n perpendicular = {perperdicular} \n hypotenuse = {hypotenuse}");

if __name__ == '__main__':
  main();