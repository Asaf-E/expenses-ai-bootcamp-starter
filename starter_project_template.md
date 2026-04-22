# Minimal Starter Project Template (AI Bootcamp)

This template defines a **minimal full-stack starter project**.

It is intentionally incomplete but runnable.

Use this file with AI (e.g., Copilot) to generate the actual implementation.

---

## Goal

Create a working full-stack application with:
- React frontend (Vite)
- Backend API (Node.js Express OR Spring Boot)
- In-memory data storage
- One working end-to-end feature

The system should run locally and allow future feature extensions.

---

## Project Structure

```
project-root/
  frontend/
  backend/
  data/
  README.md
```

---

## Frontend Requirements

Framework:
- React + TypeScript + Vite

Structure:
```
frontend/src/
  main.tsx
  App.tsx
  pages/
    Dashboard.tsx
    Reports.tsx
    ReportDetail.tsx
  components/
    ReportList.tsx
  api/
    client.ts
```

Requirements:
- Basic routing (React Router)
- Simple layout (header + content)
- Reports page that calls backend API
- Display list of reports

---

## Backend Requirements

Framework:
- Node.js + Express (preferred for speed)

Structure:
```
backend/src/
  index.ts
  routes/
    reports.ts
  services/
    reportService.ts
  models/
    types.ts
  data/
    seed.ts
```

Requirements:
- Express server running on port 3001
- CORS enabled for frontend
- In-memory data store
- Seed data loaded on startup

---

## Data Model (Simplified)

Report:
- id (string)
- title (string)
- status (DRAFT | SUBMITTED | APPROVED)
- amount (number)

---

## Seed Data

Create 5–10 sample reports with different statuses.

---

## API Endpoints (Minimal)

### GET /api/reports
Returns list of reports

### GET /api/reports/:id
Returns a single report

---

## One Working Feature (Required)

Implement fully:

"View list of reports"

Flow:
- Frontend calls `/api/reports`
- Backend returns data
- UI displays list

---

## Intentionally Missing (DO NOT IMPLEMENT)

Leave these incomplete:
- Create report
- Update report
- Approval workflow
- Authentication
- Notifications

These will be built by participants.

---

## Running the Project

Backend:
- install dependencies
- run server

Frontend:
- install dependencies
- run dev server

---

## Success Criteria

- Both frontend and backend run locally
- Frontend successfully fetches data from backend
- Reports list is displayed in UI

---

## Notes for AI Generation

When generating this project:
- Keep code simple and readable
- Avoid over-engineering
- Use in-memory arrays (no database)
- Ensure CORS works between ports
- Provide clear README instructions

---

*This template is intentionally minimal to support AI-driven feature development during the bootcamp.*