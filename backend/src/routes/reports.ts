import { Router } from "express";

import type { ReportStore } from "../services/reportService.ts";

export const createReportsRouter = (reportStore: ReportStore) => {
  const router = Router();

  router.get("/", (_request, response) => {
    response.json(reportStore.listReports());
  });

  router.get("/:id", (request, response) => {
    const report = reportStore.getReportById(request.params.id);

    if (!report) {
      response.status(404).json({ message: "Report not found" });
      return;
    }

    response.json(report);
  });

  return router;
};

