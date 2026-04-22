import type { Report } from "../models/types.ts";

export interface ReportStore {
  listReports: () => Report[];
  getReportById: (id: string) => Report | undefined;
}

export const createReportStore = (initialReports: Report[]): ReportStore => {
  const reports = initialReports.map((report) => ({ ...report }));

  return {
    listReports: () => reports.map((report) => ({ ...report })),
    getReportById: (id: string) => {
      const report = reports.find((item) => item.id === id);
      return report ? { ...report } : undefined;
    }
  };
};

