---
source: generated
year: "2026"
generated: 2026-11-13
generator: claude-opus-5
type: annual-summary
releases:
  - 2026-R1
  - 2026-R2
  - 2026-R3
  - 2026-R4
---

# 2026 Annual Summary

2026 was the year AI moved from assistive features into core financial controls at Sage Intacct — AP Automation progressed from line-level matching to intelligent 3-way matching to fraud-oriented anomaly detection, while the Finance Intelligence Agent traveled the full path from early adopter preview in R1 to general availability across six regions in R4. The platform story was equally significant: Sage Intacct Data Cloud opened direct Snowflake access, the AI Gateway added an MCP Server for AI application connectivity, and the REST API became the only path for new functionality. US payments underwent two forced migrations in a single year — first onto CSI by July 24, then off Standard ACH onto bank files — making payment rails the year's most disruptive operational theme. Europe saw sustained e-invoicing investment, with France reaching GA and Germany still in early adopter ahead of government mandates.

## Key Themes

- AI progressed from suggestion to control, with AP Automation moving through line-level matching, 3-way matching, and anomaly detection for fraud risk, while Sage Copilot agents became a discoverable, permissioned, generally available layer.
- Payment infrastructure was rebuilt under US customers twice — a forced migration to CSI by mid-year, CSI's retirement in R3, and the replacement of Standard ACH with bank files in R4 — alongside embedded customer payments reaching GA via Fortis.
- The platform opened up for external data and AI tooling through Sage Intacct Data Cloud (Snowflake), the AI Gateway with its MCP Server, a redesigned Developer Portal, and REST-only delivery of all new functionality.
- Europe-focused compliance work advanced steadily, with France e-invoicing and e-reporting reaching GA in R3 and Germany remaining in early adopter, plus expanded SEPA formats and DATEV improvements.
- Vertical depth increased markedly, with Fixed Assets, Construction WIP, and Projects receiving substantive updates every quarter and two new US industry products (Lending Management and hospitality daily sales) launching in R3.

## Most Significant Changes

- Sage Intacct Data Cloud (R1) gives BI and analytics teams direct Snowflake access to Intacct data without export workflows.
- The Finance Intelligence Agent went from R1 early adopter to R4 general availability in Australia, Canada, Singapore, South Africa, UK, and US, answering natural-language questions against financial data via Sage Copilot.
- AP Automation gained intelligent 3-way matching (R2), AI anomaly detection for fraudulent invoices (R3), and multi-page document splitting (R4, early adopter).
- The Sage Intacct AI Gateway (R2) exposes an MCP Server alongside the REST API, making Intacct a first-class target for AI application integration.
- Fixed Assets Management was rebuilt across all four releases, adding CIP tracking, asset splitting, summarized depreciation postings, and reversal capability for disposals, transfers, splits, and CIP capitalizations.
- Customer Payments powered by Fortis reached US general availability in R4 with payment links, partial payments, and refunds embedded in Intacct.
- Passkey authentication (R4) brings passwordless sign-in with biometrics and trusted devices to all regions.

## Items Requiring Attention

- US vendor payments had to move to CSI by July 24, 2026, and CSI itself was then retired in R3 — any US customer still on a legacy rail needs a supported payment method now.
- Standard ACH is replaced by bank files for US payment processing (R4), requiring migration of existing ACH payment runs.
- Email sender allow list enforcement is now live across all regions and will block unapproved sender addresses; audit and register every outbound sender, and verify the AP Automation inbound domain change from February is reflected in vendor instructions.
- Legacy Sage Intacct developer documentation retires with the 2027 R1 release, so bookmarks, runbooks, and integration docs must be repointed to the Developer Portal before then.
- Every release in 2026 added or changed permissions, and R3 also changed global navigation — role definitions and user training need a consolidated review rather than quarterly patching.

## What to Watch

- Excel integration is clearly a strategic bet, with Smart Excel reporting (R3) evolving into AI-assisted Connected Reporting for Excel (R4) in Canada, UK, and US.
- Custom approvals expanded steadily from Purchasing (R2) through broader criteria (R3) to invoices and Order Entry transactions (R4), suggesting a unified rules-based approval engine is coming.
- Sage Intacct Investment Intelligence and the NFP Benchmarking Agent (both R4) signal a move toward vertical-specific intelligence products layered on top of core financials.
