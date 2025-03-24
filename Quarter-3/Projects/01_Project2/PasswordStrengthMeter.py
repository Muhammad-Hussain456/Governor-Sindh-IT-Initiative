import streamlit as st

import re

st.title("Password Stength Meter")
st.write("Create a Strong Password for Security.")
password = st.text_input("password")
def check_password_strength(password):
    score = 0
    
    # Length Check
    if len(password) >= 8:
        score += 1
    elif len(password) >=1 and len(password)<8:
     st.write("❌ Password should be at least 8 characters long.")

      # Digit Check
    if re.search(r"\d", password):
        score += 1
    else:
        st.write("❌ Add at least one number (0-9).")

    # Upper & Lowercase Check
    if re.search(r"[A-Z]", password) and re.search(r"[a-z]", password):
        score += 1
    else:
        st.write("❌ Include both uppercase and lowercase letters.")
    
    
    # Special Character Check
    if re.search(r"[!@#$%^&*_]", password):
        score += 1
    else:
        st.write("❌ Include at least one special character (!@#$%^&*).")
    # Strength Rating
    if score == 4:
          st.write("✅ Strong Password!")
    elif score == 3:
          st.write("⚠️ Moderate Password - Consider adding more security features.")
    else:
          st.write("❌ Weak password - Improve it using the suggestions above.")
    if(score)!= 4:
        st.write("Hint: @HtdsG_759")
        
# Get user input
check_password_strength(password)
