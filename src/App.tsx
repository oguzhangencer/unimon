import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsersTable } from "./pages/UsersTable";
import { Dashboard } from "./pages/Dashboard";
import { Packages } from "./pages/Packages";
import { Settings } from "./pages/Settings";
import { Sidebar } from "./components/Sidebar";
import { CustomerLocation } from "./pages/UserLocation";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customerLocation" element={<CustomerLocation />} />
        <Route path="/customers" element={<UsersTable />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
