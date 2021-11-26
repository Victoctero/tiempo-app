import './style.css'

export default function CardHour(props){

    return  <div className=" hour__container">
                <p>{props.data.hora}</p>
                <p>luna</p>
                <p>{props.data.grados}</p>
            
             </div>

}