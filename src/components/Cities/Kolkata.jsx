import React from 'react'
import "./Kolkata.css"
import { Paper, Typography, Button } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Kolkata = () => {

    const handleClick = () => {
        window.open('https://docs.google.com/spreadsheets/d/1fWvAvD8_auLlCxWhsKXzcSJPI45wgVyqIInO3hsJBHI/edit#gid=1208710723');
    };

    const KolkataPopulation = [
        { year: 2011, Population: 14085783 },
        { year: 2012, Population: 14169000 },
        { year: 2013, Population: 14253000 },
        { year: 2014, Population: 14338000 },
        { year: 2015, Population: 14423000 },
        { year: 2016, Population: 14508000 },
        { year: 2017, Population: 14594000 },
        { year: 2018, Population: 14681000 },
        { year: 2019, Population: 14755000 },
        { year: 2020, Population: 14850000 },
        { year: 2021, Population: 14974000 },
        { year: 2022, Population: 15134000 },
        { year: 2023, Population: 15333000 },
    ];

    const KolkataVehicle = [
        { vehicle: 'Cars', count: 428.79 },
        { vehicle: 'Transport', count: 182.89 },
        { vehicle: 'Scooter', count: 50.85 },
        { vehicle: 'Motorcycle', count: 50.85 },
    ];

    const KolkataCO2 = [
        { name: 'Transport', value: 215850 },
        { name: 'Residential', value: 109700 },
        { name: 'Industrial', value: 63550 },
        { name: 'Waste Burning', value: 29900 },
        { name: 'Diesel Generator', value: 9945 }
    ];

    const KolkataSO2 = [
        { name: 'Transport', value: 950 },
        { name: 'Residential', value: 1550 },
        { name: 'Industrial', value: 2950 },
        { name: 'Waste Burning', value: 150 },
        { name: 'Diesel Generator', value: 650 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#a3e4d7'];

    return (
        <div className="kolkata">
            <Paper elevation={3} className='kcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <BarChart
                    width={1000}
                    height={550}
                    data={KolkataPopulation}
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

            <Paper elevation={3} className='kcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <RadarChart data={KolkataVehicle}>
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

            <Paper elevation={3} className='kcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={KolkataCO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                KolkataCO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
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
            <Paper elevation={3} className='kcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={KolkataSO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                KolkataSO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
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

export default Kolkata