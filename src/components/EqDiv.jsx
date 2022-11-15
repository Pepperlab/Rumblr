import React, { createContext, useState } from 'react';
import { useNavContext } from '../contexts/NavContext'; 

export default function EqDiv () {
    const magnitude = 6;
    const location = "my ass"
    const date = "TODAY"
    return(
        <div>
            <div>
                Magnitude: {magnitude}
            </div>
            <div>
                Location: {location}
            </div>
            <div>
                Date: {date}
            </div>
        </div>
   
    )
}