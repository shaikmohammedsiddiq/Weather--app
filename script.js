async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "40d449e0850b813b7461817b99ed6569";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("result").innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}