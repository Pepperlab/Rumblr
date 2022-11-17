import React from 'react';

export default function WarningDiv (props) {
  
  return(
    <div className="warning-div">
      <div>
        Warning for: { props?.data?.location }
      </div> 
      <div>
        Issued on: { props?.data?.issued }
      </div> 
      <div>
        magnitude: { props?.data?.mag }
      </div> 
      <div>
        depth of earthquake: { props?.data?.depth }
      </div> 
      <div>
      Longitude/Latitude: {props?.data?.lon} /{props?.data?.lat}
      </div> 
    </div>
  )
}