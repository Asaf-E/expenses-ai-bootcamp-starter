import cors from "cors";
import express from "express";

import { seedReports } from "./data/seed.ts";
import { createReportsRouter } from "./routes/reports.ts";
import { createReportStore } from "./services/reportService.ts";

const port = Number(process.env.PORT ?? 3001);
const reportStore = createReportStore(seedReports());

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_request, response) => {
  response.json({
    message: "Expenses AI Bootcamp Starter API",
    status: "ok"
  });
});

app.use("/api/reports", createReportsRouter(reportStore));

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});

