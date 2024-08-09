
//const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=kolhapur';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4b6ddca7c1mshb6c1f664aba5fe3p12c561jsn69c5e68027b8',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

//  fetch(url, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err))

    
document.addEventListener('DOMContentLoaded', () => {
    const getweather = (city) => {
        cityName.innerHTML = city;
        fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);

        cloud_pct.innerHTML = response.current.cloud;
        temp.innerHTML = response.current.temp_c;
        feels_like.innerHTML = response.current.feelslike_c;
        humidity.innerHTML = response.current.humidity;
        min_temp.innerHTML = response.current.heatindex_c; // Assuming you're using the current temp as min
        max_temp.innerHTML = response.current.heatindex_f; // Assuming you're using the current temp in Fahrenheit as max
        wind_speed.innerHTML = response.current.wind_kph;
        wind_degrees.innerHTML = response.current.wind_degree;
        sunrise.innerHTML = response.current.dewpoint_c; // Assuming dewpoint as a placeholder for sunrise
        sunset.innerHTML = response.current.dewpoint_f;
        })
        .catch(err => console.error(err));
    }

    // Ensure the 'sub' ID matches the HTML button ID
    const sub = document.getElementById('sub'); 

    if (sub) { // Check if the button exists
        sub.addEventListener('click', (e) => {
            e.preventDefault();
            getweather(city.value);
        });

        getweather('Mumbai');
    } else {
        console.error("Button with id 'sub' not found!");
    }
});
