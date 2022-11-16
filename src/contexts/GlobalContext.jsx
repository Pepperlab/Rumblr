import React, { useContext, useState } from 'react';

const GlobalContext = React.createContext();

export function useGlobalContext() {
  return useContext(GlobalContext)
}

export function GlobalContextProvider({ children }) {
  const [globalState, setGlobalState] = useState([])
  
  const fetchFrequency = (freq) => {
    console.log("inside global fetch:", freq)
    fetch(`http://localhost:3000/api/global/${freq}`, {
      headers: { "Access-Control-Allow-Origin": "*", mode: "cors"}
    })
    .then(data => data.json())
    .then(data => {
      console.log(data)
      setGlobalState(data)
    })
  }

  return (
    <GlobalContext.Provider value={{globalState, fetchFrequency}}>
      {children}
    </GlobalContext.Provider>
  );
}