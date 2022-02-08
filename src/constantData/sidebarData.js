import HomeIcon from "@mui/icons-material/Home";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ImageIcon from "@mui/icons-material/Image";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AnalyticsIcon from "@mui/icons-material/Analytics";
const color = {
  fontSize: "1.5rem",
  color: "#FFFFFF",
};
export const adminSidebar = [
  {
    path: "dashboard",
    linkName: "DASHBOARD",
    icon: <HomeIcon sx={color} />,
  },
  {
    path: "assets",
    linkName: "ASSETS",
    icon: <FileCopyIcon sx={color} />,
  },
  {
    path: "pentests",
    linkName: "PENTEST",
    icon: <AnalyticsIcon sx={color} />,
  },
  {
    path: "inbox",
    linkName: "INBOX",
    icon: <InboxIcon sx={color} />,
  },
  {
    path: "customer",
    linkName: "CUSTOMER",
    icon: <ImageIcon sx={color} />,
  },
  {
    path: "users",
    linkName: "USERS",
    icon: <ContactPageIcon sx={color} />,
  },
  {
    path: "wallet",
    linkName: "WALLET",
    icon: <MonetizationOnIcon sx={color} />,
  },
  {
    path: "invoices",
    linkName: "INVOICES",
    icon: <MonetizationOnIcon sx={color} />,
  },
  {
    path: "profile",
    linkName: "PROFILE",
    icon: <GroupIcon sx={color} />,
  },
  {
    path: "settings",
    linkName: "SETTINGS",
    icon: <SettingsIcon sx={color} />,
  },
];

export const clientSidebar = [
  {
    path: "dashboard",
    linkName: "DASHBOARD",
    icon: <HomeIcon sx={color} />,
  },
  {
    path: "assets",
    linkName: "ASSETS",
    icon: <FileCopyIcon sx={color} />,
  },
  {
    path: "pentests",
    linkName: "PENTEST",
    icon: <AnalyticsIcon sx={color} />,
  },
  {
    path: "inbox",
    linkName: "INBOX",
    icon: <InboxIcon sx={color} />,
  },

  {
    path: "invoices",
    linkName: "INVOICES",
    icon: <MonetizationOnIcon sx={color} />,
  },
  {
    path: "profile",
    linkName: "PROFILE",
    icon: <GroupIcon sx={color} />,
  },
  {
    path: "settings",
    linkName: "SETTINGS",
    icon: <SettingsIcon sx={color} />,
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
