---
source: generated
year: "2024"
generated: 2026-02-07
generator: claude-opus-4-6
type: annual-summary
releases:
  - 2024-R1
  - 2024-R2
  - 2024-R3
  - 2024-R4
---

# 2024 Annual Summary

Sage Intacct's 2024 releases followed a clear trajectory: expanding AI and automation from niche early adopter programs into generally available capabilities across all regions, building out a modern REST API to replace the legacy integration layer, and deepening support for international operations with dedicated tax solutions for France, Germany, and Canada. The year also marked a significant push into construction-specific workflows, a new generation of platform integration tools (Data Flow, Forms & Operational Workflows), and the first appearance of Sage Copilot as an AI assistant for financial analysis.

## Key Themes

- **AI and automation moved from experimental to mainstream**, with AP Automation reaching GA globally, Sage Intelligent Time graduating to GA, and Sage Copilot emerging for variance analysis and contextual help.
- **International expansion accelerated**, delivering dedicated VAT/tax solutions for France, Germany, and Canada alongside new language options (Spanish, Canadian French, localized English variants) and broader regional availability for core features.
- **Modern integration architecture took shape** through the launch of the REST API (now in open beta for all regions), the new Data Flow and Forms & Operational Workflows products, and enhanced DDS support for construction.
- **Construction and project-centric capabilities matured significantly**, with WIP Management reaching GA, compliance on primary documents, joint check payments, a new construction manager user type, and retainage availability without a Construction subscription.
- **Platform modernization and self-service improvements** advanced through configurable list views, enhanced email security (DKIM and domain authentication), bulk translation management, and the new Sage Intacct Accounting Specialist Certification.

## Most Significant Changes

- **AP Automation is now GA in all regions** with AI-predicted GL coding at the line level, tax application support, and automated PO-to-invoice matching — transforming the full accounts payable workflow.
- **Sage Intelligent Time reached GA** with AI-generated time entry descriptions, redesigned approvals, timesheet recall, and new Time Clocks and Rate Cards features for labor compliance and standardized billing.
- **The REST API entered open beta for all regions**, signaling the long-term replacement of the legacy XML API and warranting integration planning now.
- **Construction WIP Management is GA** in the US, Canada, and Australia, providing interactive overbilling/underbilling tracking and projected profitability at the project level.
- **New AP and AR reconciliation reports** show how payments, credits, and advances match to bills and invoices, improving audit readiness and period-end close visibility across all regions.
- **Fixed Assets Management gained purchasing integration**, automating asset creation from vendor invoices and adding three new reports (Net Book Value, Assets by Employee, Assets by Location).
- **Multi-device expense automation reached GA**, allowing employees to email receipts from any device with AI-assisted coding to streamline expense reporting (US).

## Items Requiring Attention

- **Vendor Payments for American Express was retired December 20, 2024** — confirm all payments were processed and alternative payment methods are in place (US only).
- **Authorize.net and PayPal integrations for customer payment services will be sunset in November 2025** — begin evaluating Marketplace alternatives now (US only).
- **Authenticate and validate your custom email domain** to ensure reliable email delivery following the rollout of DKIM-based email security enhancements.
- **Review bank feed matching rules** to account for enhanced bank description fields that took effect November 18, 2024, which may require rule adjustments.
- **Audit role assignments across multiple modules**, as 2024 introduced new or changed permissions in Contracts, GL, Order Entry, AR, AP, Projects, Time & Expenses, and Interactive Custom Report Writer — restricted user access was also tightened in AP and AR.

## What to Watch

- **Sage Copilot for variance analysis and semantic help search** entered Early Adopter in Q4, signaling that AI-driven financial insights and in-app assistance will expand significantly in 2025.
- **The REST API continues to add endpoints each quarter** — organizations should begin pilot integration work now, as the XML API's long-term trajectory is increasingly clear.
- **Sage Intacct Fundraising powered by DonorPerfect** (Early Adopter for nonprofits) and the expanding supplies inventory and construction workflows suggest Sage is building deeper industry-specific solutions that may reshape how vertical customers use the platform.
