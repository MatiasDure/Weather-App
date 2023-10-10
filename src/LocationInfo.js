const cityElement = document.getElementById("city");
const cityDateElement = document.getElementById("city-date");
const cityTimeElement = document.getElementById("city-time");

export const FillLocationInfo = (pResponseJson) => 
{
    cityElement.textContent = pResponseJson.location.name;
    const dateTime = pResponseJson.location.localtime.split(" ");
    cityDateElement.textContent = dateTime[0];
    cityTimeElement.textContent = dateTime[1];
}