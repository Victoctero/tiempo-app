import { useContext } from 'react'
import MapaBarcelona from '../../images/MapaBarcelona.jpg'
import MapaBilbao from '../../images/MapaBilbao.jpg'
import MapaBurgos from '../../images/MapaBurgos.jpg'
import MapaLondres from '../../images/MapaLondres.jpg'
import MapaTalentGarden from '../../images/MapaTalentGarden.jpg'
import { InputContext } from '../../context/context-input'
import './style.css'

export default function MapImage() {

    const [text] = useContext(InputContext);
    let url;

    switch (text?.toLowerCase()) {
        case 'barcelona' : url = MapaBarcelona; break;
        case 'bilbao' : url = MapaBilbao; break;
        case 'burgos' : url = MapaBurgos; break;
        case 'Londres' : url = MapaLondres; break;
        default : url = MapaTalentGarden; break;
    }

    return(
        <img src={url} alt='mapa' className='mapa'/>
    )
}