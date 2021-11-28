import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './style.css'

export default function CardMinMax() {
    return (
        <CardContent className='card_container_min_max'>
            <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                ICONO
            </Typography>
            <CardContent className='card_min_max'>
                <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                    Min.
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    6ºC
                </Typography>
            </CardContent>
            <CardContent className='card_min_max'>
                <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                    Máx.
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    6ºC
                </Typography>
            </CardContent>
        </CardContent>
    )
}