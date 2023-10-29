import React from 'react'
import "./Kolkata.css"
import { Paper } from '@mui/material'

const Kolkata = () => {
    return (
        <div className="kolkata">
            <div className="kolkata1">
                <Paper elevation={3} className='kcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Kolkata</Paper>
                <Paper elevation={3} className='kcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Kolkata</Paper>
            </div>
            <div className="kolkata2">
                <Paper elevation={3} className='kcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Kolkata</Paper>
                <Paper elevation={3} className='kcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Kolkata</Paper>
            </div>
        </div>
    )
}

export default Kolkata