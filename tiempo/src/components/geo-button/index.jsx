import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import TextField from '@mui/material/TextField';
import pinAndSearch27 from '../../icons/pinAndSearch27.svg'

export default function GeoButton() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu" >
      {(popupState) => (
        <React.Fragment>
          <Button variant="text" {...bindTrigger(popupState)}>
          <img src={pinAndSearch27} alt="geolocalizacion"/>
          </Button>
          <Menu {...bindMenu(popupState)} anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }} /*sx={{ width: '200px', height:'64px'}}*/ >
            <MenuItem sx={{fontSize:'12px'}} disableGutters><TextField id="standard-basic" label="Search" variant="outlined" size='small'/></MenuItem>
            <MenuItem sx={{fontSize:'12px'}} disableGutters onClick={popupState.close}>Ubicación actual</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}