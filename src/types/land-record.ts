export type UserRole = "officer" | "supervisor" | "admin";
export type RecordStatus = "draft" | "processing" | "pending_review" | "verified" | "flagged" | "rejected";
export type Severity = "high" | "medium" | "low";

export interface LandRecord {
  id: string;
  ownerName: string;
  surveyNumber: string;
  khasraNumber: string;
  khataNumber: string;
  village: string;
  tehsil: string;
  district: string;
  landClassification: string;
  plotArea: number;
  confidence: number;
  status: RecordStatus;
  officer: string;
  updatedAt: string;
  issue?: string;
  severity?: Severity;
}

export interface AuditEvent {
  id: string;
  recordId: string;
  action: "Created" | "Edited" | "Submitted" | "Approved" | "Rejected";
  user: string;
  role: string;
  timestamp: string;
  detail: string;
  oldValue?: string;
  newValue?: string;
}

export interface AppUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  district: string;
  active: boolean;
  lastActive: string;
}
