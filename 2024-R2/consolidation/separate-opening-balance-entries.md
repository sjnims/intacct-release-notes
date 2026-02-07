---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Consolidation/2024-R2-separate-opening-balance-entries.htm
release: 2024-R2
extracted: 2026-02-07
title: "Post opening balance entries to retained earnings when consolidating after start of business activity"
---

# Post opening balance entries to retained earnings when consolidating after start of business activity

As a best practice, Sage Intacct recommends consolidating from the first period of business activity. For situations where you need to consolidate after the first period, Intacct now separates opening balance entries from current period consolidation activity.

For consolidations that start after the first period with transactions, Intacct now creates opening balance entries on balance sheet accounts, including retained earnings. This enables you to benefit from the clear, automated categorization and separation of opening balance from current period activity.

## Details

You can run a General Ledger (GL) report on a consolidation book to observe opening balance entries as separate from consolidation entries.

For example, the following table lists clearly distinct entries as they would appear in an Intacct GL report, such as:

- Consolidation entries
- Opening balance entries

| Account                  | Posted date | Memo            | Transaction amount (USD) | Debit (USD) | Credit (USD) | Balance (USD) |
| ------------------------ | ----------- | --------------- | ------------------------ | ----------- | ------------ | ------------- |
| 1000 - Bank of Banks     | 31 Jan 2024 | Consolidation   | 50,000.00                | 50,000.00   | 0            | 50,000.00     |
| 1000 - Bank of Banks     | 31 Jan 2024 | Opening balance | 75,000.00                | 75,000.00   | 0            | 125,000.00    |
| 3500 - Retained earnings | 31 Jan 2024 | Opening balance | 75,000.00                | 0.00        | 75,000.00    | -75,000.00    |
| 4000 - Sales             | 31 Jan 2024 | Consolidation   | 50,000.00                | 0.00        | 50,000.00    | -50,000.00    |

Observe that the GL report indicates the following:

- **Account 1000**. The opening balance amount is 75,000 USD. The consolidation entry amount is 50,000 USD. This creates a debit balance of 125,000 USD.
- **Account 3500, retained earnings**. Intacct creates the opening balance entry showing a credit of 75,000 USD for the calculated retained earnings amount.
- **Account 4000, Sales**. The consolidation entry shows a credit of 50,000 USD, which is the consolidation activity for account 4000. This results in a credit balance of -50,000 USD to the Sales account (account 4000).

The virtual close at the end of a user-defined period automatically updates your retained earnings balance. Intacct does not generate a retained earnings entry to net out income and expense accounts for the period.

## How it works

Intacct automatically separates consolidation entries from opening balance entries.

You can optionally run a GL report on the accrual book to confirm the separate entries.

1. Go to **General Ledger** > **All** > **Reports**\> **General Ledger report**.
2. For the **Reporting period**, select **Date of inception**.
3. For the **As of date**, select the period you consolidated.
4. Under **Filters**, select **Reporting book** and choose **Accrual**.
5. Select the relevant account.
6. Group by location.
7. Select **View** to run the report and review it.

## Requirements

| Subscription          | Domestic Consolidation Or Global Consolidation Or Advanced Ownership Consolidation                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                             |
| User type             | Business user with admin privileges                                                                                                                                                                                                                     |
| Permissions           | Company Entities: List, View, Add, Edit, Delete Inter-entity account mapping: View, Edit Consolidation Manage books: List, View, Add, Edit, Delete Run consolidations: Run Ownership structure List, View, Add, Edit, Delete Consolidate structure: Run |
