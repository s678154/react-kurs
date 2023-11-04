import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "dayjs/locale/nb";

export default function CalendarWidget() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="nb">
      <DateCalendar />
    </LocalizationProvider>
  );
}
