import DaySelector from '../components/day-selector';
import fondo from '../images/fondo.jpg';
import CardActualDay from '../components/card-actual-day';
import SwitchNavigationContainer from '../components/switch-navigatio-container';
import ContainerCardsExtraInfo from '../components/container-cards-extra-info';
import {apiKey} from '../apiKey.js'
import { useContext, useEffect, useState } from 'react';
import { GradosContext } from '../context';


const page_container = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover', 
    overflow: 'hidden',
  };

export default function Page() {
    const [grados] = useContext(GradosContext);
    const [objActualDay, setObjActualDay] = useState({})
async function retrieveCoor(city){      //devuelve un objeto con latitud y longitud
    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const d = await r.json();
    const data = {
        lat: d.coord.lat,
        lon: d.coord.lon
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
    const coord = await retrieveCoor('madrid');
    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=${grados===undefined? 'imperial':grados}&exclude=minutely,alerts&appid=${apiKey}`);
    const d = await r.json();

    
    
    let objActualDay = {
        icono : d?.current.weather[0].icon,
        temp : d?.current.temp,
        lugar : d?.timezone,
        rayosUVI : d?.current.uvi,
        viento : d?.current.wind_speed,
        lluvia : d?.current.rain?.['1h'] === undefined ? '0.0' : d?.current.rain['1h'] ,
        humedad : d?.current.humidity,
        amanecer : unixToActualTime(d?.daily[0]?.sunrise),
        anochecer: unixToActualTime(d?.daily[0].sunset),
        hourTemp0: d?.hourly[0].temp,
        hourTemp1: d?.hourly[1].temp,
        hourTemp2: d?.hourly[2].temp,
        hourTemp3: d?.hourly[3].temp,
        hourTemp4: d?.hourly[4].temp,
        hourTemp5: d?.hourly[5].temp,
        hourTemp6: d?.hourly[6].temp,
        hourTemp7: d?.hourly[7].temp,
        hourTemp8: d?.hourly[8].temp,
        hourTemp9: d?.hourly[9].temp,
        hourTemp10: d?.hourly[10].temp,
        hourTemp11: d?.hourly[11].temp,
        hourTemp12: d?.hourly[12].temp,
        hourTemp13: d?.hourly[13].temp,
        hourTemp14: d?.hourly[14].temp,
        hourTemp15: d?.hourly[15].temp,
        hourTemp16: d?.hourly[16].temp,
        hourTemp17: d?.hourly[17].temp,
        hourTemp18: d?.hourly[18].temp,
        hourTemp19: d?.hourly[19].temp,
        hourTemp20: d?.hourly[20].temp,
        hourTemp21: d?.hourly[21].temp,
        hourTemp22: d?.hourly[22].temp,
        hourTemp23: d?.hourly[23].temp,


    }

    
    
    return objActualDay;

}

useEffect (()=>{
    async function getData() {
        const a = await retrieveCardActualDay(retrieveCoor('Madrid')); //
        setObjActualDay(a);
    }
    getData();
}, [grados])

    return(
        <div style={page_container}>
            <SwitchNavigationContainer></SwitchNavigationContainer>
            <CardActualDay datos={objActualDay}></CardActualDay>
            <DaySelector datos = {objActualDay}></DaySelector>
            <ContainerCardsExtraInfo datos = {objActualDay}></ContainerCardsExtraInfo>
            
        </div>   
    )
}