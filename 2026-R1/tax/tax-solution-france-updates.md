---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Tax/2026-R1-tax-solution-france-updates.htm
release: 2026-R1
extracted: 2026-02-07
title: "Expanded support for taxes in France"
---

# Expanded support for taxes in France

This idea came from you

To facilitate tax calculation and reporting, we updated our standard tax solution for France and the Accounting Entries File (FEC) report.

The TVA Française standard tax solution now includes regional and reduced rate coverage for overseas departments, regions, and collectives (DROM-COM) and Corsica (CORSE). We also introduced VAT-exempt handling for exports and exempt transactions.

The Accounting Entries File (FEC) report is enhanced to include lettrage data that was previously unsupported.

## Key benefits

-   The TVA Française standard tax solution now includes full and reduced rates for France domestic CA3, DROM-COM, and CORSE, and also VAT exemptions for non‑EU exports.
    
-   The Accounting Entries File (FEC) report now populates **column 14: EcritureLet**, and **column 15: DateLet**, with required lettrage data.
    

## How it works

Before updating the TVA Française standard tax solution, you must complete and submit all your CA3 returns. Transactions prior to 2025 (meaning, a tax submission start date prior to 01 January 2025) will not get picked up by the updated tax solution.

After you complete and close all tax submissions, you can install the updated TVA Française tax solution. When you do this, you must also update the tax submission start date for the tax solution to 01 January 2025 or later.

## Permissions and other requirements

| Subscription | Taxes |
| --- | --- |
| Regional availability | France |
| User type | Business |
| Permissions | General Ledger                                                                                                                                                                                                               Reports > Accounting entries file (FEC): Run, Run Final                                                                                                                                                                                                       Taxes                                                                                                                                                                                                                Tax Solutions: List, View, Add, Edit, Delete                                                                                                                                                                                                                   Tax Submissions: List, View, Add, Edit, Delete |
