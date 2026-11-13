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

2026 was the year Sage Intacct moved AI from pilot to production across the finance stack — AP Automation progressed from line-level matching to 3-way matching to fraud-oriented anomaly detection, and the Finance Intelligence Agent went from Early Adopter in February to GA across six regions by year end. Payments were rebuilt at the same time: CSI vendor payments retired in August, Standard ACH gave way to bank files, and embedded Customer Payment Services reached GA with Fortis in the US. Data access and integration consolidated on open, REST-first paths with the Data Cloud for Snowflake, the AI Gateway with MCP Server, and the XML API frozen to new functionality. Alongside this, a steady tightening of email, authentication, and permission controls created the year's largest cluster of admin action items.

## Key Themes

- AI moved from assistive to decision-making in AP, progressing from line-level prediction to 3-way matching to anomaly detection that flags potentially fraudulent invoices.
- Conversational finance became a shipped product, with the Finance Intelligence Agent moving Early Adopter → phased rollout → GA across AU, CA, SG, ZA, UK, and US in a single year.
- Open data and REST-first integration replaced proprietary paths: Data Cloud for Snowflake, the AI Gateway with MCP Server, a redesigned Developer Portal, and an XML API frozen to new objects.
- Payments infrastructure was rebuilt end to end — CSI retired, Standard ACH replaced by bank files, and embedded customer payments added via Fortis and Bridge.
- Industry depth deepened in construction, projects, and fixed assets (retainage, WIP, subcontractor payment applications, asset splits and reversals), plus new verticals in lending, hospitality, and nonprofit benchmarking.

## Most Significant Changes

- AP Automation gained line-level matching (R1), AI-based 3-way PO/receipt/bill matching (R2), anomaly detection for high-risk invoices (R3), and multi-page document splitting (R4).
- The Finance Intelligence Agent reached GA, letting users ask Sage Copilot natural-language questions about their financial data across six regions.
- Sage Intacct Data Cloud opened direct, secure access to Intacct data in Snowflake, and the AI Gateway added REST API and MCP Server connectivity for AI applications.
- Fixed Assets Management was overhauled across all four releases: CIP tracking, summarized depreciation postings, asset splits, and reversals for depreciation, disposals, transfers, and capitalizations.
- French e-invoicing and e-reporting went from Early Adopter in R1 to General Availability in R3, ahead of government mandates.
- Customer Payments powered by Fortis reached GA in the US with payment links, partial payments, and refunds, while passkey authentication brought passwordless sign-in to all regions.
- Lending Management (US) added full loan life cycle support for revolving and non-revolving instruments, a net-new module rather than an enhancement.

## Items Requiring Attention

- Vendor Payments powered by CSI was retired on August 7, 2026 (US) — any company still on it needs a replacement payment method now.
- Standard ACH is replaced by bank files for US payment processing, requiring migration of existing ACH payment runs.
- Email sender allow list enforcement is now active across all regions; unapproved sender addresses are blocked, and email verification plus console-level domain validation are required.
- Legacy developer documentation retires with the 2027 R1 release, moving to the Developer Portal — update bookmarks, runbooks, and integration docs before then.
- New objects and features ship only in the REST API, so plan integration work there; also review R4 permission changes and the new Roles and license-usage reports before your next audit or renewal.

## What to Watch

- Excel is being reconnected to live Intacct data through Smart Excel reporting (R3) and Connected Reporting for Excel (R4), signaling the end of static export workflows.
- Custom, rule-based approval routing expanded steadily through the year — line-level purchasing, multi-condition PO rules, then invoices and Order Entry — and looks set for broad GA.
- Sage Intacct Investment Intelligence, Cash Intelligence, and SaaS Intelligence point toward a family of in-product analytics agents beyond core accounting.
