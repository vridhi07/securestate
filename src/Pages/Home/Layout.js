import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import { Outlet } from "react-router-dom";

import { sidebarData } from "../../constantData/sidebarData";
import { NavLink } from "react-router-dom";
const drawerWidth = 270;

let PathName = window.location.pathname;
console.log(PathName);
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  background: "#F67A32",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const BelowAppBar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", background: "white" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            background: "white",
            color: "black",
            paddingLeft: "0 !important",
          }}
        >
          <div
            className={
              open
                ? "bg-white"
                : "h-16 md:w-16.6  w-15 bg-orange-500 flex justify-center items-center"
            }
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                // marginRight: "36px",
                ...(open && { display: "none" }),
                paddingLeft: "1rem",
                color: "white",
              }}
              disableRipple
            >
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </div>
          <div className="ml-auto">hello</div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <button onClick={handleDrawerClose}>
            <MenuIcon sx={{ color: "white", fontSize: "2rem" }} />
          </button>
          <div className="pl-16">
            <h2 className="text-white capitalize tracking-widest">
              Secure <br />
              State.IC
            </h2>
          </div>
        </DrawerHeader>
        <Divider />
        <div className="flex px-4  justify-center items-center pt-4">
          {open ? (
            <div className="border py-2 flex border-black">
              <span>
                <SearchIcon sx={{ color: "#F67A32" }} />
              </span>
              <input
                type="text"
                className=" focus:outline-none  placeholder:text-orange-cus-1"
                placeholder="Search..."
              />
            </div>
          ) : (
            <h2 className="md:mr-2" onClick={handleDrawerOpen}>
              <SearchIcon className=" text-2xl text-orange-cus-1" />
            </h2>
          )}
        </div>
        <List>
          {sidebarData.map((item) => (
            <ListItem button key={item.path} className="bg-red-300">
              <NavLink to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
              </NavLink>

              <NavLink to={item.path}>
                <ListItemText
                  primary={item.linkName}
                  sx={{ color: "#F67A32" }}
                />
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <BelowAppBar />
        <Outlet />
      </Box>
    </Box>
  );
}
