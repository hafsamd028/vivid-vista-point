import { cn } from "@/lib/utils";
import type { RecordStatus, Severity } from "@/types/land-record";

const statusLabel: Record<RecordStatus, string> = { draft: "Draft", processing: "Processing", pending_review: "Pending review", verified: "Verified", flagged: "Flagged", rejected: "Rejected" };
export function StatusBadge({ status }: { status: RecordStatus }) {
  return <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium", status === "verified" && "bg-success-soft text-success", status === "flagged" && "bg-warning-soft text-warning-foreground", status === "rejected" && "bg-danger-soft text-destructive", status === "processing" && "bg-info-soft text-info", (status === "draft" || status === "pending_review") && "bg-muted text-muted-foreground")}>{statusLabel[status]}</span>;
}
export function SeverityBadge({ severity }: { severity: Severity }) {
  return <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase", severity === "high" && "bg-danger-soft text-destructive", severity === "medium" && "bg-warning-soft text-warning-foreground", severity === "low" && "bg-muted text-muted-foreground")}>{severity}</span>;
}
