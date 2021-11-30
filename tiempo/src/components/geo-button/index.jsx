import { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import pinAndSearch27 from '../../icons/pinAndSearch27.svg'
import gpsIcon26 from '../../icons/gpsIcon26.svg'
import { Popover } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { InputContext } from '../../context/context-input';




export default function GeoButton() {

  const [text,setText] = useContext(InputContext);
  
 
  const geo = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      async function getName(){      
        const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f5c32f671f74c888dabe4ad723922e92`);
        const d = await r.json();
        setText(d.name)
      }
      getName();
    })

  } 
  

  const handlerEnter = (e) => {
       e.preventDefault();
      setText(e.target.city.value);
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover" >
      {(popupState) => (
        <div>
          <Button variant="text" {...bindTrigger(popupState)} >
            <img src={pinAndSearch27} alt="geolocalizacion" />
          </Button>
          <Popover sx={{width:'200px'}}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            // transformOrigin={{
            //   vertical: 'top',
            //   horizontal: 'left ',
            // }}
          >
            <Button variant="text" {...bindTrigger(popupState)} onClick={geo}>
            <img src={gpsIcon26} alt="geolocalizacion" />
           </Button>
           <form onSubmit={handlerEnter}>
            <TextField id="standard-basic" name='city' label="Search" variant="outlined" size='small'/>
            </form>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}