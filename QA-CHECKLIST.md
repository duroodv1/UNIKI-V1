# UNIKI V.1 — QA smoke checklist

Status di bawah membezakan semakan automatik yang telah dijalankan daripada ujian manual yang masih perlu dibuat pada browser/peranti.

## Static checks completed

- [x] `node --check app.js`
- [x] No external JavaScript/CSS/image/font dependency in the application shell.
- [x] Service worker and relative PWA asset paths (cache bumped for v1.2.1).
- [x] `npm run test:event-preview` — read-only Member preview; role and registration state remain unchanged.
- [x] `npm run test:finance` — 28 deterministic scenarios covering payment workflow, draft/official receipt models for income/expenses/payments/receipts, refund, re-approval gating and immutable issued receipts.
- [x] Attached UNIKI logo present in app branding and manifest icons.
- [x] Android v1.2.1 debug APK built with Gradle and signature verified; not installed on a real device.
- [x] Windows x64 archive refreshed with v1.2.1 web assets and Inno Setup source; installer compilation still requires Windows/Inno Setup 6.

## Manual smoke test (run in Chrome/Edge over localhost or HTTPS)

1. **First launch** — create workspace, Owner, password and recovery key; reload and confirm local remembered session.
2. **Authentication** — log out, log in with username and email, show/hide password, test invalid password, test Forgot Password with correct and incorrect recovery key.
3. **Members** — add/edit/search/filter/delete; try duplicate phone/email; import `example-members.csv`; export CSV; inspect error preview.
4. **Events** — create Draft, publish/open registration, create Member user, register once, try duplicate/capacity, mark attendance from participant list; verify Admin “Pratonton sebagai Ahli” is read-only and Draft is flagged as hidden from Members.
5. **Announcements** — create Draft/Published item; confirm read/unread badge and mark read using a Member account.
6. **Operations** — exercise incident and complaint status changes; add volunteer; add meeting agenda/minutes; upload and download a document.
7. **Finance / receipts** — add income/expense (Pending Approval); create outgoing and received records using + Rekod Bayaran; test full/partial/unpaid/late/cancel/refund and rejected statuses. On Ikhtisar, Pendapatan, Perbelanjaan, Bayar and Terima bayaran, verify Paparkan resit is available; pending items must show DRAF, approval must issue a numbered official receipt, and Resit rasmi must list all four modules plus refunds with Paparkan / cetak semula actions. Confirm after Save the Lihat, Cetak resit, Lampiran and Batal actions (where eligible), plus password re-auth, audit actor, net totals, reports and CSV.
8. **RBAC** — create custom role with limited access; assign to a test user; confirm restricted pages/actions are hidden and writes fail in service functions.
9. **AI local helper** — test counts and open-incident query as Owner; repeat as limited role and confirm the helper refuses inaccessible modules; disable local helper.
10. **Backup / restore** — create encrypted backup, test wrong password, restore to a clean test browser/profile, verify session/account and records; test snapshot restore.
11. **Factory reset** — test wrong phrase/password, cancel second confirmation, then reset a disposable test workspace and check first-run setup.
12. **Responsive/offline** — install PWA, test narrow phone layout, go offline after first load, verify local views/CRUD still work; confirm network pill changes state.

## Known unverified / not implemented

- Manual browser flow, responsive screenreader/keyboard checks, native APK installation and Windows package upgrade still require a real browser/device/Windows QA pass. The 28 deterministic helper scenarios do not replace end-to-end UI tests.
- Local Wi-Fi/QR/IP transport, Cloud sync, payment gateway and generative AI cloud provider require separate native/server integrations.
