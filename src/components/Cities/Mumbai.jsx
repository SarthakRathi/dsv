import React from 'react'
import "./Mumbai.css"
import { Paper } from '@mui/material'

const Mumbai = () => {
    return (
        <div className="mumbai">
            <div className="mumbai1">
                <Paper elevation={3} className='mcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Mumbai</Paper>
                <Paper elevation={3} className='mcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Mumbai</Paper>
            </div>
            <div className="mumbai2">
                <Paper elevation={3} className='mcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Mumbai</Paper>
                <Paper elevation={3} className='mcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Mumbai</Paper>
            </div>
        </div>
    )
}

export default Mumbai