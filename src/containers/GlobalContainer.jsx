import React, { createContext, useState, useEffect } from 'react';
import GlobalEqFilter from '../components/GlobalEqFilter';
import EqList from '../components/EqList';
import {useGlobalContext} from '../contexts/GlobalContext'

export default function GlobalContainer() {
  const globalState = useGlobalContext().globalState

  return (
    <div className="list-container">
    <GlobalEqFilter/>
    {globalState.length ? <EqList eqArr={ globalState }></EqList>: <div><h1 className="select-freq">Please select earthquake frequency</h1></div>}
    </div>
  );
}