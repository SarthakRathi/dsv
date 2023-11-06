import React from 'react'
import "./Nagpur.css"
import { Paper, Typography, Button } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Nagpur = () => {

    const handleClick = () => {
        window.open('https://docs.google.com/spreadsheets/d/1fWvAvD8_auLlCxWhsKXzcSJPI45wgVyqIInO3hsJBHI/edit#gid=194785017');
    };

    const NagpurPopulation = [
        { year: 2011, Population: 2511227 },
        { year: 2012, Population: 2551615 },
        { year: 2013, Population: 2592653 },
        { year: 2014, Population: 2634351 },
        { year: 2015, Population: 2676720 },
        { year: 2016, Population: 2719769 },
        { year: 2017, Population: 2763512 },
        { year: 2018, Population: 2807958 },
        { year: 2019, Population: 2849572 },
        { year: 2020, Population: 2893455 },
        { year: 2021, Population: 2940487 },
        { year: 2022, Population: 2991427 },
        { year: 2023, Population: 3046687 },
    ];

    const NagpurVehicle = [
        { vehicle: 'Cars', count: 530.02 },
        { vehicle: 'Transport', count: 139.83 },
        { vehicle: 'Scooter', count: 405.39 },
        { vehicle: 'Motorcycle', count: 1803.09 },
    ];

    const NagpurCO2 = [
        { name: 'Transport', value: 1.61 },
        { name: 'Residential', value: 0.4 },
        { name: 'Industrial', value: 4.58 },
        { name: 'Waste Burning', value: 0.01 },
        { name: 'Diesel Generator', value: 0.17 }
    ];

    const NagpurSO2 = [
        { name: 'Transport', value: 300 },
        { name: 'Residential', value: 250 },
        { name: 'Industrial', value: 8350 },
        { name: 'Waste Burning', value: 50 },
        { name: 'Diesel Generator', value: 50 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#a3e4d7'];

    return (
        <div className="nagpur">
            <Paper elevation={3} className='ncard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <BarChart
                    width={1000}
                    height={550}
                    data={NagpurPopulation}
                >
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Population" fill="#8884d8" />
                </BarChart>

                <Typography variant="body1" sx={{ fontSize: "20px", fontWeight: "500", color: "#faebd7" }}>
                    Increase in Population
                </Typography>
            </Paper>

            <Paper elevation={3} className='ncard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <RadarChart data={NagpurVehicle}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="vehicle" />
                        <PolarRadiusAxis angle={45} domain={[0, 2000]} />
                        <Radar name="Vehicle Count" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>

                <Typography variant="body1" sx={{ fontSize: "20px", fontWeight: "500", color: "#faebd7" }}>
                    New Registers Vehicles in 2020
                </Typography>
            </Paper>

            <Paper elevation={3} className='ncard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={NagpurCO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                NagpurCO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
                            }
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>

                <Typography variant="body1" sx={{ fontSize: "20px", fontWeight: "500", color: "#faebd7" }}>
                    CO2 Emmisions
                </Typography>
            </Paper>
            <Paper elevation={3} className='ncard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={NagpurSO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                NagpurSO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
                            }
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>

                <Typography variant="body1" sx={{ fontSize: "20px", fontWeight: "500", color: "#faebd7" }}>
                    SO2 Emmisions
                </Typography>
            </Paper>

            <Button variant="contained" sx={{ mx: 5, backgroundColor: "rgb(136, 132, 216);" }} onClick={handleClick}>
                Go to Dataset
            </Button>
        </div>
    )
}

export default Nagpur