---
source: generated
year: "2025"
generated: 2026-08-12
generator: claude-opus-5
type: annual-summary
releases:
  - 2025-R1
  - 2025-R2
  - 2025-R3
  - 2025-R4
---

# 2025 Annual Summary

2025 was the year Sage Intacct pushed close automation, AP/purchasing automation, and Copilot from pilot to production, while consolidating its integration strategy around the REST API. Close Automation and Close Workspace moved from Early Adopter in R1–R3 to general availability in the UK and US by R4, and AP Automation with Purchasing evolved from basic PO matching to handling non-matching invoices, line-level matching, and country-specific e-invoicing formats. Two hard deadlines dominated the year: custom email domain authentication in May 2025 and the November 7, 2025 retirement of the Authorize.net and PayPal customer payment integrations, which is now complete. Fixed Assets, Consolidation, Construction, and Contracts each received substantial functional depth, and the platform shifted decisively to REST-only development.

## Key Themes

- Copilot moved from experiments to production, delivering Variance Analysis, Close Workspace, Subledger Reconciliation, semantic help search, and AI-drafted email notifications, mostly in the UK and US first.
- AP and purchasing automation deepened every quarter, expanding from PO matching to unmatched invoices, line-level matching, smarter email handling, and multi-format document ingestion.
- The REST API became the sole path forward, with the XML API frozen for new functionality and Bulk Request Service, webhooks, and REST triggers all reaching GA.
- Period close became a first-class product area, combining Close Automation, close checklists, automated WIP relief, and subledger reconciliation tooling.
- International and industry depth grew steadily — Spanish and Canadian French language support, tax solutions for New Zealand, Singapore, France, and Germany, and continued Construction, Nonprofit, and Contracts investment.

## Most Significant Changes

- Close Automation reached GA in R3 and Close Workspace followed at GA in R4 (UK, US), giving finance teams checklists, notifications, and status visibility for the close.
- AP Automation with Purchasing went GA in R1 and grew through the year to handle standalone invoices, non-matching transactions, the Project dimension, and German ZUGFeRD e-invoices.
- The affiliate entity standard dimension reached GA in R2, enabling automatic inter-entity tagging and more granular consolidation eliminations for Consolidation subscribers.
- Fixed Assets Management was rebuilt piece by piece across all four releases, adding inter-entity transfers, custom declining balance depreciation, cumulative depreciation tracking, and partial asset disposal.
- The REST API reached GA in R1, with Bulk Request Service, webhook trigger delivery, and a new REST API outbound trigger following through R4.
- US customers gained embedded Vendor Payments via MineralTree (R3) and mobile employee expense automation at GA (R4), while Versapay became the recommended customer payment gateway.
- The equity consolidation method reached GA in R4, automating equity entries and supporting multi-parent, multi-level rollups.

## Items Requiring Attention

- Authorize.net and PayPal customer payment integrations were retired on November 7, 2025 — US companies still on them have no working integration and must migrate immediately.
- Custom email domain authentication was required by May 2025; unauthenticated domains risk email delivery failures to customers and partners.
- All new API objects and features are REST-only as of R2 — any roadmap built on XML API development needs to be replanned.
- Enhanced lists became the default list experience for all companies in R3, changing daily navigation and requiring user training.
- Permissions changed in nearly every release across AP, AR, Expenses, Projects, Time, Contracts, and Consoles, and should be re-validated against your role design.

## What to Watch

- E-Invoicing for Germany (Early Adopter, R4) signals Sage's preparation for government e-invoicing mandates and likely expansion to other EU jurisdictions.
- Line-level matching in AP Automation with Purchasing has been in Early Adopter since R3 and is the next step toward fully touchless invoice processing.
- Application management (Beta, R4) and configuration objects (Early Adopter, R3) point to a more extensible platform where partners publish and version applications for subscribing companies.
