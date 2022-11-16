import React, { createContext, useState } from 'react';

export default function EqDiv (props) {
    return(
        <div className={"eq-div" + " mag" + Math.floor(props?.data?.magnitude)}>
            <div>
                Magnitude: {props?.data?.magnitude}
            </div>
            <div>
                Date: {props?.data?.time}
            </div>
            <div>
                Place: {props?.data?.place}
            </div>
            <div>
                Longitude/Latitude: {props?.data?.longitude}/{props?.data?.latitude}
            </div>
            
        </div>
   
    )
}