import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import TextField from '@mui/material/TextField';


export default function GeoButton() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu" >
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            I
          </Button>
          <Menu {...bindMenu(popupState)} anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }} >
            <MenuItem><TextField id="standard-basic" label="Introduce una localizacion" variant="standard" /></MenuItem>
            <MenuItem onClick={popupState.close}>Ubicación actual</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}