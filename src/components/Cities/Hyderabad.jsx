import React from 'react'
import "./Hyderabad.css"
import { Paper, Typography, Button } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Hyderabad = () => {

    const handleClick = () => {
        window.open('https://docs.google.com/spreadsheets/d/1fWvAvD8_auLlCxWhsKXzcSJPI45wgVyqIInO3hsJBHI/edit#gid=616232082');
    };

    const HyderabadPopulation = [
        { year: 2011, Population: 6809970 },
        { year: 2012, Population: 7978000 },
        { year: 2013, Population: 8450000 },
        { year: 2014, Population: 8450000 },
        { year: 2015, Population: 8697000 },
        { year: 2016, Population: 8951000 },
        { year: 2017, Population: 9213000 },
        { year: 2018, Population: 9482000 },
        { year: 2019, Population: 9741000 },
        { year: 2020, Population: 10004000 },
        { year: 2021, Population: 10269000 },
        { year: 2022, Population: 10534000 },
        { year: 2023, Population: 10801000 },
    ];

    const HyderabadVehicle = [
        { vehicle: 'Cars', count: 503.66 },
        { vehicle: 'Transport', count: 255.07 },
        { vehicle: 'Scooter', count: 2387.16 },
        { vehicle: 'Motorcycle', count: 25.48 },
    ];

    const HyderabadCO2 = [
        { name: 'Transport', value: 334850 },
        { name: 'Residential', value: 20150 },
        { name: 'Industrial', value: 15300 },
        { name: 'Waste Burning', value: 16150 },
        { name: 'Diesel Generator', value: 45100 }
    ];

    const HyderabadSO2 = [
        { name: 'Transport', value: 850 },
        { name: 'Residential', value: 250 },
        { name: 'Industrial', value: 2750 },
        { name: 'Waste Burning', value: 100 },
        { name: 'Diesel Generator', value: 300 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#a3e4d7'];

    return (
        <div className="hyderabad">
            <Paper elevation={3} className='hcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <BarChart
                    width={1000}
                    height={550}
                    data={HyderabadPopulation}
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
            <Paper elevation={3} className='hcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <RadarChart data={HyderabadVehicle}>
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

            <Paper elevation={3} className='hcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={HyderabadCO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                HyderabadCO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
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
            <Paper elevation={3} className='hcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={HyderabadSO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                HyderabadSO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
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

export default Hyderabad