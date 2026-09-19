import { createFileRoute } from "@tanstack/react-router"; import { RecordsPage } from "@/pages/records";
export const Route = createFileRoute("/records/")({ component: RecordsPage });
