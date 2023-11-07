import React from 'react';
import "./Selection.css"
import { Paper, Typography, Button } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Selection = () => {

    const handleClick = () => {
        window.open('https://docs.google.com/spreadsheets/d/1fWvAvD8_auLlCxWhsKXzcSJPI45wgVyqIInO3hsJBHI/edit#gid=0');
    };


    const SelectionPopulation = [
        { city: 'Pune', Population: 7166374 },
        { city: 'Hyderabad', Population: 10801000 },
        { city: 'Mumbai', Population: 21296517 },
        { city: 'Nagpur', Population: 3046687 },
        { city: 'Kolkata', Population: 15333000 },
        { city: 'Delhi', Population: 32941309 },
        { city: 'Bangalore', Population: 13608000 },

    ];

    const SelectionVehicle = [
        { vehicle: 'Pune', count: 3198.82 },
        { vehicle: 'Hyderabad', count: 3242.80 },
        { vehicle: 'Mumbai', count: 3876.16 },
        { vehicle: 'Nagpur', count: 1781.50 },
        { vehicle: 'Kolkata', count: 1024.07 },
        { vehicle: 'Delhi', count: 11893.00 },
        { vehicle: 'Bangalore', count: 9638.36 },
    ];

    const SelectionCO2 = [
        { name: 'Pune', value: 5.81 },
        { name: 'Hyderabad', value: 7.09 },
        { name: 'Mumbai', value: 12.01 },
        { name: 'Nagpur', value: 6.89 },
        { name: 'Kolkata', value: 7.47 },
        { name: 'Bangalore', value: 10.42 },
    ];

    const SelectionSO2 = [
        { name: 'Pune', value: 3950 },
        { name: 'Hyderabad', value: 4850 },
        { name: 'Mumbai', value: 50750 },
        { name: 'Nagpur', value: 9600 },
        { name: 'Kolkata', value: 10400 },
        { name: 'Bangalore', value: 5300 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#a3e4d7'];

    return (
        <div className="selection">

            <Paper elevation={3} className='scard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>

                <BarChart
                    width={1000}
                    height={550}
                    data={SelectionPopulation}
                >
                    <XAxis dataKey="city" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Population" fill="#8884d8" />
                </BarChart>

                <Typography variant="body1" sx={{ fontSize: "20px", fontWeight: "500", color: "#faebd7" }}>
                    Total Population (2023)
                </Typography>
            </Paper>


            <Paper elevation={3} className='scard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>

                <ResponsiveContainer width={1000} height={550}>
                    <RadarChart data={SelectionVehicle}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="vehicle" />
                        <PolarRadiusAxis angle={10} domain={[0, 2000]} />
                        <Radar name="Vehicle Count" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>

                <Typography variant="body1" sx={{ fontSize: "20px", fontWeight: "500", color: "#faebd7" }}>
                    New Registers Vehicles in Cities (2020)
                </Typography>

            </Paper>


            <Paper elevation={3} className='scard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>

                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={SelectionCO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                SelectionCO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
                            }
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>

                <Typography variant="body1" sx={{ fontSize: "20px", fontWeight: "500", color: "#faebd7" }}>
                    CO2 Emmisions in Cities
                </Typography>

            </Paper>


            <Paper elevation={3} className='scard' sx={{ m: 5, p: 5, bgcolor: "#1e1e1e" }}>

                <ResponsiveContainer width={1000} height={550}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={SelectionSO2}
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {
                                SelectionSO2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
                            }
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>

                <Typography variant="body1" sx={{ fontSize: "20px", fontWeight: "500", color: "#faebd7" }}>
                    SO2 Emmisions in Cities
                </Typography>

            </Paper>

            <Button variant="contained" sx={{ mx: 5, backgroundColor: "rgb(136, 132, 216);" }} onClick={handleClick}>
                Go to Dataset
            </Button>

        </div>
    )
}

export default Selection