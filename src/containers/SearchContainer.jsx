import React, { createContext, useState } from 'react';
import SearchInput from '../components/SearchInput';
import EqList from '../components/EqList';
import { useSearchContext } from '../contexts/SearchContext';
import { FixedSizeList } from 'react-window';

export default function SearchContainer() {

  const searchState = useSearchContext().searchState
  
  return (
    <div className="list-container">
      <SearchInput />
      {searchState.length ? <EqList eqArr={ searchState }></EqList>: 
      ""}
    </div>
  );
}
