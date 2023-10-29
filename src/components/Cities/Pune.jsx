import React from 'react'
import "./Pune.css"
import { Paper } from '@mui/material'

const Pune = () => {
    return (
        <div className="pune">
            <div className="pune1">
                <Paper elevation={3} className='pcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Pune</Paper>
                <Paper elevation={3} className='pcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Pune</Paper>
            </div>
            <div className="pune2">
                <Paper elevation={3} className='pcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Pune</Paper>
                <Paper elevation={3} className='pcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Pune</Paper>
            </div>
        </div>
    )
}

export default Pune