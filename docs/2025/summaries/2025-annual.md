---
source: generated
year: "2025"
generated: 2026-02-07
generator: claude-opus-4-6
type: annual-summary
releases:
  - 2025-R1
  - 2025-R2
  - 2025-R3
  - 2025-R4
---

# 2025 Annual Summary

Sage Intacct's 2025 releases collectively represent a year of aggressive investment in AP-to-pay automation, AI-assisted close workflows, and a decisive platform shift to the REST API. Finance teams gained end-to-end procure-to-pay capabilities—from AI-powered invoice matching through embedded vendor payments—while new Close Workspace and Copilot tools directly target reducing month-end cycle times. The retirement of legacy payment integrations and the freeze of the XML API signal that Sage is actively sunsetting older architecture and expects customers to move forward.

## Key Themes

- **End-to-end AP and Purchasing automation** matured rapidly, progressing from AI-powered invoice matching (R1) through non-PO invoice handling (R2–R3) to embedded vendor payments via MineralTree (R3), making the full procure-to-pay cycle manageable within Sage Intacct.
- **AI-powered close acceleration** became a central product pillar, with Copilot Variance Analysis (R1), Subledger Reconciliation Assistant (R2), Close Automation tools (R3), and Close Workspace with AI-drafted notifications reaching GA (R4).
- **Platform shift to REST API** was formalized: REST API went GA in R1, the Bulk Request Service followed in R2, and by R4 the XML API was placed in maintenance mode with all new development exclusively on REST.
- **Fixed Assets modernization** delivered a steady stream of capabilities across all four releases—intra-entity transfers, inter-entity transfers with depreciation roll-forward, bulk operations, partial disposals, and multi-asset creation from a single bill line.
- **Global expansion and localization** continued with GST support for New Zealand and Singapore, ZUGFeRD e-invoicing for Germany, Spanish and Canadian French language options, and Nova Scotia HST rate updates.

## Most Significant Changes

- **AP Automation with Purchasing reached full maturity**, moving from basic PO matching (R1 GA) to non-matching invoice processing, smarter email ingestion, line-level matching, and delegated bill approvals across all regions.
- **Vendor Payments powered by MineralTree (GA in R3, US)** enables embedded bill payment directly within Sage Intacct, eliminating the need for a separate payment platform.
- **Close Workspace (GA in R4, UK/US)** provides structured close checklists, real-time progress tracking, and Copilot-drafted notifications to standardize and accelerate period-end close.
- **REST API is now the sole path for new development**, with GA availability (R1), Bulk Request Service (R2 GA), REST-based platform triggers (R4), and the XML API frozen in maintenance mode.
- **Affiliate entity dimension (GA in R2)** automatically tags inter-entity activity for more granular elimination entries, joined later by the automated equity consolidation method (R4 GA) for multi-level ownership rollups.
- **AI-powered import service (GA in R2)** simplifies data onboarding by automatically handling field mapping, reducing implementation and migration effort across modules.
- **Sage Intelligent Time & Expense mobile app (GA in R4, US)** with AI-powered receipt capture and expense automation closes the loop on employee reimbursement workflows.

## Items Requiring Attention

- **Authorize.net and PayPal payment integrations were retired on November 7, 2025**—any US company that has not yet migrated to Versapay or another solution must do so immediately to continue accepting customer payments.
- **Custom email domain authentication is now enforced**—companies that have not yet validated their sending domains risk failed delivery of outbound invoices, statements, and notifications.
- **XML API is in maintenance mode as of R4**—no new objects or features will be added; teams relying on XML-based integrations should begin planning their migration to the REST API.
- **1099 reporting change for US companies:** excessive golden parachute payments must be reported on 1099-NEC Box 3 rather than 1099-MISC Box 14; entity contacts should be verified before year-end filing.
- **Classic bank transaction import for reconciliation has been retired**—use the Bank Transaction Assistant file import going forward; also note that enhanced lists are now the default UI across all regions.

## What to Watch

- **Cash Requirements dashboard and Line-level AP Automation matching enhancements** are in early adopter, signaling deeper real-time cash visibility and more precise AP-to-PO reconciliation capabilities in upcoming releases.
- **E-Invoicing for Germany** is in early adopter ahead of upcoming government mandates, likely foreshadowing broader European e-invoicing compliance features.
- **Platform application management (Beta) and configuration objects (Early Adopter)** point toward a more mature ISV and extensibility ecosystem, enabling partners to publish, version, and manage applications within Sage Intacct.
