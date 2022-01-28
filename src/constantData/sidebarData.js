import HomeIcon from "@mui/icons-material/Home";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ImageIcon from "@mui/icons-material/Image";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AnalyticsIcon from "@mui/icons-material/Analytics";
export const adminSidebar = [
  {
    path: "dashboard",
    linkName: "DASHBOARD",
    icon: <HomeIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "assets",
    linkName: "ASSETS",
    icon: <FileCopyIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "pentests",
    linkName: "PENTEST",
    icon: <AnalyticsIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "inbox",
    linkName: "INBOX",
    icon: <InboxIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "customer",
    linkName: "CUSTOMER",
    icon: <ImageIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "users",
    linkName: "USERS",
    icon: <ContactPageIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "wallet",
    linkName: "WALLET",
    icon: <MonetizationOnIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "invoices",
    linkName: "INVOICES",
    icon: <MonetizationOnIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "profile",
    linkName: "PROFILE",
    icon: <GroupIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "settings",
    linkName: "SETTINGS",
    icon: <SettingsIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
];

export const clientSidebar = [
  {
    path: "dashboard",
    linkName: "DASHBOARD",
    icon: <HomeIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "assets",
    linkName: "ASSETS",
    icon: <FileCopyIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "pentests",
    linkName: "PENTEST",
    icon: <AnalyticsIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "inbox",
    linkName: "INBOX",
    icon: <InboxIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },

  {
    path: "invoices",
    linkName: "INVOICES",
    icon: <MonetizationOnIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "profile",
    linkName: "PROFILE",
    icon: <GroupIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
  {
    path: "settings",
    linkName: "SETTINGS",
    icon: <SettingsIcon sx={{ fontSize: "1.5rem", color: "#F67A32" }} />,
  },
];

export const sidebarData = (role) => {
  if (role === "admin") {
    return adminSidebar;
  }
  if (role === "superAdmin") {
    return adminSidebar;
  }
  if (role === "client") {
    return clientSidebar;
  }
  if (role === "hacker") {
    return clientSidebar;
  }
};
