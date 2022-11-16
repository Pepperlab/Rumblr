import React, { createContext, useState } from 'react';
import { useSearchContext } from '../contexts/SearchContext';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



export default function SearchInput() {

  // state for handling date
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };

  const getData = useSearchContext().getData

  const handleClick = (e) => {
    e.preventDefault()

    const longitude = document.getElementById('longitude').value
    const latitude = document.getElementById('latitude').value
    const radius = document.getElementById('radius').value
    // const startDay = document.getElementById('startDay').value
    // const endDay = document.getElementById('endDay').value
    const lowerLimit = document.getElementById('lowerLimit').value
    const upperLimit = document.getElementById('upperLimit').value

    const searchInfo = {
      longitude: longitude,
      latitude: latitude,
      radius: radius,
      // startDay: startDay,
      // endDay: endDay,
      lowerLimit: lowerLimit,
      upperLimit: upperLimit
    }
    console.log("this is the searchInfo: ", searchInfo);
    getData(searchInfo);
  }


  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <TextField
          id="outlined-longitude-input"
          label="Longitude"
          type="Longitude"
          autoComplete="current-longitute"
        />
        <TextField
          id="outlined-latitude-input"
          label="Latitude"
          type="Latitude"
          autoComplete="current-latitude"
        />
        <TextField
          id="outlined-radius-input"
          label="Radius"
          type="Radius"
          autoComplete="current-radius"
        />
        </div>
      </Box>
      {/* <form onSubmit={handleClick}> */}
      {/* <label>Longitude:</label>
        <input type="text" id="longitude"></input>
        <label>Latitude:</label>
        <input type="text" id="latitude"></input>

        <label>Radius:</label>
        <input type="text" id="radius"></input> */}

      {/* <label>Start Date:</label>
        <input type="text" id="startDay"></input>
        <label>End Date:</label>
        <input type="text" id="endDay"></input> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>


      {/* // <label>Lower Limit</label>
        // <input type="text" id="lowerLimit"></input>
        // <label>Upper Limit:</label>
        // <input type="text" id="upperLimit"></input>

        // <button type="submit" value="submit">Search</button> */}
      {/* </form> */}
    </div>
  );
}
