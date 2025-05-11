class Employee:
    def __init__(self, name, salary, ssn):
        self.name = name          # public
        self._salary = salary     # protected
        self.__ssn = ssn          # private

emp = Employee("Ahmed", 50000, "123-45-6789")
print(emp.name)         # Accessible
print(emp._salary)      # Accessible but not recommended
# print(emp.__ssn)      # Error: AttributeError
print(emp._Employee__ssn)  # Accessible via name mangling
