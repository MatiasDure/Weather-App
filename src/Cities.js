import { Request } from "./CityRequest";

const cities = [];

async function SetCity (pCity, pCityResponse) {

    cities.push(
        {
            city: pCity,
            cityResponse: pCityResponse
        }
    );

}

export async function GetCity (pCity) {
    
    const city = cities.find( (cityObj) => cityObj.city === pCity );

    let cr;

    if(city === undefined)
    {
        cr = await Request(pCity);
        SetCity(pCity, cr);
    } else {
        cr = city.cityResponse;
    }

    return cr;
} 
