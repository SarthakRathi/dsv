import React from 'react'
import "./Bangalore.css"
import { Paper, Typography, Button } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Bangalore = () => {

    const handleClick = () => {
        window.open('https://docs.google.com/spreadsheets/d/1fWvAvD8_auLlCxWhsKXzcSJPI45wgVyqIInO3hsJBHI/edit#gid=821207545');
    };

    const BangalorePopulation = [
        { year: 2011, Population: 8636000 },
        { year: 2012, Population: 8990000 },
        { year: 2013, Population: 9358000 },
        { year: 2014, Population: 9742000 },
        { year: 2015, Population: 10141000 },
        { year: 2016, Population: 10557000 },
        { year: 2017, Population: 10990000 },
        { year: 2018, Population: 11440000 },
        { year: 2019, Population: 11883000 },
        { year: 2020, Population: 12327000 },
        { year: 2021, Population: 12765000 },
        { year: 2022, Population: 13193000 },
        { year: 2023, Population: 13608000 },
    ];

    const BangaloreVehicle = [
        { vehicle: 'Cars', count: 345.50 },
        { vehicle: 'Transport', count: 1588.41 },
        { vehicle: 'Scooter', count: 22.14 },
        { vehicle: 'Motorcycle', count: 64.97 },
    ];

    const BangaloreCO2 = [
        { name: 'Transport', value: 237000 },
        { name: 'Residential', value: 20300 },
        { name: 'Industrial', value: 20600 },
        { name: 'Waste Burning', value: 16800 },
        { name: 'Diesel Generator', value: 31500 }
    ];

    const BangaloreSO2 = [
        { name: 'Transport', value: 1300 },
        { name: 'Residential', value: 750 },
        { name: 'Industrial', value: 1650 },
        { name: 'Waste Burning', value: 100 },
        { name: 'Diesel Generator', value: 100 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#a3e4d7'];

    return (
        <div className="bangalore">
            <Paper elevation={3} className='bcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <BarChart
                    width={1000}
                    height={550}
                    data={BangalorePopulation}
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
            <Paper elevation={3} className='bcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <RadarChart data={BangaloreVehicle}>
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

            <Paper elevation={3} className='bcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={BangaloreCO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                BangaloreCO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
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
            <Paper elevation={3} className='bcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>
                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={BangaloreSO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                BangaloreSO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
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

export default Bangalore