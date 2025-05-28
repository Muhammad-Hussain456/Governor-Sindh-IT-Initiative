class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks
        self.totalMarks = 525

    def display(self):
        print(f"Name: {self.name}, Marks: {self.marks}, percentage: {round((self.marks/self.totalMarks)*100,2)}")

# Example
s1 = Student("Ali", 450)
s1.display()
s2 = Student("Hussain", 400)
s2.display()
s3 = Student("Shahid", 399)
s3.display()
