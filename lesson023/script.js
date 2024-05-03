const mainForm = document.querySelector('#city')
const loader = document.querySelector('#loader')

async function loadWeather() {
    
    const res = await fetch('https://get.geojs.io/v1/ip/geo.json')
    const data = await res.json()
    const { region, latitude, longitude } = data
    
    
    async function uploadWeather() {
        const rez = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
        const dara = await rez.json()
        
        const header = document.createElement('h1')
        header.textContent = "Погода дома"
        const temp = dara.current_weather.temperature
        const speed = dara.current_weather.windspeed
        const code = dara.current_weather.weathercode
        const tempUnit = dara.current_weather_units.temperature
        const speedUnit = dara.current_weather_units.windspeed
        const codeUnit = dara.current_weather_units.weathercode
        const formCity = document.createElement('p')
        formCity.textContent = "Регион: " + region
        
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
                                    
                                    formCode.textContent = weatherCode(code)
                                    
                                    
                                    
                                    mainForm.append(header)
                                    loader.style.display = 'block'
                                    setTimeout(() => {
                                        
                                    mainForm.append(header, formCity, formtemp, formSpeed, formCode)
                                    loader.style.display = 'none'
                                }, 1500)
                                    // mainForm.style.background = '#0de19e';
                                    
                                }
                                uploadWeather()
                                
                            }
                            loadWeather()
                            
                            
                            // напишите функцию расшифровщик для кода погоды
// выведите данные на странице, используйте current_weather_units
// используйте лоадер из классной работы или любой другой
// поставьте setTimeout на 1.5 сек, чтобы лоадер подольше крутился
// задеплойте на git pages
// скиньте ссылку на код и на деплой

// ! до конца занятия
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
// function wether(){
// fetch('https://get.geojs.io/v1/ip/geo.json')
// .then(res=>res.json())
// .then(data =>{
// console.log(data)
//     const latitude = data.latitude

//     const longitude =  data.longitude

//     const city = data.city




// })
// }
// wether()


