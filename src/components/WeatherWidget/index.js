import React, { useState, useEffect } from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  fetchNowcast,
  locations,
  temperatureEmoji,
  windArrow,
} from "./helpers";

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

  // Eksempel på hvordan man kan vise temperatur og vindretning
  const currentDetails = weather?.properties.timeseries[0].data.instant.details;
  const temperature = currentDetails?.air_temperature;
  const precipitation = currentDetails?.precipitation_rate;
  const windDirection = currentDetails?.wind_from_direction;
  const windSpeed = currentDetails?.wind_speed;
  const windSpeedOfGust = currentDetails?.wind_speed_of_gust;

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
            Temperatur: {temperature ? `${temperature} °C` : "Laster inn..."}{" "}
            {temperatureEmoji(temperature)}
          </Typography>
          <Typography color="textSecondary">
            Nedbør: {precipitation} mm
          </Typography>
          <Typography color="textSecondary">
            Vindstyrke: {windSpeed} m/s
          </Typography>
          <Typography color="textSecondary">
            Vindkast: {windSpeedOfGust} m/s
          </Typography>
          <Typography color="textSecondary">
            Vindretning: {windArrow(windDirection)} {windDirection}°
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
