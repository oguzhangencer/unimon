import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomersTable } from "./pages/CustomersTable";
import { Dashboard } from "./pages/Dashboard";
import { Packages } from "./pages/Packages";
import { Settings } from "./pages/Settings";
import { Sidebar } from "./components/Sidebar";
import { CustomerLocation } from "./pages/UserLocation";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customerLocation" element={<CustomerLocation />} />
            <Route path="/customers" element={<CustomersTable />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
