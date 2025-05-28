class Counter:
    count = 0

    def __init__(self):
        Counter.count += 1

    @classmethod
    def display_count(cls):
        print(f"Total objects created: {cls.count}")

# Example
ob1 = Counter()
ob2 = Counter()
ob3 = Counter()
Counter.display_count()

