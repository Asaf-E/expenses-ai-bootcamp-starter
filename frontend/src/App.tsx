import { NavLink, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ReportDetail from "./pages/ReportDetail";
import Reports from "./pages/Reports";

const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-link nav-link-active" : "nav-link";

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Bootcamp Starter</p>
          <h1>Expenses Reports</h1>
        </div>

        <nav className="nav-links" aria-label="Primary">
          <NavLink to="/" end className={getNavLinkClassName}>
            Dashboard
          </NavLink>
          <NavLink to="/reports" className={getNavLinkClassName}>
            Reports
          </NavLink>
        </nav>
      </header>

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/:id" element={<ReportDetail />} />
        </Routes>
      </main>
    </div>
  );
}

