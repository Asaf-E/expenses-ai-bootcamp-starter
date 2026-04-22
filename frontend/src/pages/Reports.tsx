import { useEffect, useState } from "react";

import { fetchReports, type Report } from "../api/client";
import ReportList from "../components/ReportList";

export default function Reports() {
  const [reports, setReports] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadReports = async () => {
      try {
        const nextReports = await fetchReports();

        if (!isMounted) {
          return;
        }

        setReports(nextReports);
      } catch (caughtError) {
        if (!isMounted) {
          return;
        }

        const message =
          caughtError instanceof Error ? caughtError.message : "Failed to load reports.";

        setError(message);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadReports();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="page-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Reports</p>
          <h2>Expense report list</h2>
        </div>
        <p className="section-note">Only the view flow is implemented in this starter.</p>
      </div>

      {isLoading ? <p className="empty-state">Loading reports...</p> : null}
      {error ? <p className="error-message">{error}</p> : null}
      {!isLoading && !error ? <ReportList reports={reports} /> : null}
    </section>
  );
}

