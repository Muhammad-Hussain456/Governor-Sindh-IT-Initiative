class Bank:
    bank_name = "National Bank"

    @classmethod
    def change_bank_name(cls, name):
        cls.bank_name = name

# Example
print(Bank.bank_name)
Bank.change_bank_name("United Bank")
print(Bank.bank_name)
