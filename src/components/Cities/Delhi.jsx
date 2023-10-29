import React from 'react'
import "./Delhi.css"
import { Paper } from '@mui/material'

const Delhi = () => {
    return (
        <div className="delhi">
            <div className="delhi1">
                <Paper elevation={3} className='dcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Delhi</Paper>
                <Paper elevation={3} className='dcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Delhi</Paper>
            </div>
            <div className="delhi2">
                <Paper elevation={3} className='dcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Delhi</Paper>
                <Paper elevation={3} className='dcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Delhi</Paper>
            </div>
        </div>
    )
}

export default Delhi