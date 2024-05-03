const form = document.getElementById('cityForm')
const citySelect = document.getElementById('citySelect')
const btn = document.getElementById('btn')
const loader = document.querySelector('#loader')


form.addEventListener('submit', event => {
  event.preventDefault()
  
  // данные забираются у select через value
  const selectedValue = citySelect.value

  const array = selectedValue.split(', ');
  const latitude = array[0]
  const longitude = array[1]
  const city = array[2]


    async function uploadWeather() {
      
        const rez = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
        const dara = await rez.json()
        
        const temp = "Температура: "+dara.current_weather.temperature
        const speed = "Скорость ветра: "+dara.current_weather.windspeed
        const code = dara.current_weather.weathercode
        const tempUnit = dara.current_weather_units.temperature
        const speedUnit = dara.current_weather_units.windspeed
        const codeUnit = dara.current_weather_units.weathercode
        

        const formtemp = document.createElement('p')
        formtemp.textContent = temp + tempUnit

        const formSpeed = document.createElement('p')
        formSpeed.textContent = speed + speedUnit

        const formCode = document.createElement('p')

        function weatherCode(code) {
            let x;

            switch (code) {
                case 0:
                    x = "Clear sky";
                    break;
                case 1:
                case 2:
                case 3:
                    x = "Mainly clear, partly cloudy, and overcast";
                    break;
                case 45:
                case 48:
                    x = "Fog and depositing rime fog";
                    break;
                case 51:
                case 53:
                case 55:
                    x = "Drizzle: Light, moderate, and dense intensity";
                    break;
                case 56:
                case 57:
                    x = "Freezing Drizzle: Light and dense intensity";
                    break;
                case 61:
                case 63:
                case 65:
                    x = "Rain: Slight, moderate, and heavy intensity";
                    break;
                case 66:
                case 67:
                    x = "Freezing Rain: Light and heavy intensity";
                    break;
                case 71:
                case 73:
                case 75:
                    x = "Snow fall: Slight, moderate, and heavy intensity";
                    break;
                case 77:
                    x = "Snow grains";
                    break;
                case 80:
                case 81:
                case 82:
                    x = "Rain showers: Slight, moderate, and violent";
                    break;
                case 85:
                case 86:
                    x = "Snow showers: Slight and heavy";
                    break;
                case 95:
                    x = "Thunderstorm: Slight or moderate";
                    break;
                case 96:
                case 99:
                    x = "Thunderstorm with slight and heavy hail";
                    break;
                default:
                    x = "Unknown weather code";
            }

            return x;
        }

        formCode.textContent = "Краткое описание: "+ weatherCode(code)
    

    const card = document.createElement("div")
    card.classList.add('formCard')

    const formCity = document.createElement('h3')
    formCity.textContent = city

    // const formDesc = document.createElement('p')
    // formDesc.textContent = desc
    // console.log(bild)
    // const formBild = document.createElement('img')
    // formBild.src = bild
    // formBild.classList.add('bild')
    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }

    loader.style.display = 'block'
    setTimeout(() => {
        // loader.style.display = 'none'


        card.append( formCity, formtemp, formSpeed, formCode)
        form.append(citySelect,btn, card)
        
    }, 1500)
}
uploadWeather() 
})

