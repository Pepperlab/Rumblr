import React, { useContext, useState } from 'react';

const NavContext = React.createContext();

export function useNavContext() {
  return useContext(NavContext)
}

export function NavContextProvider({ children }) {
  const [navState, setNavState] = useState('global')
  

  return (
    <NavContext.Provider value={{navState, setNavState}}>
      {children}
    </NavContext.Provider>
  );
}
