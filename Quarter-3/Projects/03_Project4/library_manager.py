import re
print("Welcome to your Personal Library Mananger!")
books = {
     1: {
        "title" : "python",
        "author": "mrafg",
        "year"  : "2022",
        "genre" : "essay",
      },
    2: {
        "title" : "python2",
        "author": "mra",
        "year"  : "2021",
        "genre" : "essay",
      }
}
bookMenu = {
   1 : "1. Add a book ",
   2 : "2. Remove a book",
   3 : "3. Search for a book",
   4 : "4. Display all books",
   5 : "5. Display statistics",
   6 : "6. Exit"
}
for x in bookMenu:
  print(bookMenu[x])
print("Enter your Choice: ")
userChoice = int(input())
if (userChoice == 1):
  title = str(input("Enter the book title: "))
  author = str(input("Enter the name of author: "))
  year =  int(input("Enter the publication year: "))
  genre = str(input("Enter the genre: "))
  read_status = bool(input("Have you read this book? (yes/no): "))
  book_id = max(books.keys()) + 1  # Assign a new unique ID
  books[book_id] = {
        "title": title,
        "author": author,
        "year": year,
        "genre": genre,
        "read": read_status
    }
  print("Book added successfully! ")
elif (userChoice == 2):
    str(input("Enter the title of the book to remove: "))
    print("Book removed successfully! ")
elif (userChoice == 3):
    searchOption = {
      "1": "1. Tile",
      "2": "2. Author"
    }
    print("Search by: ")
    for x in searchOption:
        print(searchOption[x])
    selectedSearchOption = int(input("enter your choice: "))
    if(selectedSearchOption == 1):
            str(input("Enter the title of the book: "))
    elif(selectedSearchOption == 2):
          author =  str(input("Enter the name of Author: "))
          found_books = [book for book in books.values() if book["title"].lower() == author ]
        
    else:
            print("invalid input!")
    if found_books:
        print("\nMatching Books:")
        for book in found_books:
            print(f"Title: {book['title']}, Author: {book['author']}, Year: {book['year']}, Genre: {book['genre']}")
    else:
        print("No matching books found!")
else:
    print('invalid')

