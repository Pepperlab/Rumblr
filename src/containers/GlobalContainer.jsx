import React, { createContext, useState } from 'react';
import { useNavContext } from '../contexts/NavContext';
import EqDiv from '../components/EqDiv';
import GlobalEqFilter from '../components/GlobalEqFilter';
import {useGlobalContext} from '../contexts/GlobalContext'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

// export default function GlobalContainer() {
//   const globalState = useGlobalContext().globalState

//   const globalArr=[];

//   for(let i = 0; i< 25; i++){
//     console.log(globalState[i])
//     globalArr.push(<EqDiv key={i} data={globalState[i]}/>)
//   }
 
//   return (
    
//     <div>
//       <h2>This is the GlobalContainer</h2>
//         <GlobalEqFilter/>
//         {globalArr}
//     </div>
    
//   );
// }

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

function renderEq() {
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <EqDiv key={index} data={globalState[index]}/>
      </ListItemButton>
    </ListItem>
  )
}

export default function GlobalContainer() {
  const globalState = useGlobalContext().globalState

  const globalArr=[];

  for(let i = 0; i< globalState.length; i++){
    console.log(globalState[i])
    globalArr.push(<EqDiv key={i} data={globalState[i]}/>)
  }

  return (
    <div>
    <GlobalEqFilter/>
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={globalState.length}
        overscanCount={5}
      >
        {renderEq}
      </FixedSizeList>
    </Box>
    </div>
  );
}