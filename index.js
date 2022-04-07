console.log('1');
let weather = {
    apiKey: 'insert your openweather key here',
    getWeather: function (city) {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='
            + city
            + '&units=metric&appid='
            + this.apiKey
        )
            .then(response => response.json())
            .then(data => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerHTML = 'Weather in ' + name;
        document.querySelector('.degrees').innerHTML = Math.floor(temp) + '&deg';
        document.querySelector('.humidity').innerHTML = 'Humidity:' + humidity + '%';
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.wind').innerHTML = 'Wind speed: ' + speed + 'km/h';
        document.querySelector('.icon').src = 'http://openweathermap.org/img/w/' + icon + '.png';
    }
}

document.querySelector('#btn').addEventListener('click', function () {
    let city = document.querySelector('#search').value;
    weather.getWeather(city);
});





