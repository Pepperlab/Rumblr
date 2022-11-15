import React, { createContext, useState } from 'react';

export default function SearchInput() {

  return (
    <div className="search-container">
      <h3>Search:</h3>
      <form>
        <label>location:</label>
        <input type="text"></input>
        <select name="time">
          <option value="" selected disabled hidden>Choose a range</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        <label>Magnitude:</label>
        <input type="text"></input>
      </form>
    </div>
  );
}
