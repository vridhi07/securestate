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
import SearchIcon from "@mui/icons-material/Search";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { sidebarData } from "../../constantData/sidebarData";
import { NavLink, useLocation } from "react-router-dom";
import logoImage from "../../constantData/images/White_logo_No_background.png";
import Loader from "../../Component/Common/Loader";
// import { getRole } from "../../Service/localStorage";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/action/index";
import { getAuthToken } from "../../Service/localStorage";
const drawerWidth = 270;
// console.log(getRole());
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

export default function MiniDrawer() {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [userMenu, setUserMenu] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const menuOpen = Boolean(userMenu);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { userDetails, isLoading } = state?.user;
  // console.log(userDetails);
  // const loading = true;
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
      dispatch(actions.CompanyRequest());
    }
  }, []);

  const { companyDetails } = state?.company;
  useEffect(() => {
    if (userDetails?.role === "superAdmin") {
      dispatch(actions.GetSelectedCompany(companyDetails[0]?._id));
    } else {
      dispatch(actions.GetSelectedCompany(userDetails?.company_id?._id));
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
    window.location.replace("/home");
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
                <header className="max-h-12 overflow-hidden">
                  <h4 className="text-orange-cus-1 uppercase text-left tracking-widest  text-xl">
                    {userDetails?.user_name}
                  </h4>
                  <p className="text-right text-orange-cus-1 capitalize">
                    {pathname === "/profile" ? null : "account settings"}
                  </p>
                </header>
                <div
                  id="person"
                  onClick={handleUserMenu}
                  className="h-11 mx-4 w-11 overflow-x-hidden rounded-full border border-gray-600 grid place-content-center cursor-pointer"
                >
                  <PersonIcon />
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={userMenu}
                  open={menuOpen}
                  onClose={handleCloseUserMenu}
                  MenuListProps={{
                    "aria-labelledby": "person",
                  }}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
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
              ? " px-4 bg-gray-cus-2  pt-4"
              : " px-4 pb-3 transition-all hover:bg-gray-hover  bg-orange-cus-2  pt-4 "
          } hover:cursor-pointer flex justify-center items-center`}
          onClick={handleDrawerOpen}
        >
          {open ? (
            <div className="border flex items-center">
              <span>
                <SearchIcon sx={{ color: "#F67A32", ml: 0.9 }} />
              </span>
              <input
                type="text"
                className=" border-0 focus:bg-none focus:outline-none focus:ring-0 bg-gray-cus-2  placeholder:text-orange-cus-1 py-2 pl-3"
                placeholder="Search..."
              />
            </div>
          ) : (
            <button className="md:mr-3 mr-3">
              <SearchIcon className=" text-2xl text-orange-cus-1" />
            </button>
          )}
        </div>
        <List
          sx={{
            ...(open === true && { background: "#F9F9F9" }),
            ...(open === false && { background: "#FEF8F5" }),
            paddingTop: 0,
          }}
        >
          {sidebarData(userDetails?.role).map((item) => (
            <NavLink
              className={`flex ${item.path === newPathname && "bg-slate-300"}`}
              key={item.path}
              to={item.path}
            >
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
