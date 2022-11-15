import React, { createContext, useState } from 'react';
import { useNavContext } from '../contexts/NavContext';
import EqDiv from '../components/EqDiv';
import GlobalEqFilter from '../components/GlobalEqFilter';
export default function GlobalContainer() {

  
  const fetchFrequency = (freq) => {
    fetch(`/global/${freq}`)
    .then(data => data.json())
  }
  return (
    
    <div>This is the GlobalContainer
        <GlobalEqFilter/>
    </div>
    
  );
}
