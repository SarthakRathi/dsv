import React from 'react'
import "./Bangalore.css"
import { Paper } from '@mui/material'

const Bangalore = () => {
    return (
        <div className="bangalore">
            <div className="bangalore1">
                <Paper elevation={3} className='bcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Graph 1</Paper>
                <Paper elevation={3} className='bcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Graph 2</Paper>
            </div>
            <div className="bangalore2">
                <Paper elevation={3} className='bcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Graph 3</Paper>
                <Paper elevation={3} className='bcard' sx={{ ml: 5, my: 3, bgcolor: "#1e1e1e" }}>Graph 4</Paper>
            </div>
        </div>
    )
}

export default Bangalore