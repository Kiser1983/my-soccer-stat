import * as React from "react";
import { Box,} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Loading from "./Loading";

function DataGridMatches({ matches }) {
  const [pageSize, setPageSize] = React.useState(12);

  if (!matches.length) {
    return (
      <Loading />
    );
  }

  const checkScore = (value) => {
    if (value === null) {
      return "--";
    } else {
      return value;
    }
  };

  const statusMatches = {
    SCHEDULED: "Запланирован",
    LIVE: "В прямом эфире",
    IN_PLAY: "В игре",
    PAUSED: "Пауза",
    FINISHED: "Завершен",
    POSTPONED: "Отложен",
    SUSPENDED: "Приостановлен",
    CANCELED: "Отменен",
  };
  const columns = [
    {
      field: "date",
      headerName: "Дата",
      width: 180,
    },
    {
      field: "time",
      headerName: "Время",
      width: 180,
    },
    {
      field: "status",
      headerName: "Статус",
      width: 180,
    },
    {
      field: "host",
      headerName: "Хозяин",
      width: 180,
    },
    {
      field: "visitor",
      headerName: "Гость",
      width: 180,
    },
    {
      field: "score",
      headerName: "Счет",
      width: 180,
    },
  ];
  const checkid = (check) => {
    return check;
  };
  const rows = matches.map((match) => ({
    id: checkid(match.id),
    date: new Date(match.utcDate).toLocaleDateString(),
    time: new Date(match.utcDate).toLocaleTimeString(),
    status: statusMatches[match.status],
    host: match.homeTeam.name,
    visitor: match.awayTeam.name,
    score: `${checkScore(match.score.fullTime.homeTeam)} : ${checkScore(
      match.score.fullTime.awayTeam
    )}`,
  }));

  return (
    <Box sx={{ height: "70vh", marginLeft: 4, marginRight: 4 }}>
      <DataGrid
        rowHeight={35}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[12, 100]}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-row:hover": {
            color: "primary.main",
            fontWeight: "bold",
          },
        }}
      />
    </Box>
  );
}

export default DataGridMatches;
