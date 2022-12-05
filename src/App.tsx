import { Route, Routes } from "react-router-dom";
import { CustomerLocation } from "./pages/CustomerLocation";
import { CustomersTable } from "./pages/CustomersTable";
import { Dashboard } from "./pages/Dashboard";
import { Packages } from "./pages/Packages";
import { Settings } from "./pages/Settings";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customerLocation" element={<CustomerLocation />} />
        <Route path="/customersTable" element={<CustomersTable />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
