import {Box, Typography, useTheme} from "@mui/material";
import useAxiosWithInterceptor from "../../helpers/jwtinterceptor";

export default function SecondaryDraw() {
  const theme = useTheme();
  const jwtInterceptor = useAxiosWithInterceptor();
  jwtInterceptor
    .get("http://127.0.0.1:8000/api/server/select/?category=Cat-1")
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
  return (
    <Box
      sx={{
        mt: `${theme.primaryAppBar?.height}px`,
        minWidth: `${theme.secondaryDraw?.width}px`,
        height: `calc(100vh - ${theme.primaryAppBar?.height}px)`,
        borderRight: `1px solid ${theme.palette.divider}`,
        display: {xs: "none", sm: "block"},
        overflow: "auto",
      }}
    >
      {[...Array(50)].map((_, i) => (
        <Typography key={i} paragraph>
          {i + 1}
        </Typography>
      ))}
    </Box>
  );
}
