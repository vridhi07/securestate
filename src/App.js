import { Routes, Route } from "react-router-dom";
import {
  Layout,
  Login,
  SignUp,
  Dashboard,
  Assets,
  Pentests,
  Inbox,
  Customer,
  Users,
  Wallet,
  Invoices,
  Profile,
  Settings,
} from "./Pages/Index";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="assets" element={<Assets />} />
        <Route path="pentests" element={<Pentests />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="customer" element={<Customer />} />
        <Route path="users" element={<Users />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
