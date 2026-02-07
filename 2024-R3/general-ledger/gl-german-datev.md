---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/General_Ledger/2024-R3-gl-german-datev.htm
release: 2024-R3
extracted: 2026-02-07
title: "DATEV format export for Germany"
---

# DATEV format export for Germany

[About DATEV data export](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about_DATEV_data_export)

General Ledger

The DATEV format export allows companies operating in Germany to securely exchange financial and accounting data between different software applications. The export files are DATEV compliant and ready for import, making it easier for tax consultants and accountants to prepare tax filings and financial statements for your company.

## Details

The DATEV data export consists of chart of account data, merged customer and vendor data, and transactional data for a user-defined period within a fiscal year. The resulting zipped folder can be downloaded and includes the following files:

-   **EXTF\_Sachkontobeschriftungen.csv** - DATEV-compliant CSV file for chart of accounts.
    
-   **EXTF\_DebKred\_Stamm.csv** - DATEV-compliant CSV file with merged vendor and customer information.
    
-   **EXTF\_Buchungsstapel.csv** - DATEV-compliant CSV file with transactional data of entries posting to the General Ledger. This includes incoming and outgoing invoices, credit notes and invoice corrections, and direct journal entries.
    
    The record quantity for the transactional data posting batch is 99,999 postings. If the number of records exceeds this limit, you will need to do multiple extractions using shorter periods.
    

## How it works

You must have the Deutsche Umsatzsteuer standard tax solution installed and configured at the company or entity level.

Users need the appropriate permissions to run the DATEV data export. You can grant those permissions under **Subscriptions** > **General Ledger** > **Reports** > **DATEV data export** > **Run**.

To access this compliance report, go to **General Ledger > All tab > Reports > DATEV data export**.

You can run the export at the entity level, or at the top level you can select the entity for the export. The period selected for export cannot span fiscal years.

Due to the requirements set by DATEV, you cannot customize or change the formatting of this export.

## Permissions and other requirements

| Subscription | Taxes |
| --- | --- |
| Regional availability | All regions (requires German tax solution) |
| User type | Business user with admin privileges |
| Permissions | General Ledger                                                                                                                                      Reports, DATEV data export: Run |
| Dependencies or other requirements | You must have the Deutsche Umsatzsteuer standard tax solution installed and configured at the company or entity level. |
