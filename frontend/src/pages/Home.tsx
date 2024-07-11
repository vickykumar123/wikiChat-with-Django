import {Box, CssBaseline} from "@mui/material";
import PrimaryAppBar from "./templates/PrimaryAppBar";
import PrimaryAppDraw from "./templates/PrimaryAppDraw";
import SecondaryDraw from "./templates/SecondaryDraw";
import Main from "./templates/Main";
import PopularChannels from "../components/PrimaryDraw/PopularChannels";

export default function Home() {
  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <PrimaryAppBar />
      <PrimaryAppDraw>
        <PopularChannels />
      </PrimaryAppDraw>
      <SecondaryDraw />
      <Main />
    </Box>
  );
}
