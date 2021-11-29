import './style.css'
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardHour(props){
        return (
        //   <Card sx={{ minWidth: 65, maxWidth: 65, height: 150, bgcolor: 'background.paper' }}>
            <CardContent >
              <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                {props.hora}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                icono
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                {props.temp}
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