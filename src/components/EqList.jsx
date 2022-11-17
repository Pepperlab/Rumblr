import React, { createContext, useState, useEffect } from 'react';
import EqDiv from './EqDiv';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { FixedSizeList } from 'react-window';

export default function EqList(props) {

  const eqArr = props.eqArr;

  function renderEq(props) {
    const { index, style } = props;
    return (
      <ListItem className="test" style={style} key={index} component="div" disablePadding margin="dense">
        <ListItemButton>
          <EqDiv key={index} data={eqArr[index]} margin="dense"/>
        </ListItemButton>
      </ListItem>
    )
  }

  return (
    <Box className ="list-box"
      sx={{ width: '100%', height: "90%", fontFamily: "Ariel",
      marginLeft: '5%', marginRight: '5%', border: 'solid', borderWidth: '1px'
      }}
    >
      <FixedSizeList
        height={500}
        width="100%"
        itemSize={100}
        itemCount={eqArr.length}
        overscanCount={5}
      >
        {renderEq}
      </FixedSizeList>
    </Box>
  );
}