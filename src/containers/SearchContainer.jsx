import React, { createContext, useState } from 'react';
import SearchInput from '../components/SearchInput';
import EqDiv from '../components/EqDiv';
import { useSearchContext } from '../contexts/SearchContext';

export default function SearchContainer() {

  const searchState = useSearchContext().searchState
  
  return (
    <div>
      <SearchInput />
      <EqDiv />
    </div>
  );
}
