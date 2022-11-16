import React, { createContext, useState } from 'react';
import EqDiv from '../components/EqDiv';
import GlobalEqFilter from '../components/GlobalEqFilter';
import {useGlobalContext} from '../contexts/GlobalContext'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

export default function GlobalContainer() {
  const globalState = useGlobalContext().globalState


  function renderEq(props) {
    const { index, style } = props;
    console.log('in renderEq, style is: ', style)
    return (
      <ListItem className="test" style={style} key={index} component="div" disablePadding margin="dense">
        <ListItemButton>
          <EqDiv key={index} data={globalState[index]} margin="dense"/>
        </ListItemButton>
      </ListItem>
    )
  }

  return (
    <div>
    <GlobalEqFilter/>
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper', fontFamily: "Ariel" }}
    >
      <FixedSizeList
        height={700}
        width={360}
        itemSize={100}
        itemCount={globalState.length}
        overscanCount={5}
      >
        {renderEq}
      </FixedSizeList>
    </Box>
    </div>
  );
}