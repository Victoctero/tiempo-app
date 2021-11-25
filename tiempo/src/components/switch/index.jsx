import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import { useContext } from 'react';
import { GradosContext } from '../../context';

export default function SwitchLabels(){

    const[grados, setGrados] = useContext(GradosContext);

    const handleChange = ()=>{
       grados === 'celsius' ? setGrados('farenheit') : setGrados('celsius')
       console.log(grados);
    }

    return(

        <FormGroup>
            <FormControlLabel  onChange={handleChange} control={<Switch defaultChecked />} label="" />
        </FormGroup>
    )
}