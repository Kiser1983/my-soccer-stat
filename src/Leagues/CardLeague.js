import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DefaultImg from "../Images/noimg.png";

function CardLeague({ idLeague, name, country, flag }) {
  const leagueLink = `/leagues/${idLeague}/matches`;
  if (!flag) {
    flag = DefaultImg;
  }
  return (
    <Grid xs={3} md={3} margin={2} >
      <Card
        raised
        sx={{
          maxWidth: 350,
          borderRadius: "16px",
          ":hover": {
            boxShadow: "0 0 0.5rem 0.1rem #1976d2",
          },
        }}
      >
        <CardActionArea component={Link} to={leagueLink}>
          <CardMedia
            component="img"
            alt="League"
            src={flag}
            sx={{
              marginTop: 1,
              width: "100%",
              height: "140px",
              objectFit: "contain",
            }}
          />

          <Typography
            variant="inherit"
            marginTop={1}
            sx={{ fontWeight: "bold", color: "primary.main"}}
          >
            {country}
          </Typography>

          <Typography variant="body2" color="primary.main" marginBottom={1}>
            {name}
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardLeague;
