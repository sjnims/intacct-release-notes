---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Consolidation/2024-R1-AOC-custom-report.htm
release: 2024-R1
extracted: 2026-02-07
title: "Run an Advanced Ownership Consolidation custom report"
---

# Run an Advanced Ownership Consolidation custom report

With this release, Sage Intacct provides a new custom report for Advanced Ownership Consolidation. You can create a report to slice and dice your consolidation data as desired.

This new report eases the review and audit process by including the following:

- Consolidation exchange rates.
- Exchange rate dates for historical accounts.
- Dimensional data that's included in the consolidation.

## Details

The new custom report for Advanced Ownership Consolidation enables you to create a report based on consolidation reporting book entries. The primary data source is the Consolidation entries themselves.

Use the new custom report to:

- Drill down to the journal to view details such as the following fields:
  - Date, reporting book, account, location
  - Transaction currency, credit, debit
  - Base currency, credit, debit
  - Exchange rates, exchange rate dates for historical accounts, exchange rate types
  - Dimensional data included in the consolidation

- Group, sort, and filter by all columns from source and Consolidation entry.

## Example report

The following example report includes information such as:

- Location name and number (select the location number for more information)
- Department name and number (select the department number for more information)
- Transaction currency, debit, and credit
- Consolidation currency
- Exchange rate and exchange rate date
- Debit
- Credit

![A sample custom Advanced Ownership Consolidation report that includes location and department names, transaction currency, consolidation currency, exchange rate data, and debit and credit information.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-ICRW-AOC-sample-report.png)

The report groups the consolidation data, such as debits and credits, by the selected dimensions. So, for example, if you are consolidating with 3 dimensions, the customized report groups your consolidated debits and credits by each unique dimension value.

## How it works

1. Go to **Reports >** **All** **> Advanced**.
2. Select **Custom reports**.
3. Under **Step 1: Select a primary data source**, select as the primary data source **Consolidation entries**.
4. Continue creating your report according to your business needs.

## Requirements

| Subscription          | Consolidation Advanced Ownership Consolidation Customization Services OR Platform Services Custom Report Writer                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                               |
| User type             | Business user with admin privileges                                                                                                                                                                                                       |
| Permissions           | Consolidation Manage books: List, View, Add, Edit, Delete Run consolidations: Run Ownership structure List, View, Add, Edit, Delete Consolidate structure: Run Intacct Custom Report Writer Custom reports: List, View, Edit, Add, Delete |
