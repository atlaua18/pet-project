// export default 
document.addEventListener('DOMContentLoaded', async () => {

    const divDeg = document.querySelector('.temp');
    const imgIcon = document.querySelector('.icon');

    function getCelsius(obj) {
        let celsius = Math.round(obj.main.temp - 273.15);
        if (celsius > 0) {
            divDeg.innerHTML = '+' + celsius + '&#8451;';
        } else {
            divDeg.innerHTML = Math.round(obj.main.temp - 273.15) + '&#8451;';
        }
    }

    async function getWeather() {
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Leningrad&appid=879e1b0421202dc81be8d808ca9f75f1', {
            method: 'GET',
            heareds: {
                'Content-Type': 'application/json',
            }
        });
        response.json().then(obj => {
            getCelsius(obj);
            imgIcon.setAttribute('src', `http://openweathermap.org/img/wn/${obj.weather[0].icon}.png`);
        });
    }
    await getWeather();
});