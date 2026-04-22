export const REPORT_STATUSES = ["DRAFT", "SUBMITTED", "APPROVED"] as const;

export type ReportStatus = (typeof REPORT_STATUSES)[number];

export interface Report {
  id: string;
  title: string;
  status: ReportStatus;
  amount: number;
}

