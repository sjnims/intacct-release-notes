---
source: generated
year: "2024"
generated: 2026-08-12
generator: claude-opus-5
type: annual-summary
releases:
  - 2024-R1
  - 2024-R2
  - 2024-R3
  - 2024-R4
---

# 2024 Annual Summary

2024 was the year Sage Intacct pushed AI from pilot to production, made AP Automation generally available worldwide, and rounded out its product footprint with three substantial new applications — Fixed Assets Management, Supplies Inventory, and Construction WIP Management. Sage also invested heavily in localization, adding full German support, French tax compliance content, Canadian banking and check formats, and new UI languages, while the new REST API moved through open beta as the long-term replacement path for platform integrations. Alongside the additions came real housekeeping: American Express vendor payments were retired in December 2024, Authorize.net and PayPal were put on a November 2025 clock, Gantt charts in Projects were deprecated, and nearly every release added permissions that required role review. Finance teams that stayed current in 2024 gained materially more automation, but also had to actively manage payment-integration migrations and access controls.

## Key Themes

- AI moved from Early Adopter to general availability, with AP Automation shipping in all regions and Sage Copilot appearing in variance analysis and in-product help search.
- Global expansion accelerated through a full German localization stack (VAT, GoBD, DATEV, German UI), French TVA and FEC compliance, UK reverse-charge and partial-exemption updates, and new Canadian French and Spanish language betas.
- The product footprint broadened beyond core accounting with Fixed Assets Management, Supplies Inventory, PSA, Fundraising, Data Flow, and Forms and Operational Workflows.
- Construction became the deepest vertical investment of the year, from commitment compliance and WIP Management to joint checks, a Construction manager user type, and 25+ new library reports.
- Platform modernization was steady but opt-in: the new REST API, redesigned Lists experience, embedded Sage Intelligent Time, and DKIM/custom-domain email authentication.

## Most Significant Changes

- AP Automation reached GA in all regions, gained line-level GL and dimension predictions for every customer, added tax capture, and closed the year GA in Germany.
- Fixed Assets Management launched with automatic asset creation from vendor invoices, later adding posting date overrides, depreciation allocations, and new valuation reports.
- Construction WIP Management went GA with interactive overbilling, underbilling, and projected-profit reporting for the US, Canada, and Australia.
- Sage Intelligent Time became embedded and GA, with AI-generated time descriptions, redesigned approvals, time clocks, and rate cards.
- PO/purchasing automation matured from Early Adopter matching to GA automated transaction matching in all regions, with unlink/change and a consolidated transaction list.
- New Customer and Vendor reconciliation reports gave finance teams payment-to-invoice and payment-to-bill traceability in all regions.
- Bank reconciliation improved substantially with alpha match sequences, and file import support for OFX, QIF, BAI2, and CAMT.053.

## Items Requiring Attention

- Vendor Payments for American Express was retired in the US, with all payments required to be processed by December 20, 2024 — confirm no workflows still depend on it.
- Authorize.net and PayPal customer payment integrations sunset in November 2025 (US); replacement credit card solutions must be sourced from the Marketplace, so start evaluating now.
- Gantt charts in Projects were retired and resource planning reporting moved to PSA resource plans, requiring a migration for affected project teams.
- Every release added new permissions (AP, AR, GL, Order Entry, Inventory Control, Time & Expenses, Contracts) and changed restricted-user behavior — audit role assignments after each upgrade.
- Two smaller but disruptive changes: the November 18 bank description enhancement can break existing bank feed matching rules, and the 2025 relaxation of document ID requirements on draft OE/Purchasing transactions may affect integrations.

## What to Watch

- Sage Copilot is the clearest signal of direction, with Variance Analysis and semantic help search in Early Adopter for US and UK — expect broader Copilot coverage across financial workflows in 2025.
- The REST API remains in open beta and is expanding each release; plan integration modernization around it rather than continuing to invest in the legacy API.
- The new Lists experience with personalization, advanced filters, and side-by-side record details is available via "Try it" opt-in and points to a broader UI refresh.
