import React, { createContext, useState } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

export default function GlobalEqFilter () {
    const fetchFrequency = useGlobalContext().fetchFrequency
    
    return(
        <div>
            <button onClick={() => fetchFrequency('daily')}>Daily</button>
            <button onClick={() => fetchFrequency('weekly')}>Weekly</button>
            <button onClick={() => fetchFrequency('monthly')}>Monthly</button>
            <button onClick={() => fetchFrequency('yearly')}>Yearly</button>
        </div>
    )
}