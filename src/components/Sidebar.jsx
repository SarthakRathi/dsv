import './Sidebar.css'
import React, { useState } from 'react';
import { Typography } from "@mui/material/";
import { LocationOn } from '@mui/icons-material/';
import Pune from './Cities/Pune';
import Mumbai from './Cities/Mumbai';
import Delhi from './Cities/Delhi';
import Kolkata from './Cities/Kolkata';
import Nagpur from './Cities/Nagpur';
import Bangalore from './Cities/Bangalore';
import Hyderabad from './Cities/Hyderabad';
import Selection from './Cities/Selection';

const Sidebar = () => {

    const [selectedCity, setSelectedCity] = useState("Selection");

    const handleCityClick = (city) => {
        setSelectedCity(city);
    }


    return (
        <div className='imp'>
            <div className="left">

                <div className="sidetitle">
                    <Typography variant="body1" sx={{ fontSize: "40px", fontWeight: "500" }}>
                        Metro Cities
                    </Typography>
                </div>

                <div className="cities">

                    <div className="city">
                        <Typography variant="body1" sx={{ fontSize: "20px", mx: 4, p: 2 }} onClick={() => handleCityClick("Selection")}>
                            <LocationOn fontSize="small" sx={{ mr: 2 }} />
                            Selection
                        </Typography>
                    </div>

                    <div className="city">
                        <Typography variant="body1" sx={{ fontSize: "20px", mx: 4, p: 2 }} onClick={() => handleCityClick("Pune")}>
                            <LocationOn fontSize="small" sx={{ mr: 2 }} />
                            Pune
                        </Typography>
                    </div>

                    <div className="city">
                        <Typography variant="body1" sx={{ fontSize: "20px", mx: 4, p: 2 }} onClick={() => handleCityClick("Mumbai")}>
                            <LocationOn fontSize="small" sx={{ mr: 2 }} />
                            Mumbai
                        </Typography>
                    </div>

                    <div className="city">
                        <Typography variant="body1" sx={{ fontSize: "20px", mx: 4, p: 2 }} onClick={() => handleCityClick("Delhi")}>
                            <LocationOn fontSize="small" sx={{ mr: 2 }} />
                            Delhi
                        </Typography>
                    </div>

                    <div className="city">
                        <Typography variant="body1" sx={{ fontSize: "20px", mx: 4, p: 2 }} onClick={() => handleCityClick("Kolkata")}>
                            <LocationOn fontSize="small" sx={{ mr: 2 }} />
                            Kolkata
                        </Typography>
                    </div>

                    <div className="city">
                        <Typography variant="body1" sx={{ fontSize: "20px", mx: 4, p: 2 }} onClick={() => handleCityClick("Nagpur")}>
                            <LocationOn fontSize="small" sx={{ mr: 2 }} />
                            Nagpur
                        </Typography>
                    </div>

                    <div className="city">
                        <Typography variant="body1" sx={{ fontSize: "20px", mx: 4, p: 2 }} onClick={() => handleCityClick("Bangalore")}>
                            <LocationOn fontSize="small" sx={{ mr: 2 }} />
                            Bangalore
                        </Typography>
                    </div>

                    <div className="city">
                        <Typography variant="body1" sx={{ fontSize: "20px", mx: 4, p: 2 }} onClick={() => handleCityClick("Hyderabad")}>
                            <LocationOn fontSize="small" sx={{ mr: 2 }} />
                            Hyderabad
                        </Typography>
                    </div>
                </div>
            </div>

            {selectedCity === "Selection" ? (
                <Selection />
            ) : null}

            {selectedCity === "Pune" ? (
                <Pune />
            ) : null}

            {selectedCity === "Mumbai" ? (
                <Mumbai />
            ) : null}

            {selectedCity === "Delhi" ? (
                <Delhi />
            ) : null}

            {selectedCity === "Kolkata" ? (
                <Kolkata />
            ) : null}

            {selectedCity === "Nagpur" ? (
                <Nagpur />
            ) : null}

            {selectedCity === "Bangalore" ? (
                <Bangalore />
            ) : null}

            {selectedCity === "Hyderabad" ? (
                <Hyderabad />
            ) : null}

        </div>
    )
}

export default Sidebar