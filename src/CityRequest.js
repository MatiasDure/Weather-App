const apiBase = "http://api.weatherapi.com/v1/forecast.json?key=6892d26d26854ad19ac123016230810";

export async function Request (pCity) {
    const query = `${apiBase}&q=${pCity}&days=1&aqi=no&alerts=no`;

    try{
        const request = await fetch( query, {mode:"cors"} );
        const cityInfo = await request.json();

        return cityInfo;

    } catch (error) {
        console.log(error);
    }
}
