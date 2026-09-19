import type { AppUser, AuditEvent, LandRecord } from "@/types/land-record";

export const records: LandRecord[] = [
  { id: "BR-2026-1042", ownerName: "Ram Lal Gangaram", surveyNumber: "278/1", khasraNumber: "278", khataNumber: "45", village: "Sonapur", tehsil: "Fatehganj", district: "Bareilly", landClassification: "Agricultural — Irrigated", plotArea: 0.632, confidence: 98, status: "verified", officer: "Anita Verma", updatedAt: "19 Sep, 10:42" },
  { id: "BR-2026-1041", ownerName: "Mohan Lal Shivdatt", surveyNumber: "279/2", khasraNumber: "279", khataNumber: "45", village: "Sonapur", tehsil: "Fatehganj", district: "Bareilly", landClassification: "Agricultural — Non-irrigated", plotArea: 0.624, confidence: 64, status: "flagged", officer: "Anita Verma", updatedAt: "19 Sep, 10:18", issue: "Duplicate survey number found in Sonapur registry", severity: "high" },
  { id: "BR-2026-1040", ownerName: "Savitri Devi", surveyNumber: "145/2", khasraNumber: "145", khataNumber: "81", village: "Rampur", tehsil: "Aonla", district: "Bareilly", landClassification: "Residential", plotArea: 0.215, confidence: 87, status: "pending_review", officer: "Vikram Singh", updatedAt: "19 Sep, 09:56" },
  { id: "BR-2026-1039", ownerName: "Arjun Prasad", surveyNumber: "412/A", khasraNumber: "412", khataNumber: "116", village: "Baheri", tehsil: "Baheri", district: "Bareilly", landClassification: "Agricultural — Irrigated", plotArea: 1.85, confidence: 95, status: "verified", officer: "Neeraj Kumar", updatedAt: "18 Sep, 17:31" },
  { id: "BR-2026-1038", ownerName: "Nasreen Begum", surveyNumber: "77/3", khasraNumber: "77", khataNumber: "29", village: "Nawabganj", tehsil: "Nawabganj", district: "Bareilly", landClassification: "Mixed use", plotArea: 0.89, confidence: 72, status: "flagged", officer: "Vikram Singh", updatedAt: "18 Sep, 16:04", issue: "Sub-parcel area exceeds parent parcel by 0.12 ha", severity: "high" },
  { id: "BR-2026-1037", ownerName: "Dinesh Chandra", surveyNumber: "908", khasraNumber: "908", khataNumber: "204", village: "Faridpur", tehsil: "Faridpur", district: "Bareilly", landClassification: "Agricultural — Non-irrigated", plotArea: 2.1, confidence: 58, status: "rejected", officer: "Anita Verma", updatedAt: "18 Sep, 14:22", issue: "Owner name is illegible; rescan required", severity: "medium" },
  { id: "BR-2026-1036", ownerName: "Meena Kumari", surveyNumber: "223/B", khasraNumber: "223", khataNumber: "62", village: "Bithri", tehsil: "Bithri Chainpur", district: "Bareilly", landClassification: "Residential", plotArea: 0.36, confidence: 91, status: "verified", officer: "Neeraj Kumar", updatedAt: "18 Sep, 12:47" },
  { id: "BR-2026-1035", ownerName: "Rafiq Ahmed", surveyNumber: "19/4", khasraNumber: "19", khataNumber: "12", village: "Rampur", tehsil: "Aonla", district: "Bareilly", landClassification: "Agricultural — Irrigated", plotArea: 1.2, confidence: 81, status: "processing", officer: "Vikram Singh", updatedAt: "18 Sep, 11:29" },
];

export const audits: AuditEvent[] = [
  { id: "A-8841", recordId: "BR-2026-1041", action: "Submitted", user: "Anita Verma", role: "Data Entry Officer", timestamp: "19 Sep 2026, 10:18", detail: "Record submitted for validation" },
  { id: "A-8840", recordId: "BR-2026-1041", action: "Edited", user: "Anita Verma", role: "Data Entry Officer", timestamp: "19 Sep 2026, 10:16", detail: "Corrected extracted owner name", oldValue: "Mohn Lal Shivdatt", newValue: "Mohan Lal Shivdatt" },
  { id: "A-8839", recordId: "BR-2026-1041", action: "Created", user: "OCR workspace", role: "System", timestamp: "19 Sep 2026, 10:13", detail: "Structured record created from scan" },
  { id: "A-8838", recordId: "BR-2026-1040", action: "Submitted", user: "Vikram Singh", role: "Data Entry Officer", timestamp: "19 Sep 2026, 09:56", detail: "Record submitted for supervisor review" },
  { id: "A-8831", recordId: "BR-2026-1039", action: "Approved", user: "Priya Menon", role: "Supervisor", timestamp: "18 Sep 2026, 17:31", detail: "Record passed all validation rules" },
  { id: "A-8822", recordId: "BR-2026-1037", action: "Rejected", user: "Priya Menon", role: "Supervisor", timestamp: "18 Sep 2026, 14:22", detail: "Returned to officer for a clearer scan" },
];

export const users: AppUser[] = [
  { id: "U-101", name: "Rajesh Kumar", email: "rajesh.kumar@gov.in", role: "admin", district: "Bareilly", active: true, lastActive: "Now" },
  { id: "U-102", name: "Priya Menon", email: "priya.menon@gov.in", role: "supervisor", district: "Bareilly", active: true, lastActive: "12 min ago" },
  { id: "U-103", name: "Anita Verma", email: "anita.verma@gov.in", role: "officer", district: "Bareilly", active: true, lastActive: "28 min ago" },
  { id: "U-104", name: "Vikram Singh", email: "vikram.singh@gov.in", role: "officer", district: "Bareilly", active: true, lastActive: "1 hour ago" },
  { id: "U-105", name: "Neeraj Kumar", email: "neeraj.kumar@gov.in", role: "officer", district: "Bareilly", active: false, lastActive: "3 days ago" },
];

export const monthlyProgress = [
  { month: "Apr", processed: 680, verified: 540 }, { month: "May", processed: 820, verified: 705 },
  { month: "Jun", processed: 940, verified: 812 }, { month: "Jul", processed: 1120, verified: 965 },
  { month: "Aug", processed: 1260, verified: 1108 }, { month: "Sep", processed: 1420, verified: 1241 },
];

export const villageIssues = [
  { village: "Sonapur", processed: 428, issues: 34, accuracy: 91 },
  { village: "Rampur", processed: 391, issues: 18, accuracy: 95 },
  { village: "Nawabganj", processed: 302, issues: 27, accuracy: 89 },
  { village: "Faridpur", processed: 280, issues: 11, accuracy: 96 },
];
