import random
sides = 6;
def main():
     roll = (input("Do you want to roll dice? Yes/No: "));
     def roll_dice():
        if roll == "Yes" or "yes":
           die1: int = random.randint(1, sides)
           die2: int = random.randint(1, sides)
           total: int = die1 + die2
           print("Dice have", sides, "sides each.")
           print("First die:", die1)
           print("Second die:", die2)
           print("Total of two dice:", total)
        else:
         print("");   
     roll_dice();
     def roll_dice_again():
        roll_again = str(input("Roll again ? Yes/No : "));
        if roll_again == "Yes" or "yes":
          roll_dice();
        else:
          print(""); 
     roll_dice_again();    
     roll_dice_again();   
if __name__ == '__main__':
    main()