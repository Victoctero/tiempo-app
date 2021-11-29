import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import pinAndSearch27 from '../../icons/pinAndSearch27.svg'
import { Popover } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
export default function GeoButton() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
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
            <TextField id="standard-basic" label="Search" variant="outlined" size='small' />
          </Popover>
        </div>
      )}
    </PopupState>
  );
}