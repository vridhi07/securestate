import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import {
  Layout,
  Login,
  SignUp,
  // AssetTabs,
  DetailsTab,
  FilesTab,
  HistoryTab,
  SBOMTab,
  PentestIndex,
  PentestTabs,
  PentestOverview,
  PentestScope,
  PentestFinding,
  PentestChat,
  Settings,
  ErrorPage,
  PrivateRoute,
  AdminPrivateRoute,
  Home,
} from "./Pages/Index";
import WalletPrivateRoute from "./Pages/WalletPrivateRoute";
import InvoicePrivateRoute from "./Pages/InvoicePrivateRoute";
import defaultAxios from "./Service/defaultAxios";
const Dashboard = lazy(() => import("./Pages/SidePages/Dashboard/Dashboard"));
const Assets = lazy(() => import("./Pages/SidePages/Assets/Assets"));
const AssetsIndex = lazy(() => import("./Pages/SidePages/Assets/AssetsIndex"));
const AssetTabs = lazy(() => import("./Pages/SidePages/Assets/AssetTabs"));
const Pentests = lazy(() => import("./Pages/SidePages/Pentest/Pentests"));
const Inbox = lazy(() => import("./Pages/SidePages/Inbox/Inbox"));
const Customer = lazy(() => import("./Pages/SidePages/Customer/Customer"));
const Users = lazy(() => import("./Pages/SidePages/User/Users"));
const Invoices = lazy(() => import("./Pages/SidePages/Invoice/Invoices"));
const Wallet = lazy(() => import("./Pages/SidePages/wallet/Wallet"));
const Profile = lazy(() => import("./Pages/SidePages/Profile/Profile"));
defaultAxios();
// response();
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<>...</>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/assets"
          element={
            <Suspense fallback={<>...</>}>
              <Assets />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<>...</>}>
                <AssetsIndex />
              </Suspense>
            }
          />
          <Route
            path=":assetId"
            element={
              <Suspense fallback={<>...</>}>
                <AssetTabs />
              </Suspense>
            }
          >
            <Route path="details" element={<DetailsTab />} />
            <Route path="files" element={<FilesTab />} />
            <Route path="history" element={<HistoryTab />} />
            <Route path="sbom" element={<SBOMTab />} />
          </Route>
        </Route>
        <Route
          path="/pentests"
          element={
            <Suspense fallback={<>...</>}>
              <Pentests />
            </Suspense>
          }
        >
          <Route index element={<PentestIndex />} />
          <Route path=":id" element={<PentestTabs />}>
            <Route path="overview" element={<PentestOverview />} />
            <Route path="scope" element={<PentestScope />} />
            <Route path="findings" element={<PentestFinding />} />
            <Route path="chat" element={<PentestChat />} />
          </Route>
        </Route>
        <Route
          path="/inbox"
          element={
            <Suspense fallback={<>...</>}>
              <Inbox />
            </Suspense>
          }
        />
        <Route
          path="/customer"
          element={
            <AdminPrivateRoute>
              <Suspense fallback={<>...</>}>
                <Customer />
              </Suspense>
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <AdminPrivateRoute>
              <Suspense fallback={<>...</>}>
                <Users />
              </Suspense>
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/wallet"
          element={
            <WalletPrivateRoute>
              <Suspense fallback={<>...</>}>
                <Wallet />
              </Suspense>
            </WalletPrivateRoute>
          }
        />
        <Route
          path="/invoices"
          element={
            <InvoicePrivateRoute>
              <Suspense fallback={<>...</>}>
                <Invoices />
              </Suspense>
            </InvoicePrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<>...</>}>
              <Profile />
            </Suspense>
          }
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
