import React, { useState, useEffect } from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { fetchNowcast, locations } from "./helpers";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Bergen");

  const currentLocation = locations[location];

  useEffect(() => {
    const getWeatherData = async () => {
      const weatherData = await fetchNowcast(currentLocation);
      setWeather(weatherData);
    };

    getWeatherData();
  }, [currentLocation]);

  const handleChangeLocation = (event) => {
    setWeather(null);
    setLocation(event.target.value);
  };

  const currentDetails = weather?.properties.timeseries[0].data.instant.details;
  const temperature = currentDetails?.air_temperature;

  return (
    <Card>
      <CardContent>
        <Stack direction="column" spacing={1}>
          <Typography color="textSecondary" gutterBottom>
            Værvarsel for
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="weather-select-label">Sted</InputLabel>
            <Select
              labelId="weather-select-label"
              id="weather-select"
              value={location}
              label="Sted"
              onChange={handleChangeLocation}
            >
              {Object.keys(locations).map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="h5" component="h2">
            Temperatur: {temperature} °C
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
