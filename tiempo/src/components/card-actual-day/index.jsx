import './style.css';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardActualDay(){
    return(
        <div className='container_flex'>
        <CardContent className='card_container' sx={{width:'160px', height:'216px', borderRadius:'22px', bgcolor:'background.paper'}}>
              <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                ICONO
              </Typography>
              <Typography sx={{ fontSize: 12, marginLeft:'90px' }} color="text.primary" gutterBottom>
                ºC
              </Typography>
              <Typography sx={{ fontSize: 72, lineHeight:'0.7' }} color="text.primary" gutterBottom>
                18
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
                España, Madrid
              </Typography>
        </CardContent>
        </div>
    )
}
