def main():
  print("Calculating number of seconds in a year: ");

  Days_in_1_year: int = 365;

  hours_in_one_day:int = 24;
    ##  hours_in_one_year:int = Days_in_1_year * hours_in_one_day;

  minutes_in_1_hour:int = 60;
    ## minutes_in_1_year:int = minutes_in_1_hour * hours_in_one_year;

  seconds_in_1_minute:int = 60;
    ## seconds_in_1_year:int = seconds_in_1_minute * minutes_in_1_year;

  print(f"There are {Days_in_1_year * hours_in_one_day * minutes_in_1_hour * seconds_in_1_minute} seconds in a year!")


if __name__ == '__main__':
   main();