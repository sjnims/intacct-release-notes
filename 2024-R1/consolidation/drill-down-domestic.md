---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Consolidation/2024-R1-drill-down-domestic.htm
release: 2024-R1
extracted: 2026-02-07
title: "Drill down to domestic source accrual data in General Ledger reports generated for consolidation books"
---

# Drill down to domestic source accrual data in General Ledger reports generated for consolidation books

You can now drill down to source transactions in the General Ledger (GL) report for single currency consolidation reporting books. A new transaction amount column in the report lists a linked amount for each transaction where you can drill down for details about the source journal entry. Drilling down to the accrual data from the consolidation book enables reviewing and verifying your numbers, which can be helpful during the audit process.

The drill-down feature applies only to domestic currency transactions in the General Ledger report. You can use the new drill-down feature in any General Ledger report you run with a consolidation book as the selected reporting book. Select the detailed view of the report to drill down to transaction details from the transaction amount column.

The new drill-down feature applies only to Intacct companies subscribed to Domestic Consolidation or Advanced Ownership Consolidation without multi-currency transactions.

## Details

The new drill-down feature provides the following benefits: 

- Enables drilling down to accrual data from the consolidation book to confirm transaction amounts.
- Improves traceability and audit by including a new transaction amount column.
- Can be exported in summary to CSV, PDF, and Excel formats.
- Applies to companies with subscriptions to Domestic Consolidation or Advanced Ownership Consolidation.

## Example GL report with drill-down

The following example General Ledger report shows the transactions that are posted to accounts related to the selected consolidation book on which the report ran. The **Txn amt** column shows highlighted transaction amounts, indicating the ability to drill down to the source of the transaction.

The transaction amounts in this example GL report include:

- 15,000, for account 1000
- 70,000, for account 1200
- 40,000, for account 2000
- 95,000, for account 4000

![A sample General Ledger report with a consolidation book as the selected reporting book. The Txn amt column enables drilling down to linked source journal entries (for domestic currency transactions only).](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-DC-GL-report-drill-down-to-source.png)

Selecting the link for the transaction posted to account 1000 in the amount of 15,000, enables drilling down to the source accrual entry:

![Drilling down from the GL report enables viewing the detailed source accrual entries, in this case we can find more information about the 15,000 transaction posted to account 1000.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-DC-GL-report-drill-down-source-JE-entry.png)

By drilling down to the source, you can observe the details of the transactions listed in the GL report. The transaction amount of 15,000 is posted to account 1000 as a debit. The memo indicates that this entry is an adjustment, as are the remaining entries here. Intacct lists other entries by account in the **Debit** or **Credit** columns. The totals for debits and credits are at the bottom of the table, indicating a balance between them.

So we have:

| Account | Debits    | Credits   |
| ------- | --------- | --------- |
| 1000    | 15,000.00 |           |
| 2000    |           | 40,000.00 |
| 1200    | 70,000.00 |           |
| 4000    |           | 95,000.00 |
| 5000    | 50,000.00 |           |
| Total   | 135,000   | 135,000   |

Having reviewed and verified the source accrual or user-defined book data, you save time and boost confidence in your numbers during the audit process.

## How it works

1.  Go to **General Ledger > **All** > Reports**, then select **General Ledger**.
2.  For the reporting book, select the relevant consolidation book.
3.  Under **Format**, select **Details** for **Show transaction presentation**.
4.  Select **View** to examine the report.
5.  Select a transaction and drill down to the source journal entries.

## Requirements

| Subscription          | General Ledger Domestic Consolidation or Advanced Ownership Consolidation                                                                                                                                                                                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                                                                   |
| User type             | Business user with admin privileges                                                                                                                                                                                                                                                                                                           |
| Permissions           | Company Entities: List, View, Add, Edit, Delete Inter-entity account mapping: View, Edit General Ledger Run General Ledger report Domestic Consolidation or Advanced Ownership Consolidation Manage books: List, View, Add, Edit, Delete Run consolidations: Run Ownership structure List, View, Add, Edit, Delete Consolidate structure: Run |
