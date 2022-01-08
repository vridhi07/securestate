import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { sidebarData } from "../../constantData/sidebarData";
import { NavLink } from "react-router-dom";
import logoImage from "../../constantData/images/White_logo_No_background.png";
const drawerWidth = 270;

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
  justifyContent: "space-between",
  background: "#F67A32",
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

let PathName = window.location.pathname;
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (PathName === "/") {
      navigate("dashboard");
    }
  }, []);

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
                : "h-16 sm:w-16.6  w-15 bg-orange-500 flex justify-center items-center"
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
          <div className="ml-auto">
            <div className="flex justify-center items">
              <header className="max-h-12 overflow-hidden">
                <h2 className="text-orange-cus-1 text-left tracking-widest">
                  AARON PARKER
                </h2>
                <p className="text-right text-orange-cus-1 capitalize">
                  account settings
                </p>
              </header>
              <div className="h-11 mx-4 w-11 overflow-x-hidden rounded-full border border-gray-600 grid place-content-center">
                <PersonIcon />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <button onClick={handleDrawerClose}>
            <MenuIcon sx={{ color: "white", fontSize: "2rem" }} />
          </button>
          <div className="pr-12 object-fill">
            <img src={logoImage} className="h-12 w-32" />
          </div>
        </DrawerHeader>
        <Divider />
        <div
          className={`${
            open
              ? "flex px-4 bg-gray-cus-2 justify-center items-center pt-4"
              : "flex px-4 pb-3 transition-all hover:bg-gray-hover hover:cursor-pointer bg-orange-cus-2 justify-center items-center pt-4"
          }`}
          onClick={handleDrawerOpen}
        >
          {open ? (
            <div className="border py-2 flex border-black">
              <span>
                <SearchIcon sx={{ color: "#F67A32" }} />
              </span>
              <input
                type="text"
                className=" focus:outline-none bg-gray-cus-2  placeholder:text-orange-cus-1"
                placeholder="Search..."
              />
            </div>
          ) : (
            <h2 className="md:mr-3 mr-3">
              <SearchIcon className=" text-2xl text-orange-cus-1" />
            </h2>
          )}
        </div>
        <List
          sx={{
            ...(open === true && { background: "#F9F9F9" }),
            ...(open === false && { background: "#FEF8F5" }),
            paddingTop: 0,
          }}
        >
          {sidebarData.map((item) => (
            <NavLink className="flex" key={item.path} to={item.path}>
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.linkName}
                  sx={{ color: "#F67A32" }}
                />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
