export type ReportStatus = "DRAFT" | "SUBMITTED" | "APPROVED";

export interface Report {
  id: string;
  title: string;
  status: ReportStatus;
  amount: number;
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3001";

const request = async <T,>(path: string): Promise<T> => {
  const response = await fetch(`${apiBaseUrl}${path}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("The requested report was not found.");
    }

    throw new Error("The API request failed. Is the backend running?");
  }

  return response.json() as Promise<T>;
};

export const fetchReports = () => request<Report[]>("/api/reports");

export const fetchReportById = (id: string) => request<Report>(`/api/reports/${id}`);

