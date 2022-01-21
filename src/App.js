import { Routes, Route } from "react-router-dom";
import {
  Layout,
  Login,
  SignUp,
  Dashboard,
  Assets,
  AssetsIndex,
  AssetTabs,
  DetailsTab,
  FilesTab,
  HistoryTab,
  SBOMTab,
  Pentests,
  PentestIndex,
  PentestTabs,
  PentestOverview,
  PentestScope,
  PentestFinding,
  PentestChat,
  Inbox,
  Customer,
  Users,
  Wallet,
  Invoices,
  Profile,
  Settings,
  ErrorPage,
  PrivateRoute,
  AdminPrivateRoute,
  Home,
} from "./Pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
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
          <Route path=":assetId" element={<AssetTabs />}>
            <Route path="details" element={<DetailsTab />} />
            <Route path="files" element={<FilesTab />} />
            <Route path="history" element={<HistoryTab />} />
            <Route path="sbom" element={<SBOMTab />} />
          </Route>
        </Route>
        <Route path="pentests" element={<Pentests />}>
          <Route index element={<PentestIndex />} />
          <Route path=":id" element={<PentestTabs />}>
            <Route path="overview" element={<PentestOverview />} />
            <Route path="scope" element={<PentestScope />} />
            <Route path="findings" element={<PentestFinding />} />
            <Route path="chat" element={<PentestChat />} />
          </Route>
        </Route>
        <Route path="inbox" element={<Inbox />} />
        <Route
          path="customer"
          element={
            <AdminPrivateRoute>
              <Customer />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="users"
          element={
            <AdminPrivateRoute>
              <Users />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="wallet"
          element={
            <AdminPrivateRoute>
              <Wallet />
            </AdminPrivateRoute>
          }
        />
        <Route path="invoices" element={<Invoices />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
