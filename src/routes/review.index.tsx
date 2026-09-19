import { createFileRoute } from "@tanstack/react-router"; import { ReviewPage } from "@/pages/upload-review";
export const Route = createFileRoute("/review/")({ component: ReviewPage });
