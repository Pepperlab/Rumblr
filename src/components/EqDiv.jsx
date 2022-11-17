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
                Longitude/Latitude: {Math.floor(props?.data?.longitude * 100 ) / 100 }/{Math.floor(props?.data?.latitude * 100 ) / 100 }
            </div>
            
        </div>
   
    )
}