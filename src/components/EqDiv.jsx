import React, { createContext, useState } from 'react';
import { useNavContext } from '../contexts/NavContext'; 

export default function EqDiv (props) {
    return(
        <div>
            <div>
                Magnitude: {props?.data?.magnitude}
            </div>
            <div>
                Longitude: {props?.data?.longitude} Latitude: {props?.data?.latitude}
            </div>
            <div>
                Date: {props?.data?.time}
            </div>
        </div>
   
    )
}