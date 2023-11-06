import React from 'react';
import "./Pune.css"
import { Paper, Typography, Button } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Pune = () => {

    const handleClick = () => {
        window.open('https://docs.google.com/spreadsheets/d/1fWvAvD8_auLlCxWhsKXzcSJPI45wgVyqIInO3hsJBHI/edit#gid=0');
    };


    const PunePopulation = [
        { year: 2011, Population: 5107691 },
        { year: 2012, Population: 5260195 },
        { year: 2013, Population: 5417253 },
        { year: 2014, Population: 5579001 },
        { year: 2015, Population: 5745577 },
        { year: 2016, Population: 5917128 },
        { year: 2017, Population: 6093800 },
        { year: 2018, Population: 6275748 },
        { year: 2019, Population: 6451618 },
        { year: 2020, Population: 6629347 },
        { year: 2021, Population: 6807984 },
        { year: 2022, Population: 6987077 },
        { year: 2023, Population: 7166374 },
    ];

    const PuneVehicle = [
        { vehicle: 'Cars', count: 530.02 },
        { vehicle: 'Transport', count: 139.83 },
        { vehicle: 'Scooter', count: 405.39 },
        { vehicle: 'Motorcycle', count: 1803.09 },
    ];

    const PuneCO2 = [
        { name: 'Transport', value: 110500 },
        { name: 'Residential', value: 9550 },
        { name: 'Industrial', value: 21050 },
        { name: 'Waste Burning', value: 4750 },
        { name: 'Diesel Generator', value: 3400 }
    ];

    const PuneSO2 = [
        { name: 'Transport', value: 500 },
        { name: 'Residential', value: 300 },
        { name: 'Industrial', value: 2500 },
        { name: 'Waste Burning', value: 50 },
        { name: 'Diesel Generator', value: 50 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#a3e4d7'];

    return (
        <div className="pune">

            <Paper elevation={3} className='pcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>

                <BarChart
                    width={1000}
                    height={550}
                    data={PunePopulation}
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


            <Paper elevation={3} className='pcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>

                <ResponsiveContainer width={1000} height={550}>
                    <RadarChart data={PuneVehicle}>
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


            <Paper elevation={3} className='pcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>

                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={PuneCO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                PuneCO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
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


            <Paper elevation={3} className='pcard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>

                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={PuneSO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                PuneSO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
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

export default Pune