import DaySelector from '../components/day-selector';
import backgroundRainy from '../images/backgroundRainy.jpg';
import backgroundSunny from '../images/backgroundSunny.jpg';
import backgroundCloudy from '../images/backgroundCloudy.jpg';
import CardActualDay from '../components/card-actual-day';
import SwitchNavigationContainer from '../components/switch-navigatio-container';
import ContainerCardsExtraInfo from '../components/container-cards-extra-info';
import {apiKey} from '../apiKey.js'
import { useContext, useEffect, useState } from 'react';
import { GradosContext } from '../context';
import { InputContext } from '../context/context-input';
import ClearskySun02 from '../icons/ClearskySun02.svg'   //1
import FewCloudsSun03 from '../icons/FewCloudsSun03.svg' //2
import Cloudy01 from '../icons/Cloudy01.svg' //3
import FewcloudsMoon06 from '../icons/FewcloudsMoon06.svg' //4
import Rainy11 from '../icons/Rainy11.svg' //5
import FewcloudsRainSun25 from '../icons/FewcloudsRainSun25.svg' //6
import FewCloudsStormSun07 from '../icons/FewCloudsStormSun07.svg' //7
import Snow21 from '../icons/Snow21.svg' // 8
import Windy12 from '../icons/Windy12.svg'  //9
import ImagenFondo from '../components/fondo/fondo';
import MapImage from '../components/mapa';

export default function Page() {
    const [grados] = useContext(GradosContext);
    const [text] = useContext(InputContext);
    const [objActualDay, setObjActualDay] = useState({})
    let fondo;
    const fondos = [backgroundSunny, backgroundCloudy, backgroundRainy];

    if (objActualDay?.icono === 'clear sky'){
        fondo = fondos[0];
    } else if (objActualDay?.icono === 'few clouds' || objActualDay?.icono === 'scattered clouds' || objActualDay?.icono === 'broken clouds') {
        fondo = fondos[1];
    } else {
        fondo = fondos[2];
    }
    console.log(fondo);
    const page_container = {
            width: '100%',
            height: '100%',
            // backgroundImage: `url(${fondo})`,
            backgroundSize: 'cover', 
            overflow: 'hidden',
        };


async function retrieveCoor(city){      //devuelve un objeto con latitud y longitud
    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const d = await r.json();
    const data = {
        lat: d.coord.lat,
        lon: d.coord.lon,
        city: d.name,
        country: d.sys.country
    }
    return data
}
function unixToActualTime(time){
        let date = new Date(time * 1000)
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let formatedTime = hours + ':' + minutes;
        return formatedTime;
    }

async function retrieveCardActualDay() {  //devuelve un objeto con temp y lugar para cardActualDay
    const coord = await retrieveCoor(text);
    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=${grados}&exclude=minutely,alerts&appid=${apiKey}`);
    const d = await r.json();
    
    
    function drawIcono(code){
        let icono;
        switch (code) {
        case 'clear sky': icono =  ClearskySun02; break;
        case 'few clouds': icono =  FewCloudsSun03; break;
        case 'scattered clouds': icono =  Cloudy01; break;
        case 'broken clouds': icono =  FewcloudsMoon06; break;
        case 'shower rain': icono=  Rainy11; break;
        case 'rain': icono =  FewcloudsRainSun25; break;
        case 'thunderstorm': icono =  FewCloudsStormSun07; break;
        case 'snow': icono =  Snow21; break;
        case 'mist': icono =  Windy12; break;
        default: icono = Rainy11; break;
    } 
    return icono;
}
let iconoNew = drawIcono(d?.current.weather[0].description);


    
    

    let objActualDay = {
        icono2 : iconoNew,
        icono : d?.current.weather[0].description,
        temp : Math.floor(d?.current.temp),
        city : coord.city,
        country : coord.country,
        rayosUVI : d?.current.uvi,
        viento : d?.current.wind_speed,
        lluvia : d?.current.rain?.['1h'] === undefined ? '0.0' : d?.current.rain['1h'] ,
        humedad : d?.current.humidity,
        minTemp1 : Math.floor(d?.daily[1].temp.min),
        minTemp2 : Math.floor(d?.daily[2].temp.min),
        minTemp3 : Math.floor(d?.daily[3].temp.min),
        minTemp4 : Math.floor(d?.daily[4].temp.min),
        minTemp5 : Math.floor(d?.daily[5].temp.min),
        minTemp6 : Math.floor(d?.daily[6].temp.min),
        maxTemp1 : Math.floor(d?.daily[1].temp.max),
        maxTemp2 : Math.floor(d?.daily[2].temp.max),
        maxTemp3 : Math.floor(d?.daily[3].temp.max),
        maxTemp4 : Math.floor(d?.daily[4].temp.max),
        maxTemp5 : Math.floor(d?.daily[5].temp.max),
        maxTemp6 : Math.floor(d?.daily[6].temp.max),
        iconoDay1 : drawIcono(d?.daily[1].weather[0].description),
        iconoDay2 : drawIcono(d?.daily[2].weather[0].description),
        iconoDay3 : drawIcono(d?.daily[3].weather[0].description),
        iconoDay4 : drawIcono(d?.daily[4].weather[0].description),
        iconoDay5 : drawIcono(d?.daily[5].weather[0].description),
        iconoDay6 : drawIcono(d?.daily[6].weather[0].description),
        
        amanecer : unixToActualTime(d?.daily[0]?.sunrise),
        anochecer: unixToActualTime(d?.daily[0].sunset),
        hourTemp0: Math.floor(d?.hourly[0].temp),
        hourTemp1: Math.floor(d?.hourly[1].temp),
        hourTemp2: Math.floor(d?.hourly[2].temp),
        hourTemp3: Math.floor(d?.hourly[3].temp),
        hourTemp4: Math.floor(d?.hourly[4].temp),
        hourTemp5: Math.floor(d?.hourly[5].temp),
        hourTemp6: Math.floor(d?.hourly[6].temp),
        hourTemp7: Math.floor(d?.hourly[7].temp),
        hourTemp8: Math.floor(d?.hourly[8].temp),
        hourTemp9: Math.floor(d?.hourly[9].temp),
        hourTemp10: Math.floor(d?.hourly[10].temp),
        hourTemp11: Math.floor(d?.hourly[11].temp),
        hourTemp12: Math.floor(d?.hourly[12].temp),
        hourTemp13: Math.floor(d?.hourly[13].temp),
        hourTemp14: Math.floor(d?.hourly[14].temp),
        hourTemp15: Math.floor(d?.hourly[15].temp),
        hourTemp16: Math.floor(d?.hourly[16].temp),
        hourTemp17: Math.floor(d?.hourly[17].temp),
        hourTemp18: Math.floor(d?.hourly[18].temp),
        hourTemp19: Math.floor(d?.hourly[19].temp),
        hourTemp20: Math.floor(d?.hourly[20].temp),
        hourTemp21: Math.floor(d?.hourly[21].temp),
        hourTemp22: Math.floor(d?.hourly[22].temp),
        hourTemp23: Math.floor(d?.hourly[23].temp),
        hourIcon0: drawIcono(d?.hourly[0].weather[0].description),
        hourIcon1: drawIcono(d?.hourly[1].weather[0].description),
        hourIcon2: drawIcono(d?.hourly[2].weather[0].description),
        hourIcon3: drawIcono(d?.hourly[3].weather[0].description),
        hourIcon4: drawIcono(d?.hourly[4].weather[0].description),
        hourIcon5: drawIcono(d?.hourly[5].weather[0].description),
        hourIcon6: drawIcono(d?.hourly[6].weather[0].description),
        hourIcon7: drawIcono(d?.hourly[7].weather[0].description),
        hourIcon8: drawIcono(d?.hourly[8].weather[0].description),
        hourIcon9: drawIcono(d?.hourly[9].weather[0].description),
        hourIcon10: drawIcono(d?.hourly[10].weather[0].description),
        hourIcon11: drawIcono(d?.hourly[11].weather[0].description),
        hourIcon12: drawIcono(d?.hourly[12].weather[0].description),
        hourIcon13: drawIcono(d?.hourly[13].weather[0].description),
        hourIcon14: drawIcono(d?.hourly[14].weather[0].description),
        hourIcon15: drawIcono(d?.hourly[15].weather[0].description),
        hourIcon16: drawIcono(d?.hourly[16].weather[0].description),
        hourIcon17: drawIcono(d?.hourly[17].weather[0].description),
        hourIcon18: drawIcono(d?.hourly[18].weather[0].description),
        hourIcon19: drawIcono(d?.hourly[19].weather[0].description),
        hourIcon20: drawIcono(d?.hourly[20].weather[0].description),
        hourIcon21: drawIcono(d?.hourly[21].weather[0].description),
        hourIcon22: drawIcono(d?.hourly[22].weather[0].description),
        hourIcon23: drawIcono(d?.hourly[23].weather[0].description),


    }

    
    
    return objActualDay;

}

useEffect (()=>{
    async function getData() {
        const a = await retrieveCardActualDay(retrieveCoor('Madrid')); //
        setObjActualDay(a);
    }
    getData();
    
    
}, [grados, text])

    return(
        <div style={page_container}>
            <ImagenFondo datos={fondo}></ImagenFondo>
            <div className='relative'>
            <SwitchNavigationContainer></SwitchNavigationContainer>
            <CardActualDay datos={objActualDay}></CardActualDay>
            <DaySelector datos = {objActualDay}></DaySelector>
            <ContainerCardsExtraInfo datos = {objActualDay}></ContainerCardsExtraInfo>
            <MapImage></MapImage>
            </div>

        </div>   
    )
}