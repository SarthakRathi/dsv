import React from 'react'
import "./Nagpur.css"
import { Paper } from '@mui/material'

const Nagpur = () => {
    return (
        <div className="nagpur">
            <div className="nagpur1">
                <Paper elevation={3} className='ncard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Nagpur</Paper>
                <Paper elevation={3} className='ncard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Nagpur</Paper>
            </div>
            <div className="nagpur2">
                <Paper elevation={3} className='ncard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Nagpur</Paper>
                <Paper elevation={3} className='ncard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Nagpur</Paper>
            </div>
        </div>
    )
}

export default Nagpur