export default function Dashboard() {
  return (
    <section className="page-section">
      <div className="hero-card">
        <p className="eyebrow">Starter Scope</p>
        <h2>One complete flow, room for the rest</h2>
        <p>
          This project is intentionally minimal. It includes a working reports list, seeded
          backend data, and enough structure for participants to keep building.
        </p>
      </div>

      <div className="info-grid">
        <article className="info-card">
          <h3>Working now</h3>
          <p>Routing, backend API, in-memory data, and a reports list page connected end to end.</p>
        </article>

        <article className="info-card">
          <h3>Build next</h3>
          <p>Create, edit, approvals, auth, notifications, and a stronger visual design.</p>
        </article>

        <article className="info-card">
          <h3>Bootcamp fit</h3>
          <p>The baseline stays readable and small so teams can confidently extend it.</p>
        </article>
      </div>
    </section>
  );
}

