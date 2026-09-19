import { records, users } from "@/data/mock-data";
import type { LandRecord, UserRole } from "@/types/land-record";
const wait = (ms = 450) => new Promise((resolve) => setTimeout(resolve, ms));
export async function searchRecords(query: string): Promise<LandRecord[]> { await wait(); const q = query.toLowerCase(); return records.filter((record) => [record.ownerName, record.surveyNumber, record.khataNumber, record.village].some((value) => value.toLowerCase().includes(q))); }
export async function mockSignIn(email: string, role: UserRole) { await wait(700); return { name: email.split("@")[0].replace(".", " "), role }; }
export async function mockUpload() { await wait(900); return { recordId: "BR-2026-1043", status: "processing" as const }; }
export async function inviteUser(name: string, email: string, role: UserRole) { await wait(); return { ...users[0], id: `U-${Date.now()}`, name, email, role }; }
