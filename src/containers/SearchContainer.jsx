import React, { createContext, useState } from 'react';
import SearchInput from '../components/SearchInput';
import EqDiv from '../components/EqDiv';

export default function SearchContainer() {

  return (
    <div>
      <SearchInput />
      <EqDiv />
    </div>
  );
}
