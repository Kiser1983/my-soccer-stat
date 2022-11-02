import { Box } from "@mui/material";
import loadImg from "../Images/loading.gif";

function Loading() {
  console.log("Loading.........");
  return (
    <Box marginTop={4}>
      <img src={loadImg} />
    </Box>
  );
}

export default Loading;
