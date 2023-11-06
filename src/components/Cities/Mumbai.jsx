import React from 'react'
import "./Mumbai.css"
import { Paper, Typography, Button } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Mumbai = () => {

    const handleClick = () => {
        window.open('https://docs.google.com/spreadsheets/d/1fWvAvD8_auLlCxWhsKXzcSJPI45wgVyqIInO3hsJBHI/edit#gid=2014353338');
    };

    const MumbaiPopulation = [
        { year: 2011, Population: 18464334 },
        { year: 2012, Population: 18673600 },
        { year: 2013, Population: 18885238 },
        { year: 2014, Population: 19099274 },
        { year: 2015, Population: 19315737 },
        { year: 2016, Population: 19534652 },
        { year: 2017, Population: 19534652 },
        { year: 2018, Population: 19979955 },
        { year: 2019, Population: 20185064 },
        { year: 2020, Population: 20411274 },
        { year: 2021, Population: 20667655 },
        { year: 2022, Population: 20961473 },
        { year: 2023, Population: 21296517 },
    ];

    const MumbaiVehicle = [
        { vehicle: 'Cars', count: 530.02 },
        { vehicle: 'Transport', count: 139.83 },
        { vehicle: 'Scooter', count: 405.39 },
        { vehicle: 'Motorcycle', count: 1803.09 },
    ];

    const MumbaiCO = [
        { name: 'Transport', value: 527250 },
        { name: 'Residential', value: 23150 },
        { name: 'Industrial', value: 58200 },
        { name: 'Waste Burning', value: 10400 },
        { name: 'Diesel Generator', value: 61700 }
    ];

    const MumbaiSO2 = [
        { name: 'Transport', value: 1800 },
        { name: 'Residential', value: 550 },
        { name: 'Industrial', value: 46400 },
        { name: 'Waste Burning', value: 50 },
        { name: 'Diesel Generator', value: 400 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#a3e4d7'];

    return (
        <div className="mumbai">
            <div className="mumbai1">
                <Paper elevation={3} className='mcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                    <BarChart
                        width={1000}
                        height={550}
                        data={MumbaiPopulation}
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
                <Paper elevation={3} className='mcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                    <ResponsiveContainer width={1000} height={550}>
                        <RadarChart data={MumbaiVehicle}>
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
            </div>
            <div className="mumbai2">
                <Paper elevation={3} className='mcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                    <ResponsiveContainer width={1000} height={550}>
                        <PieChart>
                            <Pie
                                dataKey="value"
                                data={MumbaiCO}
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={200}
                                fill="#8884d8"
                                label
                            >
                                {
                                    MumbaiCO.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
                                }
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>

                    <Typography variant="body1" sx={{ fontSize: "20px", fontWeight: "500", color: "#faebd7" }}>
                        CO Emmisions
                    </Typography>
                </Paper>
                <Paper elevation={3} className='mcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                    <ResponsiveContainer width={1000} height={550}>
                        <PieChart>
                            <Pie
                                dataKey="value"
                                data={MumbaiSO2}
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={200}
                                fill="#8884d8"
                                label
                            >
                                {
                                    MumbaiSO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
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
        </div>
    )
}

export default Mumbai