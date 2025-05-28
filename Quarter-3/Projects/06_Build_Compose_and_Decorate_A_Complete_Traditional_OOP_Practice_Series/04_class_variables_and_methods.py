class Bank:
    bank_name = "National Bank"

    @classmethod
    def change_bank_name(cls, name):
        cls.bank_name = name

# Example
print(f"Old name: {Bank.bank_name}")
Bank.change_bank_name("Meezan Bank")
print(f"New Name: {Bank.bank_name}")
