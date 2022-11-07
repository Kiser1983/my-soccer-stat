import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { SelectedLeagueMatches } from "../Utils/Selection";
import DataGridMatches from "../Components/DataGridMatches";
import DatePickerMatches from "../Components/DatePicker";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function PageLeagueMatches({ league }) {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [dateFromString, setDateFromString] = useState("");
  const [dateToString, setDateToString] = useState("");
  const [leagueMatches, setLeagueMatches] = useState([]);

  useEffect(() => {
    const get = async () => {
      const getMatches = await SelectedLeagueMatches(
        league.id,
        dateFromString,
        dateToString
      );
      if (!getMatches) return;
      setLeagueMatches(getMatches.matches);
    };
    get();
  }, [league.id, dateFromString, dateToString]);

  const convertDate = (value) => {
    if (Math.floor(value / 10) === 0) {
      return `0${value}`;
    } else return value;
  };

  const updateDateFrom = (newDateFrom) => {
    setDateFrom(newDateFrom);
    if (newDateFrom !== null) {
      setDateFromString(
        `${newDateFrom.$y}-${convertDate(newDateFrom.$M + 1)}-${convertDate(
          newDateFrom.$D
        )}`
      );
    }
  };
  const updateDateTo = (newDateTo) => {
    setDateTo(newDateTo);
    if (newDateTo !== null) {
      setDateToString(
        `${newDateTo.$y}-${convertDate(newDateTo.$M + 1)}-${convertDate(
          newDateTo.$D
        )}`
      );
    }
  };
  return (
    <>
      <Box margin={2}>
        <Breadcrumbs
          marginLeft={2}
          color="primary.main"
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link to="/Football_Stat" style={{ textDecoration: "none" }}>
            <Typography variant="h6" color="primary.main" fontWeight="bold">
              Лиги
            </Typography>
          </Link>
          <Typography variant="h6" color="primary.main">
            {league.name}
          </Typography>
        </Breadcrumbs>
        <Box display="flex">
          <DatePickerMatches
            label="с"
            date={dateFrom}
            update={updateDateFrom}
            maxDate={dateTo}
          />
          <DatePickerMatches
            label="по"
            date={dateTo}
            update={updateDateTo}
            minDate={dateFrom}
          />
        </Box>

        <Typography variant="h4" color="primary.main" fontWeight="bold">
          Матчи
        </Typography>
      </Box>
      <Box>
        <DataGridMatches matches={leagueMatches} />
      </Box>
    </>
  );
}
export default PageLeagueMatches;
