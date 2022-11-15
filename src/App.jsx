import React, { createContext, useState } from 'react';
import Navbar from "./components/Navbar";
import GlobalContainer from './containers/GlobalContainer';
import SearchContainer from './containers/SearchContainer';
import WarningContainer from './containers/WarningContainer';
import MainContainer from './containers/MainContainer';
import { NavContextProvider } from './contexts/NavContext.jsx';


export default function App() {
    
    // const navState = useNavContext().navState
    
    return (
        <div>
        <NavContextProvider>
                <Navbar/>
                <MainContainer/>
        </NavContextProvider>
        </div>
    );
}

