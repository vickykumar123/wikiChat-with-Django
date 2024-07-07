import {Box, CssBaseline} from "@mui/material";
import PrimaryAppBar from "./templates/PrimaryAppBar";
import PrimaryAppDraw from "./templates/PrimaryAppDraw";
import SecondaryDraw from "./templates/SecondaryDraw";
import Main from "./templates/Main";

export default function Home() {
  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <PrimaryAppBar />
      <PrimaryAppDraw></PrimaryAppDraw>
      <SecondaryDraw />
      <Main />
    </Box>
  );
}
