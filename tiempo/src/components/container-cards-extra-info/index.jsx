import './style.css'
import ClearskySun02 from '../../icons/ClearskySun02.svg'
import CardExtraInfo from '../card-extra-info'
import Windy12 from '../../icons/Windy12.svg'
import Rainy11   from '../../icons/Rainy11.svg'
import Humidity10   from '../../icons/Humidity10.svg'
import Sunrise23   from '../../icons/Sunrise23.svg'
import Sunsent24   from '../../icons/Sunsent24.svg'
export default function ContainerCardsExtraInfo(props){
    return(
        <div className="cards__container">
            <CardExtraInfo info = 'UV' medida='' datos = {props.datos.rayosUVI} icon = {ClearskySun02}></CardExtraInfo>
            <CardExtraInfo info = 'VIENTO' medida='Km/h' datos = {props.datos.viento} icon={Windy12}></CardExtraInfo>
            <CardExtraInfo info = 'LLUVIA' medida='mm' datos = {props.datos.lluvia} icon={Rainy11}></CardExtraInfo>
            <CardExtraInfo info = 'HUMEDAD' medida='%' datos = {props.datos.humedad} icon={Humidity10}></CardExtraInfo>
            <CardExtraInfo  info = 'AMANECER' medida='H' datos = {props.datos.amanecer} icon={Sunrise23}></CardExtraInfo>
            <CardExtraInfo info = 'ANOCHECER' medida='H' datos = {props.datos.anochecer} icon={Sunsent24}></CardExtraInfo>
        </div>
    )
}