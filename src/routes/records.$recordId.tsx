import { createFileRoute } from "@tanstack/react-router"; import { RecordDetailPage } from "@/pages/records";
export const Route = createFileRoute("/records/$recordId")({ component: RecordDetailRoute }); function RecordDetailRoute() { const { recordId } = Route.useParams(); return <RecordDetailPage recordId={recordId}/>; }
