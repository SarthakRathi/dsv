import React from 'react'
import "./Nagpur.css"
import { Paper, Typography } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Nagpur = () => {

    const NagpurPopulation = [
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

    const NagpurVehicle = [
        { vehicle: 'Cars', count: 530.02 },
        { vehicle: 'Transport', count: 139.83 },
        { vehicle: 'Scooter', count: 405.39 },
        { vehicle: 'Motorcycle', count: 1803.09 },
    ];

    const NagpurCO2 = [
        { name: 'Transport', value: 110500 },
        { name: 'Residential', value: 9550 },
        { name: 'Industrial', value: 21050 },
        { name: 'Waste Burning', value: 4750 },
        { name: 'Diesel Generator', value: 3400 }
    ];

    const NagpurSO2 = [
        { name: 'Transport', value: 500 },
        { name: 'Residential', value: 300 },
        { name: 'Industrial', value: 2500 },
        { name: 'Waste Burning', value: 50 },
        { name: 'Diesel Generator', value: 50 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#a3e4d7'];

    return (
        <div className="nagpur">
            <div className="nagpur1">
                <Paper elevation={3} className='ncard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>
                    <BarChart
                        width={450}
                        height={270}
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
                <Paper elevation={3} className='ncard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>
                    <ResponsiveContainer width="100%" height={300}>
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
            </div>
            <div className="nagpur2">
                <Paper elevation={3} className='ncard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>
                    <ResponsiveContainer width="100%" height={270}>
                        <PieChart>
                            <Pie
                                dataKey="value"
                                data={NagpurCO2}
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={90}
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
                <Paper elevation={3} className='ncard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>
                    <ResponsiveContainer width="100%" height={270}>
                        <PieChart>
                            <Pie
                                dataKey="value"
                                data={NagpurSO2}
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={90}
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
            </div>
        </div>
    )
}

export default Nagpur