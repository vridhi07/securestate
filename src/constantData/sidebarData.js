import HomeIcon from "@mui/icons-material/Home";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from "@mui/icons-material/Settings";
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
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
    icon: <CurrencyExchangeIcon sx={color} />,
    icon2: <CurrencyExchangeIcon sx={color2} />,
  },
  {
    path: "pentests",
    linkName: "PENTEST",
    icon: <FactCheckIcon sx={color} />,
    icon2: <FactCheckIcon sx={color2} />,
  },
  {
    path: "inbox",
    linkName: "INBOX",
    icon: <InboxRoundedIcon sx={color} />,
    icon2: <InboxRoundedIcon sx={color2} />,
  },
  {
    path: "customer",
    linkName: "CUSTOMER",
    icon: <PersonIcon sx={color} />,
    icon2: <PersonIcon sx={color2} />,
  },
  {
    path: "users",
    linkName: "USERS",
    icon: <PeopleIcon sx={color} />,
    icon2: <PeopleIcon sx={color2} />,
  },
  {
    path: "wallet",
    linkName: "WALLET",
    icon: <AccountBalanceWalletIcon sx={color} />,
    icon2: <AccountBalanceWalletIcon sx={color2} />,
  },
  {
    path: "invoices",
    linkName: "INVOICES",
    icon: <DescriptionIcon sx={color} />,
    icon2: <DescriptionIcon sx={color2} />,
  },
  {
    path: "profile",
    linkName: "PROFILE",
    icon: <PersonIcon sx={color} />,
    icon2: <PersonIcon sx={color2} />,
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
  },
  {
    path: "assets",
    linkName: "ASSETS",
    icon: <CurrencyExchangeIcon sx={color} />,
  },
  {
    path: "pentests",
    linkName: "PENTEST",
    icon: <FactCheckIcon sx={color} />,
  },
  {
    path: "inbox",
    linkName: "INBOX",
    icon: <InboxRoundedIcon sx={color} />,
  },

  {
    path: "invoices",
    linkName: "INVOICES",
    icon: <PersonIcon sx={color} />,
  },
  {
    path: "profile",
    linkName: "PROFILE",
    icon: <PeopleIcon sx={color} />,
  },
  {
    path: "settings",
    linkName: "SETTINGS",
    icon: <AccountBalanceWalletIcon sx={color} />,
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
