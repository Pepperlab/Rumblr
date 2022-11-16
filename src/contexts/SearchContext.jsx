import React, { useContext, useState } from 'react';

const SearchContext = React.createContext();

export function useSearchContext() {
  return useContext(SearchContext)
}

export function SearchContextProvider({ children }) {

  const [searchState, setSearchState] = useState([]);

  const getData = (data) => {
    fetch('/api/search/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        location: {
          latitude: data.latitude,
          longitude: data.longitude,
          radius: data.radius
        },
        time: {
          range: data.range
        },
        magnitude: {
          lowerLimit: data.lowerLimit,
          upperLimit: data.upperLimit
        }
      }
    })
    .then((data) => { data.json() })
    .then((data) => { 
      console.log(data)
      setSearchState(data)
    })
  }

  return (
    <SearchContext.Provider value={{searchState, getData}}>
      {children}
    </SearchContext.Provider>
  );
}
