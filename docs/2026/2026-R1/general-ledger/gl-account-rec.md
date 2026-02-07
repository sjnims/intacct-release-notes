---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/General_Ledger/2026-R1-gl-account-rec.htm
release: 2026-R1
extracted: 2026-02-07
title: "Announcing GL account reconciliations"
---

# Announcing GL account reconciliations

Streamline your end-to-end reconciliation process with GL account reconciliations. This feature makes it simpler and faster to match offsetting debit and credit entry lines, resulting in more efficient reviews. We've also added a new GL account reconciliations activity report.

This feature was previously available in France where it's known as lettrage.

## Key benefits

- Makes it easy to find unmatched entries so that you can focus on exceptions.
- Improves audit clarity with a documented history of matched lines.

## Details

Start by enabling GL account reconciliations for your company and then for individual accounts. Use the GL account reconciliations page to manually match corresponding debit and credit transaction lines using an assigned lettering sequence.

[![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-gl-account-rec.png)](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-gl-account-rec.png)

Use the GL account reconciliation activity report to generate comprehensive reports with match results. Depending on how you filter the report, it shows the following information:

- Transaction activity that has been matched
- Transaction activity that's unmatched
- Both matched and unmatched activity

Run the report for matched transactions to review and validate the transactions that have been matched and to see the relationship between offsetting debits and credits. Run the report for unmatched transactions to see which transactions represent the remaining, unreconciled balance of the accounts.

[![GL Account Reconciliation Activity report](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-gl-account-rec-report.png)](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-gl-account-rec-report.png)

## How it works

Set up GL account reconciliations and enable it for individual accounts. Then you can match transactions.

### Set up GL account reconciliations

1. Set up a document sequence to use for the letter codes.
2. Enable the feature on the General Ledger Configuration page.
3. Enable the feature for individual accounts.

For more information, see [Set up GL account reconciliations](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set_up_lettrage).

### Match transactions

To match transactions, start by applying filters to view a subset of transactions.

1. Go to **General Ledger** > **All** > **GL account reconciliations**.
2. Apply your filters.
3. Select **View transactions**.
4. Select and match transactions.

For details, see [Match transactions using GL account reconciliations](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=match_transactions_using_lettrage).

### Run the activity report

For information about the new report, see [GL account reconciliations activity report](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=lettrage_activity_report).

## Permissions and other requirements

| Subscription          | General Ledger                                                                                                                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                        |
| User type             | Business user                                                                                                                                                                                                                      |
| Permissions           | To set up: Administration Application subscriptions: List, View, Configure General Ledger Accounts: List, View, and Edit To run:  General Ledger GL account reconciliations: Run GL account reconciliations activity (report): Run |
