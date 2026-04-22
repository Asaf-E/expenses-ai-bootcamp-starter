import type { Report } from "../models/types.ts";

export const seedReports = (): Report[] => [
  {
    id: "report-101",
    title: "Tel Aviv client lunch",
    status: "DRAFT",
    amount: 186.5
  },
  {
    id: "report-102",
    title: "Conference travel reimbursement",
    status: "SUBMITTED",
    amount: 1240
  },
  {
    id: "report-103",
    title: "Team offsite supplies",
    status: "APPROVED",
    amount: 420.15
  },
  {
    id: "report-104",
    title: "Remote work equipment",
    status: "SUBMITTED",
    amount: 315.99
  },
  {
    id: "report-105",
    title: "Airport taxi receipts",
    status: "APPROVED",
    amount: 89.2
  },
  {
    id: "report-106",
    title: "Workshop printing costs",
    status: "DRAFT",
    amount: 57.75
  }
];

