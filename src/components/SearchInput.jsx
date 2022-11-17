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

  // function for converting date
  const formatDate = (date) => {
    let objectDate = date;

    let day = objectDate.getDate()
    let month = objectDate.getMonth() + 1
    let year = objectDate.getFullYear()

    return `${year}-${month}-${day}`
  }

  const handleClick = (e) => {
    e.preventDefault()

    const longitude = document.getElementById('longitude-input').value
    const latitude = document.getElementById('latitude-input').value
    const radius = document.getElementById('radius-input').value
    const lowerLimit = document.getElementById('lowerLimit-input').value
    const upperLimit = document.getElementById('upperLimit-input').value

    let startDate = formatDate(startValue.$d)
    let endDate = formatDate(endValue.$d)

    const searchInfo = {
      longitude: longitude,
      latitude: latitude,
      radius: radius,
      startDay: startDate,
      endDay: endDate,
      lowerLimit: lowerLimit,
      upperLimit: upperLimit
    }

    getData(searchInfo);
  }

  const buttonStyle = {
    borderRadius: 35,
    backgroundColor: "lightgreen",
    color: "black"
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
          </LocalizationProvider>

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
        <div className="form-button">
        <Button style={buttonStyle} variant="contained" type="submit" value="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}