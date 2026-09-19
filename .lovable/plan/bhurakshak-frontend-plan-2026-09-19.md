# BhuRakshak Frontend Plan

## Goal
Build a polished, frontend-only land-record digitization application using mock data and client-side state. No backend, database, real authentication, OCR service, or server logic will be added.

## Experience
- Use the selected **Official registry sage** direction: warm registry-paper background, deep civic green accents, compact administrative typography, restrained cards, and dense but readable tables.
- Create a responsive application shell with collapsible desktop navigation and a mobile drawer.
- Provide a mock role switcher for Officer, Supervisor, and Administrator so every workflow can be demonstrated.

## Screens and flows
1. **Mock sign-in** — role selection, validation, forgot-password and success states.
2. **Dashboard** — processing totals, status distribution, monthly trend chart, village error summary, recent records, filters, and report export simulation.
3. **Document upload** — drag/drop or file picker, metadata form, file validation, upload progress, and processing state.
4. **OCR review workspace** — original-document preview beside editable extracted fields, confidence indicators, low-confidence highlighting, validation results, and submit confirmation.
5. **Flagged records** — searchable/sortable supervisor queue with issue severity and priority filters.
6. **Flag resolution** — record detail, validation errors, audit history, approve override, or reject with required comment.
7. **Verified record search** — owner/survey/khata/village search, filters, sorting, pagination, empty state, and record detail.
8. **Audit log** — filterable action history with field-level old/new values.
9. **User management** — admin-only mock user list, invite dialog, role editing, and active/inactive toggles.
10. **Profile** — editable officer details and mock preferences.

## Frontend architecture
- Keep domain types and realistic sample records in dedicated data modules.
- Use a mock service layer returning promises to preserve a clean future API boundary.
- Use shared layout, status, table, feedback, dialog, and form components.
- Use URL routes for all primary screens and client-side state for demonstrations.
- Add route-specific titles and social descriptions.
- Include clear frontend-only setup documentation and an environment example.

## Verification and delivery
- Check the key flows in the live preview at desktop and mobile sizes.
- Confirm upload, review edits, filters, dialogs, role switching, and mock approval/rejection interactions.
- Prepare a clean standalone `Frontend` source delivery without dependencies or generated build files.
