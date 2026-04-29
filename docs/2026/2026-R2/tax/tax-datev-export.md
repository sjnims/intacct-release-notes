---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Tax/2026-R2-tax-datev-export.htm
release: 2026-R2
extracted: 2026-04-29
title: "Enhancements for DATEV exports"
---

# Enhancements for DATEV exports

The DATEV export has been enhanced to better support German accounting and tax requirements. These updates make it easier for customers and their tax advisors to rely on exported data for accurate DATEV processing.

Organizations can now extract accounting and tax data in a DATEV compliant format to import directly into the DATEV system used by financial and tax advisors in Germany.

## What's changed

The DATEV export CSV files now include support for the following:

-   DATEV BU keys on tax details
    
-   Automatic and non-automatic GL accounts
    
-   Additional General Ledger booking information based on BU keys and automatic accounts
    

## Key benefits

-   **Enhanced support for DATEV requirements** expected by German accountants and tax advisors
    
-   **Improved accuracy** of tax and General Ledger data exported to DATEV
    

## How it works

Enter DATEV BU keys in the tax details. For tax details with BU keys, the BU key and the inclusive tax amount are included automatically in the DATEV export.

![Tax detail page in German with a callout box around the DATEV BU key field.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-tax-datev-export-bukey.png)

Mark General Ledger accounts as DATEV automatic accounts. For these automatic accounts, the inclusive tax amount is included automatically in the DATEV export.

![General Ledger account page in German with a callout box around the DATEV automatic account field.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-tax-datev-export-autoacct.png)

## Permissions and other requirements

| Subscription | Taxes |
| --- | --- |
| Regional availability | Germany |
| User type | Business |
| Permissions | General Ledger                                                                                                                                      Reporting accounts: List, View, Add, Edit, Delete                                                                     Reports, DATEV data export: Run |
| Restrictions | The company must operate in Germany or have an entity that operates in Germany. |
