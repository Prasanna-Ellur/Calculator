const input=document.querySelector('.input-box input');
const button=document.querySelector('.input-box button');
const weather=document.querySelector('.img-tag img');
const weather_number=document.getElementById('celsius');
const weather_description=document.getElementById('para');
const humidity=document.getElementById('percent');
const wind_speed=document.getElementById('kilo');

const location_not_found = document.querySelector('.location-not-found');

async function checkweather(city){
	const api_key="3b076c34c6cf931bf5c831406be6a552";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
	const weather_data=await fetch(`${url}`).then(response=>response.json())
	    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
	weather_number.innerHTML=`${weather_data.main.temp}°C`;
	console.log(weather_data)
	 weather_description.innerHTML=`${weather_data.weather[0].description}`;
	 humidity.innerHTML=`${weather_data.main.humidity}%`
	 wind_speed.innerHTML=`${weather_data.wind.speed}Km/h`

	switch (weather_data.weather[0].main){
		case 'Clouds':
			weather.src="/assets/cloud.png"
			console.log(weather.src);
			break
				case 'Clear':
			weather.src="/assets/clear.png"
			console.log(weather.src);
			break
					case 'Rain':
			weather.src="/assets/rain.png"
			console.log(weather.src);
			break
					case 'Mist':
			weather.src="/assets/mist.png"
			console.log(weather.src);
			break
					case 'Snow':
			weather.src="/assets/snow.png"
			console.log(weather.src);
			break
	}

}

button.addEventListener('click',()=>{
	checkweather(input.value)
})
