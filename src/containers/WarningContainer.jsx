import React from 'react';
import WarningDiv from '../components/WarningDiv';
import { useWarningContext } from '../contexts/WarningContext';

export default function WarningContainer() {

  [warningState, updateWarnings] = useWarningContext()

  const warningsArr = [];

  for (let element of warningState) {
    warningsArr.push(<WarningDiv text={element}></WarningDiv>)
  }

  return (
    <div>
      <h2>This is the WarningContainer</h2>
      <button onClick={updateWarnings}>refresh warnings</button>
      {warningsArr}
    </div>
  );
}
