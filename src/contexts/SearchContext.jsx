import React, { useContext, useState } from 'react';

const SearchContext = React.createContext();

export function useSearchContext() {
  return useContext(SearchContext)
}


export function SearchContextProvider({ children }) {

  const [searchState, setSearchState] = useState([]);

  const getData = (data) => {

    fetch('http://localhost:3000/api/search/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000/*',
        'mode': 'cors'
      },
      body: JSON.stringify({
        location: {
          latitude: data.latitude,
          longitude: data.longitude,
          radius: data.radius
        },
        time: {
          startDay: data.startDay,
          endDay: data.endDay
        },
        magnitude: {
          lowerLimit: data.lowerLimit,
          upperLimit: data.upperLimit
        }
      })
    })
    .then((data) => { return data.json() })
    .then((data) => { 
      console.log(data)
      setSearchState(data)
    })
  }
  console.log("This is the searchState data from the backend: ",searchState)

  return (
    <SearchContext.Provider value={{searchState, getData}}>
      {children}
    </SearchContext.Provider>
  );
}
