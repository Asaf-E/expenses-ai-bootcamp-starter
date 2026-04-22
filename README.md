# Expenses AI Bootcamp Starter

This repository is a minimal full-stack starter built from `starter_project_template.md`.

It is intentionally small and intentionally incomplete so bootcamp participants can extend it with better UX, richer workflows, and new features during the course.

## What Is Included

- React + TypeScript + Vite frontend
- Node.js + Express backend
- In-memory seed data
- One fully wired end-to-end feature: view list of reports
- A small backend test baseline

## What Is Intentionally Missing

These are left for participants to design and implement later:

- Create report
- Update report
- Approval workflow
- Authentication
- Notifications

## Project Structure

```text
project-root/
  frontend/
  backend/
  data/
  README.md
```

## Running The Project

Install dependencies from the repository root:

```bash
npm install
```

Start the backend:

```bash
npm run dev:backend
```

Start the frontend in a second terminal:

```bash
npm run dev:frontend
```

The app is expected to run with:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3001`

The frontend defaults to `http://localhost:3001` for API calls. You can override that with `VITE_API_BASE_URL` if needed.

## Backend Test

After installing dependencies, run:

```bash
npm run test:backend
```

## Notes

- The backend uses in-memory data from `backend/src/data/seed.ts`.
- The `data/` directory at the repo root is a placeholder for future exercises.
- The current UI is deliberately plain so participants can redesign it during the bootcamp.
