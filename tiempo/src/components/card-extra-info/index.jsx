import './style.css'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardExtraInfo() {

    return (
        <CardContent className='card__container' sx={{ width: '112px', height: '136px', borderRadius: '16px', bgcolor: 'background.paper', opacity: '0.4' }}>
            <CardContent className='info_card_container'>
                <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                    INFO
                </Typography>
                <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                    ICONO
                </Typography>
            </CardContent>
            <Typography sx={{ fontSize: 46 }} color="text.primary" gutterBottom>
                0.0
            </Typography>
        </CardContent>
    )
}


{/* <div className='card__container'>
    <div className="info_card_container">
        <p className="info">Info</p>
        <p>Icono</p>
    </div>
    <p className="dato">0.0</p>


</div> */}