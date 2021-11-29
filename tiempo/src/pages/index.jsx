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

async function retrieveCardActualDay() {  //devuelve un objeto con temp y lugar para cardActualDay
    const coord = await retrieveCoor('madrid');
    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=${grados===undefined? 'imperial':grados}&exclude=minutely,hourly,alerts&appid=${apiKey}`);
    const d = await r.json();

    function unixToActualTime(time){
        let date = new Date(time * 1000)
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let formatedTime = hours + ':' + minutes;
        return formatedTime;
    }
    
    const objActualDay = {
        icono : d?.current.weather[0].icon,

        temp : d?.current.temp,
        lugar : d?.timezone,
        rayosUVI : d?.current.uvi,
        viento : d?.current.wind_speed,
        lluvia : d?.current.rain?.['1h'] === undefined ? '0.0' : d?.current.rain['1h'] ,
        humedad : d?.current.humidity,
        amanecer : unixToActualTime(d?.daily[0]?.sunrise),
        anochecer: unixToActualTime(d?.daily[0].sunset),


    }
    console.log(objActualDay.amanecer)
    
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
            <DaySelector></DaySelector>
            <ContainerCardsExtraInfo datos = {objActualDay}></ContainerCardsExtraInfo>
            
        </div>   
    )
}