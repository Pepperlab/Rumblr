import React, { createContext, useState } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
export default function GlobalEqFilter () {
    const setGlobalState = useGlobalContext().setGlobalState
    const changeFreq = (freq) => {
        
    }
    return(
        <div>
            <button onClick={() => changeFreq('daily')}>Daily</button>
            <button onClick={() => changeFreq('weekly')}>Weekly</button>
            <button onClick={() => changeFreq('monthly')}>Monthly</button>
        </div>
    )
}