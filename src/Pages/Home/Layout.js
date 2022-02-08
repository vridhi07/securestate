import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { sidebarData } from "../../constantData/sidebarData";
import { NavLink, useLocation } from "react-router-dom";
import logoImage from "../../constantData/images/White_logo_No_background.png";
import Loader from "../../Component/Common/Loader";
// import { getRole } from "../../Service/localStorage";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/action/index";
import dummyProfilePic from "../../constantData/images/dummyProfilePic.jpg";
import IsOnlinePage from "../../Component/Common/IsOnline";
import * as Roles from "../../constantData/Roles";
const drawerWidth = 270;
// console.log(getRole());
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#F27931",
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
  background: "#F27931",
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

export default function MiniDrawer() {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [userMenu, setUserMenu] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const menuOpen = Boolean(userMenu);
  const dispatch = useDispatch();
  const IsOnline = navigator.onLine;
  const [isOnlineTrue, setIsOnlineTrue] = useState();
  const { userDetails, isLoading } = useSelector((state) => state?.user);
  // console.log(IsOnline);
  // console.log(userDetails);
  // const loading = true;

  useEffect(() => {
    setIsOnlineTrue(IsOnline);
  }, [IsOnline]);
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (pathname === "/") {
      navigate("dashboard");
    }
  }, [pathname]);

  useEffect(() => {
    if (token) {
      // console.log(token, "======");
      dispatch(actions.UserDetailsRequest());
    }
  }, []);

  useEffect(() => {
    if (userDetails?.role && userDetails?.role === Roles.superAdmin) {
      dispatch(actions.CompanyRequest());
    }
  }, [userDetails?.role]);
  let newPathname = pathname.split("").slice(1).join("");
  // console.log(newPathname);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleUserMenu = (event) => {
    setUserMenu(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setUserMenu(null);
  };

  const handleLogout = () => {
    dispatch(actions.LogOut());
    localStorage.clear();
    // window.location.replace("/home");
    handleCloseUserMenu();
    navigate("./home");
  };

  const handleProfileSetting = () => {
    handleCloseUserMenu();
    navigate("profile");
  };
  useEffect(() => {
    if (token === null) {
      dispatch(actions.LogOut());
      navigate("/home");
    }
  }, [token]);
  if (isLoading) {
    return <Loader />;
  }
  if (!isOnlineTrue) {
    return <IsOnlinePage />;
  }
  const sideBarData = sidebarData(userDetails?.role);

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
            {isLoading ? (
              <div className="mr-3">
                <CircularProgress />
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <div id="person" className="h-12 w-12 mx-4  rounded-full ">
                  <img
                    src={
                      userDetails?.profilepic &&
                      userDetails?.profilepic !== "profilepic"
                        ? userDetails?.profilepic
                        : dummyProfilePic
                    }
                    className="w-full h-12 rounded-full object-cover"
                    alt="profile"
                  />
                </div>
                <header
                  className="max-h-12 flex items-center overflow-hidden cursor-pointer"
                  onClick={handleUserMenu}
                >
                  <h4 className="text-orange-cus-1 uppercase text-left tracking-widest  text-xl">
                    {userDetails?.name}
                  </h4>
                  <span>
                    <KeyboardArrowDownIcon />
                  </span>
                </header>
                <Menu
                  id="basic-menu"
                  anchorEl={userMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={menuOpen}
                  onClose={handleCloseUserMenu}
                  MenuListProps={{
                    "aria-labelledby": "person",
                  }}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  <MenuItem onClick={handleProfileSetting}>
                    Profile setting
                  </MenuItem>
                </Menu>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        // style={{ backgroundColor: "red !important" }}
        // sx={{ backgroundColor: "red !important" }}

        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <button onClick={handleDrawerClose}>
            <MenuIcon sx={{ color: "white", fontSize: "2rem" }} />
          </button>
          <div className="pr-12 object-fill">
            <img src={logoImage} alt="logo" className="h-12 w-32" />
          </div>
        </DrawerHeader>
        <Divider />

        <List
          sx={{
            // ...(open === true && { background: "#F9F9F9" }),
            // ...(open === false && { background: "#FEF8F5" }),
            // ...(sideBarData === "client" && { height: "100vh" }),
            paddingTop: 2,
          }}
        >
          {sideBarData &&
            sideBarData.map((item) => (
              <NavLink
                className={`flex justify-center  items-center ${
                  item.path === newPathname && "bg-[#FCE4D7] rounded-md "
                } ${open && "mx-3"}`}
                key={item.path}
                to={item.path}
              >
                <ListItem button>
                  <ListItemIcon>
                    {item.path === newPathname ? item.icon2 : item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.linkName}
                    sx={{
                      color: "white",
                      ...(item.path === newPathname && { color: "#565658" }),
                    }}
                  />
                </ListItem>
              </NavLink>
            ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#F3F2FA",
          minHeight: "100vh",
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}
