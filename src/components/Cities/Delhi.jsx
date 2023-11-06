import React from 'react'
import "./Delhi.css"
import { Paper, Typography, Button } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Delhi = () => {

    const handleClick = () => {
        window.open('https://docs.google.com/spreadsheets/d/1fWvAvD8_auLlCxWhsKXzcSJPI45wgVyqIInO3hsJBHI/edit#gid=461801889');
    };

    const DelhiPopulation = [
        { year: 2011, Population: 22713934 },
        { year: 2012, Population: 23463947 },
        { year: 2013, Population: 24238725 },
        { year: 2014, Population: 25039086 },
        { year: 2015, Population: 25865875 },
        { year: 2016, Population: 26719965 },
        { year: 2017, Population: 27602257 },
        { year: 2018, Population: 28513682 },
        { year: 2019, Population: 29399141 },
        { year: 2020, Population: 30290936 },
        { year: 2021, Population: 31181377 },
        { year: 2022, Population: 32065760 },
        { year: 2023, Population: 32941309 },
    ];

    const DelhiVehicle = [
        { vehicle: 'Cars', count: 3311.58 },
        { vehicle: 'Transport', count: 532.29 },
        { vehicle: 'Scooter', count: 33.30 },
        { vehicle: 'Motorcycle', count: 107.95 },
    ];

    const DelhiCO2 = [
        { name: 'Transport', value: 1378 },
        { name: 'Residential', value: 3741 },
        { name: 'Industrial', value: 1320 },
        { name: 'Waste Burning', value: 3904 },
        { name: 'Diesel Generator', value: 3534 }
    ];

    const DelhiSO2 = [
        { name: 'Transport', value: 500 },
        { name: 'Residential', value: 300 },
        { name: 'Industrial', value: 2500 },
        { name: 'Waste Burning', value: 50 },
        { name: 'Diesel Generator', value: 50 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#a3e4d7'];


    return (
        <div className="delhi">
            <Paper elevation={3} className='dcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <BarChart
                    width={1000}
                    height={550}
                    data={DelhiPopulation}
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
            <Paper elevation={3} className='dcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <RadarChart data={DelhiVehicle}>
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

            <Paper elevation={3} className='dcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={DelhiCO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                DelhiCO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
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
            <Paper elevation={3} className='dcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={DelhiSO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                DelhiSO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
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

export default Delhi