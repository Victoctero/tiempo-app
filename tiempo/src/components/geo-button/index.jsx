import { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import pinAndSearch27 from '../../icons/pinAndSearch27.svg'
import { Popover } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { InputContext } from '../../context/context-input';



export default function GeoButton() {

  const [text, setText] = useContext(InputContext);
  let close;

  const handlerEnter = (e) => {
       e.preventDefault();
      setText(e.target.city.value);
      close = false;
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover" >
      {(popupState) => (
        <div>
          <Button variant="text" {...bindTrigger(popupState)}>
            <img src={pinAndSearch27} alt="geolocalizacion" />
          </Button>
          <Popover sx={{width:'200px'}}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left ',
            }}
          >
            <Button variant="text" {...bindTrigger(popupState)}>
              Geolocalización
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