import { Grid } from "@mui/material";
import CardTeam from "./CardTeam";

function ListTeams({ paginatedTeams }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      {paginatedTeams.map((team) => (
        <CardTeam idTeam={team.id} name={team.name} image={team.crestUrl} />
      ))}
    </Grid>
  );
}

export default ListTeams;
