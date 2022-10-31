import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function DatePickerMatches({ date, minDate, maxDate, label, update }) {
  return (
    //формат даты
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker
        label={label}
        inputFormat="DD.MM.YYYY"
        value={date}
        minDate={minDate}
        maxDate={maxDate}
        onChange={update}
        renderInput={(params) => <TextField {...params} sx={{ margin: 2 }} />}
      />
    </LocalizationProvider>
  );
}

export default DatePickerMatches;
