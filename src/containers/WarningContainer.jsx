import React, { useContext, useState } from 'react';
import WarningDiv from '../components/WarningDiv';
import { useWarningContext } from '../contexts/WarningContext';
import Button from '@mui/material/Button';


export default function WarningContainer() {
  const warningState = useWarningContext().warningState;
  const updateWarnings = useWarningContext().updateWarnings;
  
  const buttonStyle = {
    borderRadius: 35,
    backgroundColor: "lightgreen",
    color: "black"
  }

  const warningsDivArr = []
  for (let warningObj of warningState) {
    warningsDivArr.push(<WarningDiv data={warningObj}></WarningDiv>)
  }

  return (
    <div className="list-container">
      <Button style={buttonStyle} id="refresh-button"variant='contained' onClick={updateWarnings}>refresh warnings</Button>
      {warningsDivArr}
    </div>
  );
}