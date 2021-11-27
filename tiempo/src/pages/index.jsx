import DaySelector from '../components/day-selector';
import fondo from '../images/fondo.jpg';
import CardActualDay from '../components/card-actual-day';
import SwitchNavigationContainer from '../components/switch-navigatio-container';
import ContainerCardsExtraInfo from '../components/container-cards-extra-info';

const page_container = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover' 
  };

export default function Page() {
    return(
        <div style={page_container}>
            <SwitchNavigationContainer></SwitchNavigationContainer>
            <CardActualDay></CardActualDay>
            <DaySelector></DaySelector>
            <ContainerCardsExtraInfo></ContainerCardsExtraInfo>
            
        </div>   
    )
}