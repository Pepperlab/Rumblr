import React, { useContext, useState } from 'react';
import WarningDiv from '../components/WarningDiv';
import { useWarningContext } from '../contexts/WarningContext';
import Button from '@mui/material/Button';
import EqDiv from '../components/EqDiv';
import GlobalEqFilter from '../components/GlobalEqFilter';
import {useGlobalContext} from '../contexts/GlobalContext'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

// export default function WarningContainer() {
//   const warningState = useWarningContext().warningState;
//   const updateWarnings = useWarningContext().updateWarnings;
  

//   const warningsArr = [];

//   if (!warningsArr.length) {
//     for (let element of warningState) {
//       warningsArr.push(<WarningDiv text={element}></WarningDiv>)
//     }
//   }

//   return (
//     <div>
//       <h2>This is the WarningContainer</h2>
//       <Button variant='contained' onClick={updateWarnings}>refresh warnings</Button>
//       {warningsArr}
//     </div>
//   );
// }



export default function WarningContainer() {
  const warningState = useWarningContext().warningState;
  const updateWarnings = useWarningContext().updateWarnings;
  
  function renderWarning(props) {
    const { index, style } = props;
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <WarningDiv text={warningState[index]} margin="dense" />
        </ListItemButton>
      </ListItem>
    );
  }

  const buttonStyle = {
    borderRadius: 35,
    backgroundColor: "lightgreen",
    color: "black"
  }

  return (
    <div className="list-container">
      <Button style={buttonStyle} id="refresh-button"variant='contained' onClick={updateWarnings}>refresh warnings</Button>
        
      <Box
        sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
      >
       
        <FixedSizeList
          height={400}
          width={360}
          itemSize={46}
          itemCount={warningState.length}
          overscanCount={5}
        >
          {renderWarning}
        </FixedSizeList>
      </Box>
    </div>
  );
}