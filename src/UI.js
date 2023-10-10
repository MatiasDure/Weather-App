import { GetCity } from "./Cities";
import { FillWeatherInfo, ChangeMetric } from "./weatherInfo";
import { FillLocationInfo } from "./LocationInfo";

const searchBtn = document.getElementById("search-btn");
const searchInputField = document.getElementById("location-query");
const toggleWeatherSystem = document.getElementById("toggle-system");
let currentCity;

async function InputRequest() {

    const queryValue = searchInputField.value;
    searchInputField.value = "";

    await RequestByName(queryValue);
}

export async function RequestByName(pName) {
    
    let response = await GetCity(pName);

    FillLocationInfo(response);
    FillWeatherInfo(response);
    currentCity =  response;
}    

export const SetInteractables = () => {
    
    searchBtn.addEventListener("click", InputRequest);
    
    searchInputField.addEventListener("keydown", (event) => {
        
        if(event.key !== "Enter") return;

        event.preventDefault();
    
        InputRequest();
    });

    toggleWeatherSystem.addEventListener("click", () => {

        if(!ChangeMetric()) toggleWeatherSystem.textContent = "Display °C";
        else toggleWeatherSystem.textContent = "Display °F";
        FillWeatherInfo(currentCity);
    
    });

}




