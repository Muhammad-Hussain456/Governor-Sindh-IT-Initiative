def main():
 temp_Fahreheit: str = input("Enter the temperature in fahrenheit: ");
 temp_Fahreheit: float = float((temp_Fahreheit));
 temp_Celsius: float = round((temp_Fahreheit-32)*5.0/9.0,2);
 # print(f"{temp_Fahreheit} temperature in Fahrenheit = {temp_Celsius} temperature in Clesius ");
 print(f"{temp_Fahreheit} degrees Fahrenheit = {temp_Celsius} degrees Celsius ");
if __name__ == '__main__':
  main();