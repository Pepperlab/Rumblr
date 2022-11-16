import React, { createContext, useState } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import Button from '@mui/material/Button';

export default function GlobalEqFilter () {
    const fetchFrequency = useGlobalContext().fetchFrequency
    
    return(
        <div id="global-buttons-container">
            <Button variant="contained" onClick={() => fetchFrequency('daily')}>Daily</Button>
            <Button variant="contained" onClick={() => fetchFrequency('weekly')}>Weekly</Button>
            <Button variant="contained" onClick={() => fetchFrequency('monthly')}>Monthly</Button>
            <Button variant="contained" onClick={() => fetchFrequency('yearly')}>Yearly</Button>
        </div>
    )
}