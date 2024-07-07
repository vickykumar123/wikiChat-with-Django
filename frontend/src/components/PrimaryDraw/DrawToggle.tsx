import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {Box, IconButton} from "@mui/material";

type Props = {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
};

export default function DrawToggle({
  open,
  handleDrawerClose,
  handleDrawerOpen,
}: Props) {
  return (
    <Box
      sx={{
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
        {open ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
    </Box>
  );
}
