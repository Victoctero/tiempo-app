import DaySelector from '../components/day-selector';
import fondo from '../images/fondo.jpg';
import CardActualDay from '../components/card-actual-day';
import SwitchNavigationContainer from '../components/switch-navigatio-container';

const page_container = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover', 
    overflow: 'hidden',
  };

export default function Page() {
    return(
        <div style={page_container}>
            <SwitchNavigationContainer></SwitchNavigationContainer>
            <CardActualDay></CardActualDay>
            <DaySelector></DaySelector>
        </div>   
    )
}