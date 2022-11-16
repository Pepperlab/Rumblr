import React, { createContext, useState, useEffect } from 'react';
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
  const fetchFrequency = useGlobalContext().fetchFrequency

  function renderEq(props) {
    const { index, style } = props;
    return (
      <ListItem className="test" style={style} key={index} component="div" disablePadding margin="dense">
        <ListItemButton>
          <EqDiv key={index} data={globalState[index]} margin="dense"/>
        </ListItemButton>
      </ListItem>
    )
  }

  useEffect(() => {
    fetchFrequency('daily')
  }, [])

  return (
    <div className="list-container">
    <GlobalEqFilter/>
    <Box
      sx={{ width: '100%', height: "90%", bgcolor: 'background.paper', fontFamily: "Ariel",
      marginLeft: '5%', marginRight: '5%'
      }}
    >
      <FixedSizeList
        height={500}
        width="100%"
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