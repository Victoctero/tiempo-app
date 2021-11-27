import './style.css';
import GeoButton from '../geo-button';
import SwitchLabels from '../switch-labels'
import { Box } from '@mui/system';


export default function SwitchNavigationContainer() {
    return(
        <Box sx={{ width: '100%', bgcolor: 'transparent' }} className='switchNavigationContainer' >
            <GeoButton></GeoButton>
            <SwitchLabels></SwitchLabels>
        </Box>
    )
}