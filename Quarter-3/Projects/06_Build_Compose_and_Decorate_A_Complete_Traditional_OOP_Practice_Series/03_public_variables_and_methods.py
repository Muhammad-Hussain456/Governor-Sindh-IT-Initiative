class Car:
    def __init__(self, brand):
        self.brand = brand

    def start(self):
        print(f"{self.brand} car is starting!")

# Example
car1 = Car("Toyota")
car2 = Car("BMW")
print(car1.brand)
car1.start()
print(car2.brand)
car2.start()
