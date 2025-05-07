import random

NUM_SIDES = 6

''' Note: 
 The local variable "die1" in  roll_dice() changes but this change has no affect on the same variable "die1" in the main(). This shows how variable scope works.
'''
def roll_dice():
    
    die1: int = random.randint(1, NUM_SIDES)
    print(f"die1 = {die1}");        
    die2: int = random.randint(1, NUM_SIDES)
    print(f"die2 = {die2}");                             
    total: int = die1 + die2
    print("Total of two dice:", total)

def main():
    die1: int = 10
    print("die1 in main() starts as: " + str(die1))
    roll_dice()
    roll_dice()
    roll_dice()
    print("die1 in main() is: " + str(die1))

if __name__ == '__main__':
    main()

