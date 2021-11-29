import './style.css'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
export default function CardExtraInfo(props) {
    return (
        <CardContent className='card__container' sx={{ width: '136px', height: '112px', borderRadius: '16px', bgcolor: 'background.paper'}}> {/*acá iba una opacidad*/}
            <Box className='info_card_container' sx={{marginTop:'40px', marginBottom:'-10px'}}>
                <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
                    {props.info}
                </Typography>
                
                <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                <img src={props.icon} alt="geolocalizacion" />
                </Typography>
            </Box>
            <Typography sx={{ fontSize: 7, marginLeft: '70px', marginBottom:'-10px' }} color="text.primary" gutterBottom>
                    {props.medida}
            </Typography>
            <Typography sx={{ fontSize: 43 }} color="text.primary" gutterBottom>
                {props.datos}
            </Typography>
        </CardContent>
    )
}
