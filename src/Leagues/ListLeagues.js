import { Grid } from "@mui/material";
import CardLeague from "./CardLeague.js";

function ListLeagues({ paginatedLeagues }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      {paginatedLeagues.map((league) => (
        <CardLeague
          idLeague={league.id}
          name={league.area.name}
          country={league.name}
          flag={league.area.ensignUrl}
        />
      ))}
    </Grid>
  );
}

export default ListLeagues;
