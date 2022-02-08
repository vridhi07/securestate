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
const color2 = {
  fontSize: "1.5rem",
  color: "#F27931",
};
export const adminSidebar = [
  {
    path: "dashboard",
    linkName: "DASHBOARD",
    icon: <HomeIcon sx={color} />,
    icon2: <HomeIcon sx={color2} />,
  },
  {
    path: "assets",
    linkName: "ASSETS",
    icon: <FileCopyIcon sx={color} />,
    icon2: <FileCopyIcon sx={color2} />,
  },
  {
    path: "pentests",
    linkName: "PENTEST",
    icon: <AnalyticsIcon sx={color} />,
    icon2: <AnalyticsIcon sx={color2} />,
  },
  {
    path: "inbox",
    linkName: "INBOX",
    icon: <InboxIcon sx={color} />,
    icon2: <InboxIcon sx={color2} />,
  },
  {
    path: "customer",
    linkName: "CUSTOMER",
    icon: <ImageIcon sx={color} />,
    icon2: <ImageIcon sx={color2} />,
  },
  {
    path: "users",
    linkName: "USERS",
    icon: <ContactPageIcon sx={color} />,
    icon2: <ContactPageIcon sx={color2} />,
  },
  {
    path: "wallet",
    linkName: "WALLET",
    icon: <MonetizationOnIcon sx={color} />,
    icon2: <MonetizationOnIcon sx={color2} />,
  },
  {
    path: "invoices",
    linkName: "INVOICES",
    icon: <MonetizationOnIcon sx={color} />,
    icon2: <MonetizationOnIcon sx={color2} />,
  },
  {
    path: "profile",
    linkName: "PROFILE",
    icon: <GroupIcon sx={color} />,
    icon2: <GroupIcon sx={color2} />,
  },
  {
    path: "settings",
    linkName: "SETTINGS",
    icon: <SettingsIcon sx={color} />,
    icon2: <SettingsIcon sx={color2} />,
  },
];

export const clientSidebar = [
  {
    path: "dashboard",
    linkName: "DASHBOARD",
    icon: <HomeIcon sx={color} />,
    icon2: <HomeIcon sx={color2} />,
  },
  {
    path: "assets",
    linkName: "ASSETS",
    icon: <FileCopyIcon sx={color} />,
    icon2: <FileCopyIcon sx={color2} />,
  },
  {
    path: "pentests",
    linkName: "PENTEST",
    icon: <AnalyticsIcon sx={color} />,
    icon2: <AnalyticsIcon sx={color2} />,
  },
  {
    path: "inbox",
    linkName: "INBOX",
    icon: <InboxIcon sx={color} />,
    icon2: <InboxIcon sx={color2} />,
  },

  {
    path: "invoices",
    linkName: "INVOICES",
    icon: <MonetizationOnIcon sx={color} />,
    icon2: <MonetizationOnIcon sx={color2} />,
  },
  {
    path: "profile",
    linkName: "PROFILE",
    icon: <GroupIcon sx={color} />,
    icon2: <GroupIcon sx={color2} />,
  },
  {
    path: "settings",
    linkName: "SETTINGS",
    icon: <SettingsIcon sx={color} />,
    icon2: <SettingsIcon sx={color2} />,
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
