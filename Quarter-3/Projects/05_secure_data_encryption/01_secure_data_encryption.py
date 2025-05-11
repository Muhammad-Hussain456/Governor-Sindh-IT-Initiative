import streamlit as st
import hashlib
from cryptography.fernet import Fernet

# Generate or retrieve key
if "key" not in st.session_state:
    st.session_state.key = Fernet.generate_key()

cipher = Fernet(st.session_state.key)

# In-memory storage
if "stored_data" not in st.session_state:
    st.session_state.stored_data = {}

if "failed_attempts" not in st.session_state:
    st.session_state.failed_attempts = 0

if "page" not in st.session_state:
    st.session_state.page = "Home"

def hash_passkey(passkey):
    return hashlib.sha256(passkey.encode()).hexdigest()

def encrypt_data(text):
    return cipher.encrypt(text.encode()).decode()

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

if choice == "Home":
    st.session_state.page = "Home"
    st.title("🔒 Secure Data Encryption System")
    st.write("Use this app to securely store and retrieve encrypted data.")

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
            st.success(f"✅ Data stored!\nEncrypted Text: `{encrypted_text}`")
        else:
            st.error("⚠️ Both fields are required.")

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
                st.error(f"❌ Incorrect passkey! Attempts left: {remaining_attempts}")
            else:
                st.warning("🔒 Too many failed attempts! Redirecting to Login.")
                st.session_state.page = "Login"
                st.rerun()
    else:
        st.error("⚠️ Both fields are required.")


elif choice == "Login":
    st.session_state.page = "Login"
    st.title("🔑 Reauthorization")
    login_pass = st.text_input("Enter Master Password:", type="password")

    if st.button("Login"):
        if login_pass == "admin123":
            st.session_state.failed_attempts = 0
            st.success("✅ Access restored. Redirecting to Retrieve Data...")
            st.session_state.page = "Retrieve Data"
            st.rerun()
        else:
            st.error("❌ Incorrect password.")
