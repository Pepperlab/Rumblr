import React, { useContext, useState } from 'react';

const WarningContext = React.createContext();

export function useWarningContext() {
  return useContext(WarningContext)
}

export function WarningContextProvider({ children }) {
  const [warningState, setWarningState] = useState([])
  
  function updateWarnings () {
    //this is where a fetch request will go go 
    const newState = [];

    for (let i = 0; i < 10; i++) {
      newState.push('This is a warning with id: ' + Math.floor(Math.random() * 10000))
    }

    setWarningState(newState)
  }

  return (
    <WarningContext.Provider value={{warningState, updateWarnings}}>
      {children}
    </WarningContext.Provider>
  );
}
