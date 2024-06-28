import {Box, CssBaseline} from "@mui/material";
import PrimaryAppBar from "./templates/PrimaryAppBar";

export default function Home() {
  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <PrimaryAppBar />
      Home
    </Box>
  );
}
