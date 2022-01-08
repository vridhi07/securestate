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
  EditAssest,
  AssetsIndex,
  ErrorPage,
  PrivateRoute,
  PentestIndex,
} from "./Pages/Index";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="assets" element={<Assets />}>
          <Route index element={<AssetsIndex />} />
          <Route path="editassest" element={<EditAssest />} />
        </Route>
        <Route path="pentests" element={<Pentests />}>
          <Route index element={<PentestIndex />} />
        </Route>
        <Route path="inbox" element={<Inbox />} />
        <Route path="customer" element={<Customer />} />
        <Route path="users" element={<Users />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
