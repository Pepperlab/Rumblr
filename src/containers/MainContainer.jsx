import React, { createContext, useState } from 'react';
import GlobalContainer from './GlobalContainer';
import SearchContainer from './SearchContainer';
import WarningContainer from './WarningContainer';
import { useNavContext } from '../contexts/NavContext.jsx';
import { WarningContextProvider } from '../contexts/WarningContext';
import { GlobalContextProvider } from '../contexts/GlobalContext';
import { SearchContextProvider } from '../contexts/SearchContext';

export default function MainContainer () {
  const navState = useNavContext().navState
  let mainPage = <div>There is no page container loaded</div>

  if (navState === 'global') mainPage = <GlobalContainer></GlobalContainer>
  else if (navState === 'search'){
    mainPage = <SearchContainer></SearchContainer>
  } else if (navState=== 'warning'){
    mainPage = <WarningContainer></WarningContainer>
  }
  
  return (
    <div>
      <WarningContextProvider>
        <GlobalContextProvider>
          <SearchContextProvider>
            {mainPage}
          </SearchContextProvider>
        </GlobalContextProvider>
      </WarningContextProvider>
    </div>
  )
}
