//Weather API using package axios and open source weather url LINK

const getWeather= async()=>{
    const result = await fetch("https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto");

    const response = await result.json();
    console.log({response});
    document.getElementById("sunset").innerHTML = response.daily.sunset[0];
    document.getElementById("sunrise").innerHTML = response.daily.sunrise[0];
};
getWeather();