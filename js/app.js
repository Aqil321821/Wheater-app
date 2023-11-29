






const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('icon img');



const updateUI = (data) => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;
    const { cityDets, weather } = data;

    //   console.log(cityDets)
    //   console.log(weather)
    // console.log(cityDets.EnglishName);
    //  set innerHtML

    details.innerHTML = `           <h4 class="my-3">${cityDets.EnglishName} </h4>
                                    <div class="my-3">${weather.WeatherText}</div>
                                    <div class="display-4 my-4">
                                        <span>${weather.Temperature.Metric.Value}</span>
                                        <span>&deg;C</span>
                                    </div>                              `;


    //   console.log(weather);
    // const iconSrc=`img/icons/${weather.WeatherIcon}.svg`;
    // icon.setAttribute('src',iconSrc);





    let timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc);








    //remove card by default
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

}





const updateCity = async (city) => {


    // console.log(city);
    const cityDets = await getCity(city);
    const weather = await getwheather(cityDets.Key);
    // console.log(weather);
    return {
        cityDets,
        weather
    }



}


cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();


    updateCity(city)
        .then(data => updateUI(data))
        .catch(data => console.log(data))

});