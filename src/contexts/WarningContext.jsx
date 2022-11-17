import React, { useContext, useState } from 'react';
import warningArr from '../assets/warnings';

const WarningContext = React.createContext();

export function useWarningContext() {
  return useContext(WarningContext)
}

export function WarningContextProvider({ children }) {
  const [warningState, setWarningState] = useState([])
  
  function updateWarnings () {
    //this is where a fetch request will go go 
    const newState = [...warningArr];
    setWarningState(newState)
  }

  return (
    <WarningContext.Provider value={{warningState, updateWarnings}}>
      {children}
    </WarningContext.Provider>
  );
}
