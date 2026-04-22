import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { fetchReportById, type Report } from "../api/client";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default function ReportDetail() {
  const { id } = useParams();
  const [report, setReport] = useState<Report | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("A report id is required.");
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    const loadReport = async () => {
      try {
        const nextReport = await fetchReportById(id);

        if (!isMounted) {
          return;
        }

        setReport(nextReport);
      } catch (caughtError) {
        if (!isMounted) {
          return;
        }

        const message =
          caughtError instanceof Error ? caughtError.message : "Failed to load report details.";

        setError(message);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadReport();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <section className="page-section">
      <Link className="back-link" to="/reports">
        Back to reports
      </Link>

      {isLoading ? <p className="empty-state">Loading report details...</p> : null}
      {error ? <p className="error-message">{error}</p> : null}

      {report ? (
        <article className="detail-card">
          <p className="eyebrow">Report Detail</p>
          <h2>{report.title}</h2>

          <dl className="detail-grid">
            <div>
              <dt>Report ID</dt>
              <dd>{report.id}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{report.status}</dd>
            </div>
            <div>
              <dt>Amount</dt>
              <dd>{currencyFormatter.format(report.amount)}</dd>
            </div>
          </dl>
        </article>
      ) : null}
    </section>
  );
}

