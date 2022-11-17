import React, { createContext, useState } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import Button from '@mui/material/Button';

export default function GlobalEqFilter () {
    const fetchFrequency = useGlobalContext().fetchFrequency
    
    const buttonStyle = {
        borderRadius: 35,
        backgroundColor: "lightgreen",
        color: "black"
      }

    return(
        <div id="global-buttons-container">
            <Button style={buttonStyle} variant="contained" onClick={() => fetchFrequency('daily')}>Daily</Button>
            <Button style={buttonStyle} variant="contained" onClick={() => fetchFrequency('weekly')}>Weekly</Button>
            <Button style={buttonStyle} variant="contained" onClick={() => fetchFrequency('monthly')}>Monthly</Button>
            <Button style={buttonStyle} variant="contained" onClick={() => fetchFrequency('yearly')}>Yearly</Button>
        </div>
    )
}