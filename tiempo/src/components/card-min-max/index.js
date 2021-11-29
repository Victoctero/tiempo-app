import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './style.css'
import { Box } from '@mui/system';
import { useContext } from 'react';
import { GradosContext } from '../../context';

export default function CardMinMax(props) {
    const [grados] = useContext(GradosContext);
    return (
        <CardContent className='card_container_min_max'>
            <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                <img src={props.icono} alt="icono" />
            </Typography>
            <Box className='card_min_max'>
                <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                    Min.
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    {props.min}{grados === 'metric' ? 'ºC' : 'ºF'}
                </Typography>
            </Box>
            <Box className='card_min_max'>
                <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                    Máx.
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    {props.max}{grados === 'metric' ? 'ºC' : 'ºF'}
                </Typography>
            </Box>
        </CardContent>
    )
}