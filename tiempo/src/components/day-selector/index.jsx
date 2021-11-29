import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CardHour from '../card-hour';
import CardMinMax from '../card-min-max';
import './style.css';


const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function getActualDay(day) {
    const date = new Date();
    const actualDay = date.getDay();
    let drawDay = actualDay + day;
    if (drawDay >= weekDays.length) {
        drawDay = drawDay - 7;
    }
    return weekDays[drawDay];
}


function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function DaySelector(props) {


    const theme = useTheme();
    const [value, setValue] = React.useState(0);

  
   

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const handleChangeIndex = (index) => {
    //     setValue(index);
    // };

    return (
        <Box sx={{ width: '100%', marginTop:'81px' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="transparent"
                textColor="secondary"
                variant="scrollable"
                aria-label="full width tabs example"
            >

                <Tab label="Hoy" {...a11yProps(0)} sx={{ color: 'text.primary' }} />
                <Tab label="Mañana" {...a11yProps(1)} sx={{ color: 'text.primary' }} />
                <Tab label={getActualDay(2)} {...a11yProps(2)} sx={{ color: 'text.primary' }} />
                <Tab label={getActualDay(3)} {...a11yProps(3)} sx={{ color: 'text.primary' }} />
                <Tab label={getActualDay(4)} {...a11yProps(4)} sx={{ color: 'text.primary' }} />
                <Tab label={getActualDay(5)} {...a11yProps(5)} sx={{ color: 'text.primary' }} />
                <Tab label={getActualDay(6)} {...a11yProps(6)} sx={{ color: 'text.primary' }} />

            </Tabs>
            <Box sx={{ bgcolor: 'background.paper' }}>
                <TabPanel value={value} index={0} dir={theme.direction} >
                    <div className="card__hour--container" >
                        <CardHour temp = {props.datos.hourTemp0} hora = '00:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp1} hora = '01:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp2} hora = '02:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp3} hora = '03:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp4} hora = '04:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp5} hora = '05:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp6} hora = '06:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp7} hora = '07:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp8} hora = '08:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp9} hora = '09:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp10} hora = '10:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp11} hora = '11:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp12} hora = '12:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp13} hora = '13:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp14} hora = '14:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp15} hora = '15:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp16} hora = '16:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp17} hora = '17:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp18} hora = '18:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp19} hora = '19:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp20} hora = '20:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp21} hora = '21:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp22} hora = '22:00'></CardHour>
                        <CardHour temp = {props.datos.hourTemp23} hora = '23:00'></CardHour>
                        
                        

                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <CardMinMax></CardMinMax>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <CardMinMax></CardMinMax>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <CardMinMax></CardMinMax>
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <CardMinMax></CardMinMax>
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                    <CardMinMax></CardMinMax>
                </TabPanel>
                <TabPanel value={value} index={6} dir={theme.direction}>
                    <CardMinMax></CardMinMax>
                </TabPanel>
            </Box>
        </Box>
    );
}