import React, { createContext, useState } from 'react';
import { useSearchContext } from '../contexts/SearchContext';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function SearchInput() {

  const getData = useSearchContext().getData

  // state for handling startDate
  const [startValue, setStartValue] = React.useState(dayjs('2022-04-07'));

  // state for handling endDate
  const [endValue, setEndValue] = React.useState(dayjs('2022-04-07'));


  const handleClick = (e) => {
    e.preventDefault()

    const longitude = document.getElementById('longitude-input').value
    const latitude = document.getElementById('latitude-input').value
    const radius = document.getElementById('radius-input').value
    // const startDay = document.getElementById('startDate-input').value
    // const endDay = document.getElementById('endDate-input').value
    const lowerLimit = document.getElementById('lowerLimit-input').value
    const upperLimit = document.getElementById('upperLimit-input').value

    const searchInfo = {
      longitude: longitude,
      latitude: latitude,
      radius: radius,
      // startDay: startValue,
      // endDay: endValue,
      lowerLimit: lowerLimit,
      upperLimit: upperLimit
    }

    // console.log("this is the searchInfo: ", searchInfo);
    console.log("this is the start value: ", startValue.$d)
    console.log("this is the type: ", typeof startValue.$d)
    console.log("this is the date in string form?: ", startValue.$d.toString())
    console.log("is this a string?: ", typeof startValue.$d.toString())

    // getData(searchInfo);
  }


  return (
    <div className="search-container">
      <form onSubmit={handleClick}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="longitude-input"
            label="Longitude"
            type="Longitude"
            autoComplete="current-longitute"
          />
          <TextField
            id="latitude-input"
            label="Latitude"
            type="Latitude"
            autoComplete="current-latitude"
          />
          <TextField
            id="radius-input"
            label="Radius"
            type="Radius"
            autoComplete="current-radius"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <Stack spacing={3}> */}

              <DesktopDatePicker
                label="Start Date"
                value={startValue}
                minDate={dayjs('2017-01-01')}
                onChange={(newValue) => {
                  setStartValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />

              <DesktopDatePicker
                label="End Date"
                value={endValue}
                minDate={dayjs('2017-01-01')}
                onChange={(newValue) => {
                  setEndValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            {/* </Stack> */}
          </LocalizationProvider>

          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            id="startDate-input" // i added this id
            label="Start Date"
            inputFormat="MM/DD/YYYY"
            value={startValue}
            onChange={handleStartChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            id="endDate-input" // this one too
            label="End Date"
            inputFormat="MM/DD/YYYY"
            value={endValue}
            onChange={handleEndChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider> */}

          <TextField
            id="lowerLimit-input"
            label="Lower Limit"
            type="lowerLimit"
            autoComplete="current-lowerLimit"
          />
          <TextField
            id="upperLimit-input"
            label="Upper Limit"
            type="upperLimit"
            autoComplete="current-upperLimit"
          />
        </Box>
        <Button variant="contained" type="submit" value="submit">Submit</Button>
      </form>
    </div>
  );
}

/*

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
  </form> */
