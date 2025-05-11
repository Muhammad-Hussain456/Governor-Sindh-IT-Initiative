import streamlit as st
import hashlib
from cryptography.fernet import Fernet

# --- Initialization ---
if "KEY" not in st.session_state:
    st.session_state["KEY"] = Fernet.generate_key()
    st.session_state["cipher"] = Fernet(st.session_state["KEY"])
    st.session_state["stored_data"] = {}  # {"encrypted_text": {"encrypted_text": ..., "passkey": ...}}
    st.session_state["failed_attempts"] = 0

cipher = st.session_state["cipher"]

# --- Functions ---

# Hash passkey using SHA-256
def hash_passkey(passkey):
    return hashlib.sha256(passkey.encode()).hexdigest()

# Encrypt data using Fernet
def encrypt_data(text):
    return cipher.encrypt(text.encode()).decode()

# Decrypt data if passkey is correct
def decrypt_data(encrypted_text, passkey):
    hashed_passkey = hash_passkey(passkey)
    stored_data = st.session_state["stored_data"]

    if encrypted_text in stored_data:
        if stored_data[encrypted_text]["passkey"] == hashed_passkey:
            st.session_state["failed_attempts"] = 0  # Reset attempts
            return cipher.decrypt(encrypted_text.encode()).decode()
    
    # Increment failed attempts
    st.session_state["failed_attempts"] += 1
    return None

# Reset failed attempts after reauthorization
def reset_failed_attempts():
    st.session_state["failed_attempts"] = 0


# --- Streamlit UI ---

st.title("🔒 Secure Data Encryption System")

# Sidebar navigation
menu = ["Home", "Store Data", "Retrieve Data", "Login"]
choice = st.sidebar.selectbox("📑 Navigation", menu)

# --- Pages ---

if choice == "Home":
    st.subheader("🏠 Welcome to the Secure Data System")
    st.write("""
    📌 This app allows you to **securely store and retrieve data** using encryption with passkey protection.
    - Data is stored **in-memory**.
    - Passkeys are hashed using SHA-256.
    - Encryption uses **Fernet (Symmetric Encryption)**.
    - 3 failed attempts result in reauthorization.
    """)

elif choice == "Store Data":
    st.subheader("📂 Store Data Securely")

    user_data = st.text_area("📝 Enter Data to Store:")
    passkey = st.text_input("🔑 Enter Passkey:", type="password")

    if st.button("Encrypt & Save"):
        if user_data and passkey:
            hashed_passkey = hash_passkey(passkey)
            encrypted_text = encrypt_data(user_data)

            # Store encrypted text and hashed passkey
            st.session_state["stored_data"][encrypted_text] = {
                "encrypted_text": encrypted_text,
                "passkey": hashed_passkey
            }

            st.success(f"✅ Data Encrypted & Stored!\n\n**Encrypted Text:** `{encrypted_text}`")
        else:
            st.error("⚠️ Both fields are required!")

elif choice == "Retrieve Data":
    st.subheader("🔍 Retrieve Your Data")

    encrypted_text = st.text_area("🔒 Enter Encrypted Data:")
    passkey = st.text_input("🔑 Enter Passkey:", type="password")

    if st.button("Decrypt"):
        if encrypted_text and passkey:
            decrypted_text = decrypt_data(encrypted_text, passkey)

            if decrypted_text:
                st.success(f"✅ Decrypted Data: {decrypted_text}")
            else:
                attempts_left = 3 - st.session_state["failed_attempts"]
                if attempts_left > 0:
                    st.error(f"❌ Incorrect passkey! Attempts remaining: {attempts_left}")
                if st.session_state["failed_attempts"] >= 3:
                    st.warning("🔒 Too many failed attempts! Redirecting to Login Page...")
                    st.experimental_rerun()
        else:
            st.error("⚠️ Both fields are required!")

elif choice == "Login":
    st.subheader("🔑 Reauthorization Required")

    login_pass = st.text_input("Enter Master Password (Demo: `admin123`):", type="password")

    if st.button("Login"):
        if login_pass == "admin123":
            reset_failed_attempts()
            st.success("✅ Reauthorized successfully! Redirecting to Retrieve Data page...")
            st.switch_page("Login")

        else:
            st.error("❌ Incorrect password!")

# --- Footer ---
st.markdown("---")
st.caption("🔐 Built for Secure In-Memory Encryption with Streamlit & Python")

