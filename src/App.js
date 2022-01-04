import { Routes, Route } from "react-router-dom";
import {
  Layout,
  Login,
  SignUp,
  Dashboard,
  Assets,
  Pentests,
  Inbox,
  Home,
} from "./Pages/Index";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="assets" element={<Assets />} />
        <Route path="pentests" element={<Pentests />} />
        <Route path="inbox" element={<Inbox />} />
      </Route>
    </Routes>
  );
}

export default App;
