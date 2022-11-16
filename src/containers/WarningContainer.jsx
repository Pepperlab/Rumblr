import React, { useContext, useState } from 'react';
import WarningDiv from '../components/WarningDiv';
import { useWarningContext } from '../contexts/WarningContext';
import Button from '@mui/material/Button';

export default function WarningContainer() {
  const warningState = useWarningContext().warningState;
  const updateWarnings = useWarningContext().updateWarnings;
  

  const warningsArr = [];

  if (!warningsArr.length) {
    for (let element of warningState) {
      warningsArr.push(<WarningDiv text={element}></WarningDiv>)
    }
  }

  return (
    <div>
      <h2>This is the WarningContainer</h2>
      <Button variant='contained' onClick={updateWarnings}>refresh warnings</Button>
      {warningsArr}
    </div>
  );
}
