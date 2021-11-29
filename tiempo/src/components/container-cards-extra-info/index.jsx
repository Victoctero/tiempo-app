import './style.css'
import CardExtraInfo from '../card-extra-info'

export default function ContainerCardsExtraInfo(props){

    return(
        <div className="cards__container">
            <CardExtraInfo info = 'UV' datos = {props.datos.rayosUVI}></CardExtraInfo>
            <CardExtraInfo info = 'VIENTO' datos = {props.datos.viento}></CardExtraInfo>
            <CardExtraInfo info = 'LLUVIA' datos = {props.datos.lluvia}></CardExtraInfo>
            <CardExtraInfo info = 'HUMEDAD' datos = {props.datos.humedad}></CardExtraInfo>
            <CardExtraInfo info = 'AMANECER' datos = {props.datos.amanecer}></CardExtraInfo>
            <CardExtraInfo info = 'ANOCHECER' datos = {props.datos.anochecer}></CardExtraInfo>
        </div>
    )
}