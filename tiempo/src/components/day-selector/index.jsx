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

export default function DaySelector() {


    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    // Reemplazar con las props del api
    const data = {
        hora: '00:00',
        luna: 'luna',
        grados: '6ºC'
    }

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
                        <CardHour data={data}></CardHour>
                        <CardHour data={data}></CardHour>
                        <CardHour data={data}></CardHour>
                        <CardHour data={data}></CardHour>
                        <CardHour data={data}></CardHour>
                        <CardHour data={data}></CardHour>
                        <CardHour data={data}></CardHour>
                        <CardHour data={data}></CardHour>
                        <CardHour data={data}></CardHour>

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