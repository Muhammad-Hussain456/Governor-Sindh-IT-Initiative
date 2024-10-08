"use client" // Enable client side rendering for this component
// import necessary hooks and types from react
import { useState, ChangeEvent, FormEvent } from "react"
// Import custom UI components from UI directory
import{
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";

import {Button} from "@/components/ui/button";

// import icons for Lucide React library
import { CloudIcon, MapPinIcon, ThermometerIcon } from "lucide-react";

// define Typescript interface for weather data
interface WeatherData{
  temperature: number;
  description: string;
  location: string;
  unit: string;
}

// Default export of WeatherWidgetComponent function
export default function WeatherWidget(){
// state hooks for managing location input, weather data, error message and loading.
const [location, setLocation] = useState<string>("");
const [weather, setWeather] = useState<WeatherData | null>(null);
const [error, setError] = useState<string | null>(null);
const [isLoading, setIsLoading] = useState<boolean>(false);


// function to handle the search form submission
const handleSearch= async (e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  const trimmedLocation = location.trim();
  if(trimmedLocation=== ""){
    setError("Please enter a valid location.");
    setWeather(null);
    return;
  }

setIsLoading(true);
setError(null);
try{
  // fetch weather data from weather API
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${trimmedLocation}`
  );
  if(!response.ok){
    throw new Error("City not found");
  }
  const data = await response.json();
  const weatherData: WeatherData = {
    temperature: data.current.temp_c,
    description: data.current.condition.text,
    location: data.location.name,
    unit: "C",
  };
  setWeather(weatherData);
}
catch(error){
console.error("Error fetching weather data: ", error);
setError("City not found. Please try again.");
setWeather(null);
}
finally{
  setIsLoading(false);
}
};
// Function to get temperature message
function getTemperatureMessage(temperature: number, unit: string):string{
if(unit === "C"){
  if(temperature<0){
    return `it's freezing at ${temperature} °C! Bundle up!`;
  }
  else if(temperature<10){
    return `it's quite cold at ${temperature} °C. warm clothes.`;

  }
  else if(temperature<20){
   return `The temperature is ${temperature} °C. Comfortable for light jacket.`;
  }
 else if(temperature<30){
  return `The temperature is ${temperature} °C. Enjoy the nice weather!.`;
 }
 else{
  return `it's hot at ${temperature} °C. Stay hydrated!`;
 }
}
else{
  // Placeholder for other units
  return `${temperature}°${unit}`;
}
}
// Function to get a weather message based on weather description
function getWeatherMessage(description:string): string{
  switch(description.toLowerCase()){
    case "sunny":
      return `it's a beautiful sunny day.`;
    case "partly cloudy":
      return `Expect some clouds and sunshine.`;
    case "cloudy":
      return `it's cloudy today.`;
      case "overcast":
        return "The sky is overcast.";
      case "rain":
        return "Don't forget your umbrella! It's raining.";
      case "thunderstorm":
        return "Thunderstorms are expected today.";
      case "snow":
        return "Bundle up! It's snowing.";
      case "mist":
        return "It's misty outside.";
      case "fog":
        return "Be careful, there's fog outside.";
      default:
        return description; // Default to returning the description as-is
  }
}
// function to get the location message based on current time
function getLocationMessage(location:string):string{
const currentHour = new Date().getHours();
const isNight = currentHour>=18 || currentHour<6;
return `${location} ${isNight? "at night":"during the Day"}`;
}
 // JSX return statement rendering the weather widget UI
 return (
  <div className="flex justify-center items-center h-screen">
    {/* Center the card within the screen */}
    <Card className="w-full max-w-md mx-auto text-center">
      {/* Card header with title and description */}
      <CardHeader>
        <CardTitle>Weather Widget</CardTitle>
        <CardDescription>
          Search for the current weather conditions in your city.
        </CardDescription>
      </CardHeader>
      {/* Card content including the search form and weather display */}
      <CardContent>
        {/* Form to input and submit the location */}
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Enter a city name"
            value={location}
            onChange={
              (e: ChangeEvent<HTMLInputElement>) =>
                setLocation(e.target.value) // Update location state on input change
            }
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Search"}{" "}
            {/* Show "Loading..." text while fetching data */}
          </Button>
        </form>
        {/* Display error message if any */}
        {error && <div className="mt-4 text-red-500">{error}</div>}
        {/* Display weather data if available */}
        {weather && (
          <div className="mt-4 grid gap-2">
            {/* Display temperature message with icon */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <ThermometerIcon className="w-6 h-6" />
                {getTemperatureMessage(weather.temperature, weather.unit)}
              </div>
            </div>
            {/* Display weather description message with icon */}
            <div className="flex items-center gap-2">
              <CloudIcon className="w-6 h-6 " />
              <div>{getWeatherMessage(weather.description)}</div>
            </div>
            {/* Display location message with icon */}
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-6 h-6 " />
              <div>{getLocationMessage(weather.location)}</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  </div>
);
}



