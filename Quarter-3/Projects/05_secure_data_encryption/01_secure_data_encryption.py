import streamlit as st
import hashlib
from cryptography.fernet import Fernet

# Generate a key (in production you'd persist this)
KEY = Fernet.generate_key()
cipher = Fernet(KEY)

# In-memory storage (won't persist if app is restarted)
if "stored_data" not in st.session_state:
    st.session_state.stored_data = {}  # {"encrypted_text": {"encrypted_text": "xyz", "passkey": "hashed"}}

if "failed_attempts" not in st.session_state:
    st.session_state.failed_attempts = 0

if "page" not in st.session_state:
    st.session_state.page = "Home"

# Function to hash passkey
def hash_passkey(passkey):
    return hashlib.sha256(passkey.encode()).hexdigest()

# Function to encrypt data
def encrypt_data(text):
    return cipher.encrypt(text.encode()).decode()

# Function to decrypt data
def decrypt_data(encrypted_text, passkey):
    hashed_passkey = hash_passkey(passkey)
    stored_data = st.session_state.stored_data

    if encrypted_text in stored_data:
        record = stored_data[encrypted_text]
        if record["passkey"] == hashed_passkey:
            st.session_state.failed_attempts = 0
            return cipher.decrypt(encrypted_text.encode()).decode()

    st.session_state.failed_attempts += 1
    return None

# Sidebar Navigation
menu = ["Home", "Store Data", "Retrieve Data", "Login"]
choice = st.sidebar.selectbox("Navigation", menu, index=menu.index(st.session_state.page))

# Home Page
if choice == "Home":
    st.session_state.page = "Home"
    st.title("🔒 Secure Data Encryption System")
    st.subheader("🏠 Welcome to the Secure Data System")
    st.write("Use this app to **securely store and retrieve data** using unique passkeys.")

# Store Data Page
elif choice == "Store Data":
    st.session_state.page = "Store Data"
    st.title("📂 Store Data Securely")
    user_data = st.text_area("Enter Data:")
    passkey = st.text_input("Enter Passkey:", type="password")

    if st.button("Encrypt & Save"):
        if user_data and passkey:
            hashed_pass = hash_passkey(passkey)
            encrypted_text = encrypt_data(user_data)
            st.session_state.stored_data[encrypted_text] = {
                "encrypted_text": encrypted_text,
                "passkey": hashed_pass
            }
            st.success(f"✅ Data stored securely!\nEncrypted Text: `{encrypted_text}`")
        else:
            st.error("⚠️ Both fields are required!")

# Retrieve Data Page
elif choice == "Retrieve Data":
    st.session_state.page = "Retrieve Data"
    st.title("🔍 Retrieve Your Data")
    encrypted_text = st.text_area("Enter Encrypted Data:")
    passkey = st.text_input("Enter Passkey:", type="password")

    if st.button("Decrypt"):
        if encrypted_text and passkey:
            result = decrypt_data(encrypted_text, passkey)
            if result:
                st.success(f"✅ Decrypted Data: {result}")
            else:
                remaining_attempts = 3 - st.session_state.failed_attempts
                if remaining_attempts > 0:
                    st.error(f"❌ Incorrect passkey! Attempts remaining: {remaining_attempts}")
                else:
                    st.warning("🔒 Too many failed attempts! Redirecting to Login Page.")
                    st.session_state.page = "Login"
                    st.experimental_rerun()
        else:
            st.error("⚠️ Both fields are required!")

# Login Page
elif choice == "Login":
    st.session_state.page = "Login"
    st.title("🔑 Reauthorization Required")
    login_pass = st.text_input("Enter Master Password:", type="password")

    if st.button("Login"):
        if login_pass == "admin123":  # Simple demo login
            st.session_state.failed_attempts = 0
            st.success("✅ Reauthorized successfully! Redirecting to Retrieve Data...")
            st.session_state.page = "Retrieve Data"
            st.experimental_rerun()
        else:
            st.error("❌ Incorrect password!")
