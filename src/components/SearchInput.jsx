import React, { createContext, useState } from 'react';
import { useSearchContext } from '../contexts/SearchContext';


export default function SearchInput() {

  const getData = useSearchContext().getData

  const handleClick = (e) => {
    e.preventDefault()

    const longitude = document.getElementById('longitude').value
    const latitude = document.getElementById('latitude').value
    const radius = document.getElementById('radius').value
    const startDay = document.getElementById('startDay').value
    const endDay = document.getElementById('endDay').value
    const lowerLimit = document.getElementById('lowerLimit').value
    const upperLimit = document.getElementById('upperLimit').value

    const searchInfo = {
      longitude: longitude,
      latitude: latitude,
      radius: radius,
      range: range,
      lowerLimit: lowerLimit,
      upperLimit: upperLimit,
      startDay: startDay,
      endDay: endDay
    }
    console.log("this is the searchInfo: ", searchInfo);
    // getData(searchInfo);
  }

  return (
    <div className="search-container">
      <h3>Search:</h3>
      <form onSubmit={handleClick}>
        <label>Longitude:</label>
        <input type="text" id="longitude"></input>
        <label>Latitude:</label>
        <input type="text" id="latitude"></input>
        <label>Radius:</label>
        <input type="text" id="radius"></input>

        <label>Start Date:</label>
        <input type="text" id="startDay"></input>
        <label>End Date:</label>
        <input type="text" id="endDay"></input>
        <label>Lower Limit</label>
        <input type="text" id="lowerLimit"></input>
        <label>Upper Limit:</label>
        <input type="text" id="upperLimit"></input>

        <button type="submit" value="submit">Search</button>
      </form>
    </div>
  );
}
