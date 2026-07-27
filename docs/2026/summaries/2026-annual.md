---
source: generated
year: "2026"
generated: 2026-07-27
generator: claude-opus-4-6
type: annual-summary
releases:
  - 2026-R1
  - 2026-R2
  - 2026-R3
---

# 2026 Annual Summary

Sage Intacct's 2026 releases represent a decisive year of investment in AI-powered automation, platform modernization, and global compliance. Across three releases, Sage embedded AI into core financial workflows—from AP invoice matching and fraud detection to natural-language data querying—while simultaneously overhauling Fixed Assets Management, launching the Sage Intacct Data Cloud, and introducing new modules like Lending Management. The year also marked a clear strategic shift toward the REST API as the sole path for new development and the retirement of legacy payment integrations, signaling that finance teams should be actively modernizing their integrations and workflows.

## Key Themes

- **AI embedded across core finance operations**: Sage moved from experimental AI features to production-grade capabilities including intelligent 3-way matching, anomaly/fraud detection in AP, a Finance Intelligence agent for natural-language queries, and an AI Gateway for secure third-party AI connectivity.
- **Fixed Assets Management transformed**: Across R1–R3, Sage delivered CIP asset lifecycle tracking, depreciation summarization, asset splitting, disposal reversals, AP-integrated cost updates with auto-recalculated depreciation, and a Roll Forward report—collectively the most significant Fixed Assets overhaul in years.
- **Platform modernization and data openness**: The Sage Intacct Data Cloud (Snowflake), AI Gateway with MCP Server, and continued REST API expansion reflect a strategic commitment to making Intacct data accessible to external BI tools and AI applications, while the XML API is now effectively frozen.
- **Global compliance acceleration**: E-invoicing reached GA for France, an Early Adopter program launched for Germany, and tax box reporting became generally available across all regions, positioning customers ahead of government mandates.
- **Construction and industry-specific depth**: Automated retainage holding, flexible retainage release from project contracts, enhanced project billing workflows, and Work Order Management demonstrate continued investment in construction and project-centric industries.

## Most Significant Changes

- **AI-driven AP Automation matured fully**: Line-level matching (R1), intelligent 3-way matching of POs, receipts, and invoices (R2), and anomaly detection to flag fraudulent or high-risk invoices before payment (R3) are all now generally available across all regions.
- **Sage Intacct Data Cloud (Snowflake)** provides secure, direct access to live Intacct data for advanced analytics and BI tool integration, available across all regions as of R1.
- **Sage Intacct AI Gateway** with MCP Server enables secure, scalable connectivity for third-party AI applications through the REST API, generally available in most regions as of R2.
- **GL account reconciliations** allow matching of offsetting debit and credit entry lines to streamline period-end close, available across all regions.
- **Fixed Assets Management** was comprehensively rebuilt across all three releases with CIP tracking, Roll Forward reporting, depreciation summarization, asset splitting, disposal reversals, and AP-integrated cost adjustments.
- **Lending Management module** launched in the US, managing loans through their full lifecycle from origination to payoff for revolving and non-revolving instruments.
- **Bulk posting of bills, invoices, and adjustments** eliminates one-at-a-time posting bottlenecks in AP and AR across all regions.

## Items Requiring Attention

- **Vendor Payments powered by CSI was retired as of August 7, 2026** — any US company that has not migrated to an alternative payment method must do so immediately to avoid disruption.
- **XML API is frozen** — all new objects and features are being released exclusively in the REST API; teams relying on XML-only integrations should begin migration planning now.
- **Email domain changes and validation enforcement** rolled out across R1–R3 — verify that outbound email domains are properly configured at the console level and that sender/reply-to addresses are current to prevent delivery failures.
- **Email verification is now required for user accounts** — ensure all user email addresses are current or risk access disruption.
- **Restricted file types for attachments** are now enforced, which may affect existing upload workflows; review any automated attachment processes.

## What to Watch

- **Smart Excel reporting** (Early Adopter in Canada, UK, US) connects live Sage Intacct data to Excel workbooks with on-demand refresh, eliminating manual exports — this could fundamentally change how finance teams build and distribute reports.
- **Finance Intelligence agent** expanded its Early Adopter footprint throughout 2026 (now in AU, CA, SG, ZA, UK, US) and a centralized AI agent discovery hub launched in R3, signaling that natural-language financial analysis is on track for broad GA in 2027.
- **Automated prepaid expense amortization** (Early Adopter, all regions) and **Cash Intelligence enhancements** point toward Sage's goal of automating routine period-end and treasury workflows that currently consume significant staff time.
