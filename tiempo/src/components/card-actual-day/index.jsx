import './style.css';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { GradosContext } from '../../context';


export default function CardActualDay(props){

    const [grados] = useContext(GradosContext);

    return(
        <div className='container_flex'>
        <CardContent className='card_container' sx={{width:'160px', height:'216px', borderRadius:'22px', bgcolor:'background.paper'}}>
              <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
              <img src={props.datos.icono2} alt="icono" />
              </Typography>
              <Typography sx={{ fontSize: 12, marginLeft:'90px' }} color="text.primary" gutterBottom>
                {grados === 'metric' ? 'ºC' : 'ºF'}
              </Typography>
              <Typography sx={{ fontSize: 72, lineHeight:'0.7' }} color="text.primary" gutterBottom>
                {props.datos.temp}
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
              {props.datos.country +  ','+props.datos.city}
              </Typography>
        </CardContent>
        </div>
    )
}
