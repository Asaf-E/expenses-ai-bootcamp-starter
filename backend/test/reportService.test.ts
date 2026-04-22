import assert from "node:assert/strict";
import test from "node:test";

import { seedReports } from "../src/data/seed.ts";
import { createReportStore } from "../src/services/reportService.ts";

test("seedReports returns sample reports with multiple statuses", () => {
  const reports = seedReports();
  const statuses = new Set(reports.map((report) => report.status));

  assert.ok(reports.length >= 5, "expected at least five reports");
  assert.deepEqual([...statuses].sort(), ["APPROVED", "DRAFT", "SUBMITTED"]);
});

test("createReportStore lists reports and supports lookup by id", () => {
  const reports = seedReports();
  const reportStore = createReportStore(reports);
  const listedReports = reportStore.listReports();

  assert.equal(listedReports.length, reports.length);
  assert.notStrictEqual(listedReports, reports);
  assert.deepEqual(reportStore.getReportById(reports[0].id), reports[0]);
  assert.equal(reportStore.getReportById("missing-report"), undefined);

  listedReports[0].title = "Changed in test only";

  assert.equal(reportStore.getReportById(reports[0].id)?.title, reports[0].title);
});

