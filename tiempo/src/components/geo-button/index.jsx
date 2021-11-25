import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import './style.css'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';




export default function GeoButton() {

    const [clase, updateClase] = useState('navigation__button')

    const handlerClick = () => {
        clase === 'navigation__button' ? updateClase('') : updateClase('navigation__button')
    }

    return (
        <React.Fragment>
            <div className="button_container">
                <IconButton onClick={handlerClick} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <TextField className={clase} id="standard-basic" label="Introduce una localizacion" variant="standard" />
            </div>
            <div className="navigate_container">


                <Fab size='small' className={clase} variant="extended">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
            </div>
        </React.Fragment>


    )
}