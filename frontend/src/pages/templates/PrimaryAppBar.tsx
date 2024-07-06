import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useEffect, useState} from "react";
export default function PrimaryAppBar() {
  const [sideMenu, setSideMenu] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    if (isSmallScreen && sideMenu) {
      setSideMenu(false);
    }
  }, [isSmallScreen]);

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.divider}`,
        zIndex: (theme) => theme.zIndex.drawer + 2,
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          height: theme.primaryAppBar?.height,
          minHeight: theme.primaryAppBar?.height,
        }}
      >
        <Box sx={{display: {xs: "block", sm: "none"}}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{mr: 2}}
            onClick={() => setSideMenu(!sideMenu)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Drawer
          anchor="left"
          open={sideMenu}
          onClose={() => setSideMenu(false)}
        >
          {[...Array(50)].map((_, i) => (
            <Typography key={i} paragraph>
              {i + 1}
            </Typography>
          ))}
        </Drawer>
        {/* Link from MUI */}
        <Link href="/" underline="none" color="inherit">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{display: {fontWeight: 700, letterSpacing: "-0.5px"}}}
          >
            wikiChat
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
