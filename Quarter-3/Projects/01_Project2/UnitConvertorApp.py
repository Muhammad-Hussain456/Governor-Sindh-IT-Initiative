import streamlit as st

st.title("Unit Convertor App")

st.header("Select the units")
mainUnits = ["length", "mass","time"]
unit = st.selectbox("Units:", mainUnits, key="main_unit")
if unit == "length":

  FromUnit = st.selectbox("From:",["meter", "centimeter"], key="length_from")
  toUnit = st.selectbox("To:", ["centimeter", "meter"], key="length_to")
  
  if FromUnit == "meter" and toUnit == "centimeter":
    givenU = st.number_input("meter", key="given_unit" )
    desiredU = givenU * 100
    st.number_input("centimeter", desiredU, key="required_unit")
  elif FromUnit== "centimeter" and toUnit == "meter":
    givenU = st.number_input("centimeter", key="given_unit" )
    desiredU = givenU / 100
    st.number_input("meter", desiredU, key="required_unit")
  elif FromUnit== "meter" and toUnit == "meter":
    givenU = st.number_input("meter", key="given_unit" )
    desiredU = givenU
    st.number_input("meter", desiredU, key="required_unit")
  elif FromUnit== "centimeter" and toUnit == "centimeter":
    givenU = st.number_input("centimeter", key="given_unit" )
    desiredU = givenU
    st.number_input("centimeter", desiredU, key="required_unit")
  else :
    givenU = st.number_input("meter", key="given_unit" )
    desiredU = 0.00
    st.number_input("centimeter", desiredU, key="required_unit")
    
elif unit == "mass":

  FromUnit = st.selectbox("From:",["kilogram", "gram"], key="mass_from")
  toUnit = st.selectbox("To:", ["gram", "kilogram"], key="mass_to")
  
  if FromUnit == "kilogram" and toUnit == "gram":
    givenU = st.number_input("kilogram", key="given_unit" )
    desiredU = givenU * 1000
    st.number_input("gram", desiredU, key="required_unit")
  elif FromUnit == "gram" and toUnit == "kilogram":
    givenU = st.number_input("gram", key="given_unit" )
    desiredU = givenU / 1000
    st.number_input("kilogram", desiredU, key="required_unit")
  elif FromUnit == toUnit:
        if FromUnit == "gram":
          givenU = st.number_input("gram", key="given_unit" )
          desiredU = givenU / 1000
          toUnit = "kilogram"
          st.number_input("kilogram", desiredU, key="required_unit")
        else:
          givenU = st.number_input("kilogram", key="given_unit" )
          desiredU = givenU * 1000
          toUnit = "gram"
          st.number_input("gram", desiredU, key="required_unit")
  else :
    givenU = st.number_input("kilogram", key="given_unit" )
    desiredU = 0.00
    st.number_input("gram", desiredU, key="required_unit")

elif(unit == "time"):
 
  FromUnit = st.selectbox("From:",["minutes", "seconds"], key="time_from")
  toUnit = st.selectbox("To:", ["seconds","minutes"], key="time_to")
  
  if FromUnit == "minutes" and toUnit == "seconds":
    givenU = st.number_input("minutes", key="given_unit" )
    desiredU = givenU * 60
    st.number_input("seconds", desiredU, key="required_unit")
  elif FromUnit == "seconds" and toUnit == "minutes":
    givenU = st.number_input("seconds", key="given_unit" )
    desiredU = givenU / 60
    st.number_input("minutes", desiredU, key="required_unit")
  elif FromUnit == toUnit:
        if FromUnit == "seconds":
          givenU = st.number_input("seconds", key="given_unit" )
          desiredU = givenU / 60
          toUnit = "minutes"
          st.number_input("minutes", desiredU, key="required_unit")
        else:
          givenU = st.number_input("minutes", key="given_unit" )
          desiredU = givenU * 60
          toUnit = "seconds"
          st.number_input("seconds", desiredU, key="required_unit")
  else :
    givenU = st.number_input("minutes", key="given_unit" )
    desiredU = 0.00
    st.number_input("seconds", desiredU, key="required_unit")
 
else:
 st.write("coming soon...!")
