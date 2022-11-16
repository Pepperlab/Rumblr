import React, { createContext, useState } from 'react';
import Navbar from "./components/Navbar";
import MainContainer from './containers/MainContainer';
import { NavContextProvider } from './contexts/NavContext.jsx';
import Title from './components/Title';
import Links from './components/Links';


export default function App() {
    
    // const navState = useNavContext().navState
    
    return (
        <div>
        <NavContextProvider>
                <Title></Title>
                <Navbar/>   
                <MainContainer/>
                <Links></Links>
        </NavContextProvider>
        </div>
    );
}

