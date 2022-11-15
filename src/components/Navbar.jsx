import React, { createContext, useState } from 'react';
import { useNavContext } from '../contexts/NavContext';

export default function Navbar() {
  const setNavState = useNavContext().setNavState;
  
  //helper function to update page state
  const changePage = (page) =>{
    setNavState(page)
  }

  return (
    <div className="nav-container">
      <img src="logo-placeholder"/>
      <button onClick={() => changePage('global')}>Global List</button>
      <button onClick={() => changePage('warning')}>Current Warnings</button>
      <button onClick={() => changePage('search')}>Search</button>
    </div>
  );
}
