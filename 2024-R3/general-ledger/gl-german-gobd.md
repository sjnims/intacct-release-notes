---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/General_Ledger/2024-R3-gl-german-gobd.htm
release: 2024-R3
extracted: 2026-02-07
title: "GoBD data export for Germany"
---

# GoBD data export for Germany

[About GoBD data export](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about_gobd_data_export)

General Ledger

The GoBD data export allows companies operating in Germany to provide an on-demand response to German tax authority requests. The export format is compliant and audit-ready for import to the tax inspector's audit software.

## Details

The GoBD data export compiles master data and transactional data for a user-defined period. The resulting zipped folder can be downloaded and includes the following files:

-   **Tax relevant data in CSV format**: This includes a comprehensive set of data files for the user-defined tax audit period and reporting entity. Importing these files into approved third-party analysis software allows the tax inspector to sort and apply filters to the tax-relevant data.
    
-   **Index.xml**: This file is similar to a table of contents and contains the names of the CSV files and their structural information, such as column headers and field formats.
    
-   **GoBD.dtd**: This file describes the structure of the index.xml file.
    

## How it works

You must have the Deutsche Umsatzsteuer standard tax solution installed and configured at the company or entity level.

Users need the appropriate permissions to run the GoBD data export. You can grant those permissions under **Subscriptions** > **General Ledger** > **Reports** > **GoBD data export** > **Run**.

To access this compliance report, go to **General Ledger > All tab > Reports > GoBD data export**.

You can run the report at the top level or the entity level.

Due to the import requirements for the tax auditor's software, you cannot customize or change the formatting of this report.

## Permissions and other requirements

| Subscription | Taxes |
| --- | --- |
| Regional availability | All regions (requires German tax solution) |
| User type | Business user with admin privileges |
| Permissions | General Ledger                                                                                                                                      Reports, GoBD data export: Run |
| Dependencies or other requirements | You must have the Deutsche Umsatzsteuer standard tax solution installed and configured at the company or entity level. |
