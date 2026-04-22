import { Link } from "react-router-dom";

import type { Report } from "../api/client";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

interface ReportListProps {
  reports: Report[];
}

export default function ReportList({ reports }: ReportListProps) {
  if (reports.length === 0) {
    return <p className="empty-state">No reports available yet.</p>;
  }

  return (
    <ul className="report-list">
      {reports.map((report) => (
        <li key={report.id} className="report-card">
          <div className="report-card-header">
            <div>
              <h3>{report.title}</h3>
              <p className="report-id">{report.id}</p>
            </div>
            <span className={`status-pill status-${report.status.toLowerCase()}`}>{report.status}</span>
          </div>

          <div className="report-card-footer">
            <strong>{currencyFormatter.format(report.amount)}</strong>
            <Link to={`/reports/${report.id}`}>View details</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

