import React, { useContext, useState } from 'react';

const GlobalContext = React.createContext();

export function useGlobalContext() {
  return useContext(GlobalContext)
}

export function GlobalContextProvider({ children }) {
  const [globalState, setGlobalState] = useState('daily')
  

  return (
    <GlobalContext.Provider value={{globalState, setGlobalState}}>
      {children}
    </GlobalContext.Provider>
  );
}