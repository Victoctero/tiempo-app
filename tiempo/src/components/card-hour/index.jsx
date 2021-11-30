import './style.css'
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { GradosContext } from '../../context';

export default function CardHour(props){
        const [grados] = useContext(GradosContext)
        return (
        //   <Card sx={{ minWidth: 65, maxWidth: 65, height: 150, bgcolor: 'background.paper' }}>
            <CardContent >
              <Typography sx={{ fontSize: 16 , textAlign:'center' }} color="text.primary" gutterBottom>
                {props.hora}
              </Typography>
              <Typography sx={{ fontSize: 14, textAlign:'center' }} color="text.primary" gutterBottom>
              <img src={props.icono} alt="icono" />
              </Typography>
              <Typography sx={{ fontSize: 14, textAlign:'center' }} color="text.primary" gutterBottom>
                {`${props.temp} ${grados === 'metric' ? 'ºC' : 'ºF'}`}
              </Typography>
            </CardContent>
        //   </Card>
        );
      }
















//     return  <div className=" hour__container">
//                 <p>{props.data.hora}</p>
//                 <p>luna</p>
//                 <p>{props.data.grados}</p>
            
//              </div>

// }