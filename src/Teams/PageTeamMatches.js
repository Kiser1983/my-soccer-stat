import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { SelectedTeamMatches } from "../Utils/Selection";
import DataGridMatches from "../Components/DataGridMatches";
import DatePickerMatches from "../Components/DatePicker";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function TeamMatches({ team }) {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [dateFromString, setDateFromString] = useState("");
  const [dateToString, setDateToString] = useState("");
  const [teamMatches, setTeamMatches] = useState([]);

  useEffect(() => {
    const get = async () => {
      const getMatches = await SelectedTeamMatches(
        team.id,
        dateFromString,
        dateToString,
        team.crestUrl
      );
      if (!getMatches) return;
      setTeamMatches(getMatches.matches);
    };
    get();
  }, [team.id, dateFromString, dateToString, team.crestUrl]);

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
          <Link to="/teams" style={{ textDecoration: "none" }}>
            <Typography variant="h6" color="primary.main" fontWeight="bold">
              Команды
            </Typography>
          </Link>
          <Typography variant="h6" color="primary.main">
            {team.name}
          </Typography>

          {/* <Box
            component="img"
            alt=""
            src={team.crestUrl}
            height="35px"
            sx={{ objectFit: "contain", marginTop: 2, marginBottom: 2 }}
          /> */}
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
      <Box >
        <DataGridMatches matches={teamMatches} />
      </Box>
    </>
  );
}
export default TeamMatches;
