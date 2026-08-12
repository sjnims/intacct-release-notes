---
source: generated
year: "2026"
generated: 2026-08-12
generator: claude-opus-5
type: annual-summary
releases:
  - 2026-R1
  - 2026-R2
  - 2026-R3
---

# 2026 Annual Summary

Sage Intacct's 2026 releases pushed AI from experiment to core workflow: AP Automation gained line-level matching, tax prediction, intelligent 3-way matching, and anomaly detection across the year, while the Finance Intelligence agent and the new AI Gateway laid the groundwork for conversational and programmatic AI access to financial data. Data access broadened significantly through Sage Intacct Data Cloud for Snowflake, continued REST API expansion, and Smart Excel reporting in preview. Fixed Assets, construction/project billing, and billing groups received sustained investment in every quarter, and compliance work concentrated on French e-invoicing, which reached GA in August. The year's hardest deadline — the August 7, 2026 retirement of US Vendor Payments powered by CSI — was flagged in every release and has now passed.

## Key Themes

- AI moved into everyday AP work, progressing from line-level document matching (R1) to intelligent 3-way PO/receipt/bill matching (R2) to fraud and anomaly detection (R3).
- Data and integration strategy consolidated around REST: new objects ship REST-only, the XML API is frozen for new functionality, and the AI Gateway plus MCP Server opened a sanctioned path for external AI tools.
- Analytics and reporting shifted toward live data rather than static exports, via Data Cloud for Snowflake, SaaS Intelligence, Cash Intelligence, and Smart Excel reporting.
- Industry depth increased in construction, projects, and lending, with retainage automation, WIP management, subcontractor payment applications, and a new US Lending Management module.
- Global compliance and payments expanded, with French e-invoicing reaching GA, Irish and German tax work, and embedded Customer Payment Services plus new providers (Fortis, Bridge) across seven regions.

## Most Significant Changes

- Sage Intacct Data Cloud (R1) delivered direct, secure access to Intacct data in Snowflake for BI and analytics in all regions.
- AP Automation added line-level matching (R1 GA), tax prediction, intelligent 3-way matching (R2), and AI anomaly detection for high-risk invoices (R3).
- The Sage Intacct AI Gateway (R2) introduced secure AI connectivity through the REST API and MCP Server in six regions.
- Fixed Assets was rebuilt across the year with CIP tracking and roll-forward reporting (R1), summarized depreciation postings, asset splits and depreciation reversals (R2), and disposal reversals (R3).
- GL account reconciliations (R1) and batch posting for bills, invoices, and adjustments (R3) reduced manual close effort.
- French e-invoicing and e-reporting reached general availability in R3, ahead of government mandates.
- Lending Management (R3, US) added full loan life-cycle support for revolving and non-revolving instruments.

## Items Requiring Attention

- US Vendor Payments powered by CSI was retired on August 7, 2026 — any company still on it must be moved to a supported payment method now.
- The AP Automation inbound email domain changed in February 2026; forwarding rules, spam filters, and vendor documentation must reflect the new domain.
- Email controls tightened through the year: an auto-populated allowed sender list (R1), console-level domain validation (R2), and mandatory user email verification plus per-console domain validation (R3).
- All new integration work should target the REST API, since new objects and features are not being backported to the frozen XML API.
- Restricted attachment file types are now enforced company-wide (R2), and Sage Intacct Collaborate users must migrate to Sage Collaborate (R3); the updated global navigation also changes how users reach Sage products.

## What to Watch

- The Finance Intelligence agent has been in phased early adopter all year and expanded from three to six regions, signaling natural-language querying of financial data as a standard interface.
- Smart Excel reporting (R3, CA/UK/US) points toward live, refreshable Excel reporting replacing static exports.
- Embedded Customer Payment Services matured across all three releases — adding providers, payment links on imported invoices, partial payments, and refunds — indicating Intacct is becoming the system of record for collections as well as billing.
