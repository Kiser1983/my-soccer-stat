import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DefaultImg from "../Images/noimg.png";

function CardTeam({ idTeam, name, image }) {
  const teamLink = `/teams/${idTeam}/matches`;
  if (!image) {
    image = DefaultImg;
  }
  return (
    <Grid xs={5} md={2} margin={2}>
      <Card
        raised
        sx={{
          maxWidth: 350,
          minHeight: 230,
          maxHeight: 230,
          borderRadius: "16px",
          ":hover": {
            boxShadow: "0 0 0.5rem 0.1rem #1976d2",
          },
        }}
      >
        <CardActionArea component={Link} to={teamLink}>
          <CardMedia
            component="img"
            alt={name}
            src={image}
            height="150px"
            sx={{ objectFit: "contain", marginTop: 2, marginBottom: 2 }}
          />
          <Typography variant="body2" color="primary.main" fontWeight="bold">
            {name}
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardTeam;
