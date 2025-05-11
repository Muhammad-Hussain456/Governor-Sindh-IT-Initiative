def main():
  print("Adding multiple numbers: ");
  sum_of_nums: int = 0;
  nums_list: list[int] = [1,2,3,4,5,6,7,8,9,10];
  for x in nums_list:
    sum_of_nums += x;
  print(sum_of_nums);
 
if __name__ == '__main__':

  main()