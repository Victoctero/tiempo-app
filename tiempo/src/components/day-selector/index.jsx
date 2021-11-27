import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CardHour from '../card-hour';
import './style.css';

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
        <Box sx={{ width: '100%', bgcolor: 'transparent' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="transparent"
                textColor="secondary"
                variant="scrollable"
                aria-label="full width tabs example"
            >
                <Tab label="Today" {...a11yProps(0)} />
                <Tab label="Tomorrow" {...a11yProps(1)} />
                <Tab label="Jueves" {...a11yProps(2)} />
                <Tab label="Viernes" {...a11yProps(3)} />
                <Tab label="Sabado" {...a11yProps(4)} />
                <Tab label="Domingo" {...a11yProps(5)} />
                <Tab label="Lunes" {...a11yProps(6)} />
            </Tabs>
           
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
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel> 
                 <TabPanel value={value} index={3} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={6} dir={theme.direction}>
                    Item Three
                </TabPanel>
            
        </Box>
    );
}