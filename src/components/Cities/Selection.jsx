import React from 'react'
import "./Selection.css"
import { Typography } from "@mui/material/";

const Selection = () => {
    return (
        <div className='selection'>
            <Typography variant="body1" sx={{ fontSize: "40px", fontWeight: "500", color: "#bb86fc" }}>
                Please select a city
            </Typography>
        </div>
    )
}

export default Selection