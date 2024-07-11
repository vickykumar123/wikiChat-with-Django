import {Box, styled, useMediaQuery, useTheme} from "@mui/material";
import React, {useEffect, useState} from "react";
import DrawToggle from "../../components/PrimaryDraw/DrawToggle";
import MuiDrawer from "@mui/material/Drawer";

type Props = {
  children: React.ReactNode;
};

type ChildProps = {
  open: boolean;
};

type ChildElement = React.ReactElement<ChildProps>;
export default function PrimaryAppDraw({children}: Props) {
  const theme = useTheme();
  const below600 = useMediaQuery("(max-width:599px)");
  const [open, setOpen] = useState(below600);

  const openedMixin = () => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });
  const closedMixin = () => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    width: theme.primaryDraw?.closed,
  });

  const Drawer = styled(
    MuiDrawer,
    {}
    // @ts-expect-error Something related to the Drawer component
  )(({theme, open}) => ({
    width: theme.primaryDraw?.width,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(),
      "& .MuiDrawer-paper": openedMixin(),
    }),
    ...(!open && {
      ...closedMixin(),
      "& .MuiDrawer-paper": closedMixin(),
    }),
  }));
  useEffect(() => {
    setOpen(!below600);
  }, [below600]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      variant={below600 ? "temporary" : "permanent"}
      open={open}
      PaperProps={{
        sx: {
          mt: `${theme.primaryAppBar?.height}px`,
          height: `calc(100vh - ${theme.primaryAppBar?.height}px)`,
          width: theme.primaryDraw?.width,
        },
      }}
    >
      <Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            p: 0,
            width: open ? "auto" : "100%",
          }}
        >
          <DrawToggle
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
        </Box>
        {React.Children.map(children, (child) => {
          return React.isValidElement(child)
            ? React.cloneElement(child as ChildElement, {open})
            : child;
        })}
      </Box>
    </Drawer>
  );
}
